const mongoose = require('mongoose');
//defines the fields for each location entry
const locationSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String
});

module.exports = mongoose.model('Location', locationSchema);
