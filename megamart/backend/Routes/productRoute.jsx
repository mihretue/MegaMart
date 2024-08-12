const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, getProductById, upload } = require('../Controller/productController.jsx');

// Route to create a new product (with image upload)
router.post('/', upload.array('images', 5), createProduct); // Limit to 5 images

// Route to get all products
router.get('/', getAllProducts);

// Route to get a single product by ID
router.get('/:id', getProductById);

module.exports = router;
