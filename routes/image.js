require('dotenv').config();
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const AWS = require('aws-sdk');
//model
const Image = require('../models/Image');
const Listing = require('../models/Listing');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

const upload = multer({
  fileFilter(res, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload an image'));
    }
    cb(undefined, file);
  },
});
// @route POST /images/:listingID
// @desc Upload the picture of listing
// @access Private
router.post('/:listingID', auth, upload.array('image'), async (req, res) => {
  let count = 0;
  try {
    const listing = await Listing.findOne({ _id: req.params.listingID });
    if (!listing) {
      return res.status(400).json({ msg: 'no listing found' });
    }
    const images = await Image.find({ listing: listing._id });
    if (images.length > 7 || images.length + req.files.length > 7) {
      return res.status(400).json({ msg: 'You can only upload 7 images max' });
    }
    req.files.forEach((file) => {
      count++;
      file.originalname = `listingImage${count}${req.params.listingID}.jpeg`;
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
      };
      s3.upload(params, async (error, data) => {
        if (error) {
          console.log(error);
        }
        const newImage = new Image({
          listing: req.params.listingID,
          image: data.Key,
        });
        await newImage.save();
      });
    });
    res.send('Images Uploaded');
  } catch (err) {
    return res.status(500).send('Server Error');
  }
});

// @route GET /images/:listingID
// @desc Get all the images for a listing
// @access Private
router.get('/:listingID', auth, async (req, res) => {
  try {
    const images = await Image.find({ listing: req.params.listingID });
    if (!images) {
      return res.status(400).json({ msg: 'No images found' });
    }

    async function getObject(objectKey) {
      try {
        const params = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: objectKey,
        };

        const data = await s3.getObject(params).promise();
        return data.Body.toString('base64');
      } catch (err) {
        throw new Error('Could not recieve files');
      }
    }

    let counter = 0;
    images.forEach(async (image) => {
      image.image = await getObject(image.image);
      counter++;
      if (counter === images.length) {
        res.status(200).send(images);
      }
    });
  } catch (err) {
    return res.status(500).send('Server Error');
  }
});

// @route DELETE /images/:imageID
// @desc Delete a picture of listing
// @access Private
router.delete('/:imageID', auth, async (req, res) => {
  try {
    const image = await Image.findOne({ _id: req.params.imageID });
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: image.image,
    };
    await image.remove();
    s3.deleteObject(params, (error, data) => {
      if (error) {
        console.log(error);
      }
      res.status(200).send('Image deleted');
    });
  } catch (err) {
    return res.status(500).send('Server Error');
  }
});

// @route DELETE /images/:listingID
// @desc Delete all the picture of listing
// @access Private
router.delete('/all/:listingID', auth, async (req, res) => {
  try {
    const images = await Image.find({ listing: req.params.listingID });
    images.forEach(async (image) => {
      if (image.path) {
        fs.unlink(image.path, (err) => {
          if (err) throw err;
        });
        await image.remove();
      }
    });
    res.status(200).send('All images are deleted.');
  } catch (err) {
    return res.status(500).send('Server Error');
  }
});

module.exports = router;
