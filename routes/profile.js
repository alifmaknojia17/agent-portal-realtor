require('dotenv').config();
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const AWS = require('aws-sdk');
//models
const Agent = require('../models/Agent');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

// @route GET /profile
// @desc Get the profile of the logged in agent
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const agent = await Agent.findById(req.agent.id).select('-password');

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: agent.avatar,
    };

    s3.getObject(params, (error, data) => {
      if (error) {
        console.log(error);
      }
      agent.avatar = data.Body.toString('base64');
      return res.status(200).send(agent);
    });
  } catch (err) {
    return res.status(500).send('Server Error');
  }
});

// @route PATCH /profile/edit
// @desc Update the agent profile
// @access Private
router.patch('/edit', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['fullName', 'email', 'phoneNumber'];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidUpdate) {
    return res.status(400).json({ msg: 'Invalid Update' });
  }
  try {
    const agent = await Agent.findById(req.agent.id);
    if (!agent) {
      return res.status(400).json({ msg: 'No agent found' });
    }

    let phone = req.body.phoneNumber.split('');
    phone.splice(0, 0, '(');
    phone.splice(4, 0, ')');
    phone.splice(5, 0, ' ');
    phone.splice(9, 0, '-');
    req.body.phoneNumber = phone.join(' ');

    updates.forEach((update) => {
      (agent.fullName = req.body.fullName),
        (agent.email = req.body.email),
        (agent.phoneNumber = req.body.phoneNumber);
    });
    await agent.save();
    res.status(200).send(agent);
  } catch (err) {
    return res.status(500).send('Server Error');
  }
});

// @route PATCH /profile/password
// @desc Change password
// @access Private
router.patch(
  '/password',
  [
    auth,
    [
      check('newPassword', 'Please enter new password to change it').exists(),
      check('currentPassword', 'Please enter your current password').exists(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { currentPassword, newPassword } = req.body;
    try {
      const agent = await Agent.findById(req.agent.id);
      if (!agent) {
        return res.status(400).json({ msg: 'No agent found' });
      }
      const isMatch = await bcrypt.compare(currentPassword, agent.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ msg: 'Current password entered does not match' });
      }
      const salt = await bcrypt.genSalt(10);
      agent.password = await bcrypt.hash(newPassword, salt);
      await agent.save();
      res.status(200).send('Password changed');
    } catch (err) {
      return res.status(500).send('Server Error');
    }
  }
);

// upload object for profile pic
const upload = multer({
  fileFilter(res, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload an image'));
    }
    cb(undefined, file);
  },
});

// @route PATCH /profile/image
// @desc Change profile image
// @access Private
router.patch('/image', auth, upload.single('avatar'), async (req, res) => {
  try {
    const agent = await Agent.findById(req.agent.id);
    if (!agent) {
      return res.status(400).json({ msg: 'No agent found' });
    }
    const avatarKey = `profilePic${agent._id}.jpeg`;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: avatarKey,
      Body: req.file.buffer,
    };

    s3.upload(params, async (error, data) => {
      if (error) {
        console.log(error);
      }
      agent.avatar = data.Key;
      await agent.save();
      res.status(200).send('Picture uploaded');
    });
  } catch (err) {
    return res.status(500).send('Server Error');
  }
});

module.exports = router;
