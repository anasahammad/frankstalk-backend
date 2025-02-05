// models/Banner.js
const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  bannerPhoto: {
    type: [String], // Array of image URLs
    required: true,
    // validate: {
    //   validator: function (v) {
    //     return v.length > 0; // Ensure at least one image is provided
    //   },
    //   message: "At least one banner photo is required.",
    // },
  },
}, { timestamps: true });

const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;
