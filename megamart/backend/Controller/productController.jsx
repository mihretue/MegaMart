const Product = require('../Model/productModel.jsx');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'products', // Cloudinary folder
    format: async (req, file) => 'png', // Image format
    public_id: (req, file) => `${file.fieldname}-${Date.now()}`,
  },
});

// Multer configuration for file uploads
const upload = multer({ storage });

// POST method to create a new product
const createProduct = async (req, res) => {
  
  try {
    console.log("Request received", req.body); 
    const { name, description, price, category, stock, image} = req.body;

    //   let imageUrl = image| null
    // if(!imageUrl){
    //   imageUrl= 'https://res-console.cloudinary.com/dyg8xfttm/thumbnails/v1/image/upload/v1699363510/Y2xkLXNhbXBsZS01/drilldown'
    // }
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      image , // Cloudinary URLs
      stock,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET method to retrieve all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET method to retrieve a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category').populate('ratings.user');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  upload // Export the Multer upload middleware
};
