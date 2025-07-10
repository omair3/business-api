const mongoose = require('mongoose');
//defines the structure of product documents in MongoDB
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String
});

module.exports = mongoose.model('Product', productSchema);
