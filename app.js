require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const adminRoutes = require('./routes/admin');

const app = express();

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Set Pug as the view engine and configure the views folder
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware to handle form submissions and serve static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Admin routes (add, delete, list)
app.use('/admin', adminRoutes);

// API models
const Product = require('./models/product');
const Location = require('./models/location');
const Service = require('./models/service');

// API endpoints that return JSON data
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

app.get('/api/locations', async (req, res) => {
    try {
        const locations = await Location.find();
        res.json(locations);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch locations' });
    }
});

app.get('/api/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch services' });
    }
});

// Start the server on port 3000 (or from .env)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
