const Brand = require("../models/brand.model");





const createBrand = async (req, res) => {
  try {
    const { name, description, } = req.body;
    const brand = new Brand({ name, description, });
    await brand.save();
    res.status(201).json(brand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllBrand = async (req, res) => {
  try {
    const brands = await Brand.find({ isActive: true });
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) return res.status(404).json({ message: 'brand not found' });
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBrand = async (req, res) => {
  try {
    const { name, description, } = req.body;
    const brand = await Brand.findByIdAndUpdate(
      req.params.id, 
      { name, description, },
      { new: true }
    );
    if (!brand) return res.status(404).json({ message: 'brand not found' });
    res.status(200).json(brand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndUpdate(
      req.params.id, 
      { isActive: false },
      { new: true }
    );
    if (!brand) return res.status(404).json({ message: 'brand not found' });
    res.status(200).json({ message: 'Category deactivated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports={
  createBrand,
    getAllBrand,
    getBrandById,
    updateBrand,
    deleteBrand
    
}
