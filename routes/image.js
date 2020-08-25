const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
//model
const Image = require('../models/Image');
const Listing = require('../models/Listing');

// upload multer object for post request
const upload = multer({
  storage: multer.diskStorage({
    destination(res, file, next) {
      next(null, './public/img');
    },
    filename(res, file, next) {
      next(null, file.originalname);
    },
  }),
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
router.post('/:listingID', auth, upload.array('image', 7), async (req, res) => {
  try {
    const listing = await Listing.findOne({ _id: req.params.listingID });
    if (!listing) {
      return res.status(400).json({ msg: 'no listing found' });
    }
    const images = await Image.find({ listing: listing._id });
    if (images.length > 7 || images.length + req.files.length > 7) {
      return res.status(400).json({ msg: 'You can only upload 7 images max' });
    }
    req.files.forEach(async (file) => {
      const newImage = new Image({
        listing: req.params.listingID,
        image: file.filename,
        path: file.path,
      });
      await newImage.save();
    });
    res.send('Images Uploaded');
  } catch (err) {
    console.log(err.message);
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
    res.status(200).send(images);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Server Error');
  }
});

// @route DELETE /images/:imageID
// @desc Delete a picture of listing
// @access Private
router.delete('/:imageID', auth, async (req, res) => {
  try {
    const image = await Image.findOne({ _id: req.params.imageID });
    fs.unlink(image.path, (err) => {
      if (err) throw err;
    });
    await image.remove();
    res.status(200).send('Image deleted');
  } catch (err) {
    console.log(err.message);
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
    console.log(err.message);
    return res.status(500).send('Server Error');
  }
});

module.exports = router;
