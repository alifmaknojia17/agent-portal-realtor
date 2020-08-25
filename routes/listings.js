const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const express = require('express');
const router = express.Router();
//model
const Agent = require('../models/Agent');
const Listing = require('../models/Listing');

// @route GET /listings
// @desc Get all the listings of logged in agent
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const listings = await Listing.find({ agent: req.agent.id });
    if (!listings) {
      return res.status(400).json({ msg: 'No listings found' });
    }
    res.status(200).send(listings);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Server Error');
  }
});

// @route GET /listings/individual/:listingID
// @desc Get listing by id of logged in agent
// @access Private
router.get('/individual/:listingID', auth, async (req, res) => {
  try {
    const listings = await Listing.findOne({ _id: req.params.listingID });
    if (!listings) {
      return res.status(400).json({ msg: 'No listings found' });
    }
    res.status(200).send(listings);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Server Error');
  }
});

// @route POST /listings/add-listing
// @desc Create new listing for logged in agent
// @access Private
router.post(
  '/add-listing',
  [
    auth,
    [
      check('propertyDetails.street', 'Provide street address').not().isEmpty(),
      check('propertyDetails.city', 'Provide city').not().isEmpty(),
      check('propertyDetails.state', 'Provide state').not().isEmpty(),
      check('propertyDetails.zip', 'Provide zip code').not().isEmpty(),
      check('propertyDetails.price', 'Provide the price for the property')
        .not()
        .isEmpty(),
      check('propertyDetails.squareFoot', 'Enter Square foot for the property')
        .not()
        .isEmpty(),
      check('propertyDetails.beds', 'Provide number of beds on property')
        .not()
        .isEmpty(),
      check('propertyDetails.bath', 'Provide number of baths on property')
        .not()
        .isEmpty(),
      check('propertyDetails.listingType', 'What is the listing type')
        .not()
        .isEmpty(),
      check('overview', 'Provide an overview on the property').not().isEmpty(),
      check('factAndFeatures.propertyType', 'Provide the property type')
        .not()
        .isEmpty(),
      check(
        'factAndFeatures.yearBuilt',
        'Provide the built year for the property'
      )
        .not()
        .isEmpty(),
      check(
        'factAndFeatures.parking',
        'Provide the parking space on the property'
      )
        .not()
        .isEmpty(),
      check(
        'factAndFeatures.HOA',
        'Provide the HOA cost per month on the property'
      )
        .not()
        .isEmpty(),
      check('school.schoolName', 'Provide the school name').not().isEmpty(),
      check('school.grades', 'Provide the school grades').not().isEmpty(),
      check(
        'school.distance',
        'Provide the distance of school from the property'
      )
        .not()
        .isEmpty(),
      check('nearBy', 'Provide the near by things around the property')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        propertyDetails,
        overview,
        factAndFeatures,
        school,
        nearBy,
      } = req.body;

      let listing = await Listing.findOne({ propertyDetails });
      if (listing) {
        return res
          .status(400)
          .json({ msg: 'Listing with same address already exists' });
      }

      listing = new Listing({
        agent: req.agent.id,
        propertyDetails,
        overview,
        factAndFeatures,
        school,
        nearBy,
      });

      await listing.save();
      res.send(listing);
    } catch (err) {
      console.log(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

// @route PATCH /listings/update/:listingID
// @desc Update the selected listing
// @access Private
router.patch('/update/:listingID', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'propertyDetails',
    'overview',
    'factsAndFeatures',
    'schools',
    'nearBy',
  ];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(updates)
  );

  if (isValidUpdate) {
    return res.status(404).json({ msg: 'Invalid Update!' });
  }

  try {
    const listing = await Listing.findOne({ _id: req.params.listingID });

    if (!listing) {
      return res.status(400).json({ msg: 'No listing found' });
    }

    updates.forEach((update) => {
      listing[update] = req.body[update];
    });
    await listing.save();
    res.send(listing);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Server Error');
  }
});

// @route DELETE /listings/delete/:listingID
// @desc Delete the selected listing
// @access Private
router.delete('/delete/:listingID', auth, async (req, res) => {
  try {
    await Listing.deleteMany({ _id: req.params.listingID });
    res.status(200).send('Listing Deleted');
  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Server Error');
  }
});

module.exports = router;
