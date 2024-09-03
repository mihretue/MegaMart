const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  image: String, // URLs of product images
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  // ratings: [
  //   {
  //     user: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'User',
  //     },
  //     rating: {
  //       type: Number,
  //       required: true,
  //       min: 1,
  //       max: 5,
  //     },
  //     review: String,
  //   },
  // ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
