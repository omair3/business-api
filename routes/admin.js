const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Location = require('../models/location');
const Service = require('../models/service');

// Create a lookup for the different collections
const collections = {
    products: Product,
    locations: Location,
    services: Service
};

// Show a list of items for the given type (products, locations, or services)
router.get('/:type', async (req, res) => {
    const { type } = req.params;
    const items = await collections[type].find();
    res.render(type, { items, type });
});

// Show the form to add a new item
router.get('/:type/add', (req, res) => {
    const { type } = req.params;
    res.render('addForm', { type });
});

// Handle form submission to add a new item
router.post('/:type/add', async (req, res) => {
    const { type } = req.params;
    await collections[type].create(req.body);
    res.redirect(`/admin/${type}`);
});

// Delete an item by ID
router.post('/:type/delete/:id', async (req, res) => {
    const { type, id } = req.params;
    await collections[type].findByIdAndDelete(id);
    res.redirect(`/admin/${type}`);
});

module.exports = router;
