// THE CHARITY MODEL
const mongoose = require('mongoose');

module.exports = mongoose.model('Charity', {
    name: String,
    description: String,
    amountDonated: Number,
    date: String
});