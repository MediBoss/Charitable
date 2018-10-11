// THE DONATION MODEL

const mongoose = require("mongoose");

module.exports = mongoose.model('Donation',{
  donorName: String,
  amount: Number,
  date: String,
  messageToCharity: String
});
