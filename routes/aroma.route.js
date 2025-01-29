const express = require('express');
const { createAroma, getAllAroma, getAromaById, updateAroma, deleteAroma } = require('../controllers/aroma.controller');

const router = express.Router();

// Category routes
router.post('/', createAroma);
router.get('/', getAllAroma);
router.get('/:id', getAromaById);
router.put('/:id', updateAroma);
router.delete('/:id', deleteAroma);

module.exports = router;