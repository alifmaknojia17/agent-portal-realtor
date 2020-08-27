// const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');
const config = require('config');
const express = require('express');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const router = express.Router();
//models
const Agent = require('../models/Agent');

// @route POST auth/register/
// @desc Register new user & get token
// @access Public
router.post(
  '/register',
  [
    check('fullName', 'Please provide your full name').not().isEmpty(),
    check('email', 'Please provide an email').isEmail(),
    check('password', 'Please provide password').isLength({ min: 6 }),
    check('phoneNumber', 'Please provide a phone number').not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      let { fullName, email, password, phoneNumber } = req.body;

      let agent = await Agent.findOne({ email });
      if (agent) {
        return res.status(400).send('User already exists');
      }

      const avatar = './agent-portal-client/public/profilePic/profilePic.jpeg';

      let phone = phoneNumber.split('');
      phone.splice(0, 0, '(');
      phone.splice(4, 0, ')');
      phone.splice(5, 0, ' ');
      phone.splice(9, 0, '-');
      phoneNumber = phone.join(' ');

      agent = new Agent({
        fullName,
        email,
        password,
        phoneNumber,
        avatar,
      });

      const salt = await bcrypt.genSalt(10);
      agent.password = await bcrypt.hash(password, salt);

      await agent.save();

      const payload = {
        agent: {
          id: agent.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

// @route POST auth/login/
// @desc Login new user & get token
// @access Public
router.post(
  '/login',
  [
    check('email', 'Please provide email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let agent = await Agent.findOne({ email });
      if (!agent) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, agent.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const payload = {
        agent: {
          id: agent.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          return res.status(200).json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
