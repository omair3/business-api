const mongoose = require('mongoose');
//defines the fields for each service entry
const serviceSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

module.exports = mongoose.model('Service', serviceSchema);
