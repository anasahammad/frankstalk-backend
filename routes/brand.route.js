const express = require('express');
const { createBrand, getAllBrand, getBrandById, updateBrand, deleteBrand } = require('../controllers/brand.controller');

const router = express.Router();

// Category routes
router.post('/', createBrand);
router.get('/', getAllBrand);
router.get('/:id', getBrandById);
router.put('/:id', updateBrand);
router.delete('/:id', deleteBrand);

module.exports = router;