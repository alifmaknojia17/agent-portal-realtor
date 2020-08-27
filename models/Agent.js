const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  dates: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Agent = mongoose.model('agent', AgentSchema);
