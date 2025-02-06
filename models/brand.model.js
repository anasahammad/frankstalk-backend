const {  mongoose } = require("mongoose");


const brandSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: {type: String, required: false},
    description: { type: String, required: false },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
})

const Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;