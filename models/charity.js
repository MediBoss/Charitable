const mongoose = require('mongoose');

module.exports = mongoose.model('Charity', {
    name: String,
    description: String,
    cause: String
});
