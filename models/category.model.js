const mongoose = require('mongoose');



const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: false },
  description: { type: String, required: false },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;