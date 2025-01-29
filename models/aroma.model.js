

const mongoose = require('mongoose');


const aromaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: false },
  description: { type: String, required: false },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

const Aroma = mongoose.model('Aroma', aromaSchema);
module.exports = Aroma;
