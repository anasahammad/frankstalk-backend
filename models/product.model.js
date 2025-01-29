
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  review: { type: String, required: true },
  rating: { type: Number, required: true },
})


const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: false },
  details: { type: [Object], required: false },
  additional: { type: [Object], required: false },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: false },
  isNew: { type: Boolean, default: false },
  bestSeller: { type: Boolean, default: false },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
  stock: { type: Number, required: true },
  category: { type:mongoose.Schema.Types.ObjectId, ref:'Category' , required: true },
  hotSale: { type: Boolean, default: false },
  isSale: { type: Boolean, default: false },
  images: { type: [String], required: true },
  isActive: { type: Boolean, default: true },
  reviews: [reviewSchema],
  aroma: { type: mongoose.Schema.Types.ObjectId, ref: 'Aroma', required: true },
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;