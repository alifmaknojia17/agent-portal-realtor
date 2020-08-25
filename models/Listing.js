const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'agent',
  },
  propertyDetails: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    squareFoot: {
      type: String,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    bath: {
      type: String,
      required: true,
    },
    listingType: {
      type: String,
      required: true,
    },
  },
  overview: {
    type: String,
    required: true,
  },
  factAndFeatures: {
    propertyType: {
      type: String,
      required: true,
    },
    yearBuilt: {
      type: Number,
      required: true,
    },
    parking: {
      type: Number,
      required: true,
    },
    HOA: {
      type: String,
      required: true,
    },
  },
  school: {
    schoolName: {
      type: String,
      required: true,
    },
    grades: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
  },
  nearBy: [
    {
      type: String,
      required: true,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Listing = mongoose.model('listing', ListingSchema);
