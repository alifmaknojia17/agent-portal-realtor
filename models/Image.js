const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'listing',
  },
  image: {
    type: String,
  },
  path: {
    type: String,
  },
});

module.exports = Image = mongoose.model('image', ImageSchema);
