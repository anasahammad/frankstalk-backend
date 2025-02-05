// routes/bannerRoutes.js
const express = require('express');
const { createBanner, getBanners, updateBanner, deleteBanner } = require('../controllers/banner.controller');


const router = express.Router();

// Create a new banner
router.post('/', createBanner);

// Get all banners
router.get('/', getBanners);

// Update a banner by ID
router.put('/:id', updateBanner);

// Delete a banner by ID
router.delete('/:id', deleteBanner);

module.exports = router;
