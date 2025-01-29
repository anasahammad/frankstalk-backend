const Aroma = require("../models/aroma.model");
const Category = require("../models/category.model");


const createAroma = async (req, res) => {
  try {
    const { name, description, image,  } = req.body;
    const aroma = new Aroma({ name, description, image, });
    await aroma.save();
    res.status(201).json(aroma);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllAroma = async (req, res) => {
  try {
    const aroma = await Aroma.find({ isActive: true });
    res.status(200).json(aroma);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAromaById = async (req, res) => {
  try {
    const aroma = await Aroma.findById(req.params.id);
    if (!aroma) return res.status(404).json({ message: 'aroma not found' });
    res.status(200).json(aroma);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAroma = async (req, res) => {
  try {
    const { name, description, image} = req.body;
    const aroma = await Aroma.findByIdAndUpdate(
      req.params.id, 
      { name, description, image },
      { new: true }
    );
    if (!aroma) return res.status(404).json({ message: 'Aroma not found' });
    res.status(200).json(aroma);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteAroma = async (req, res) => {
  try {
    const aroma = await Aroma.findByIdAndUpdate(
      req.params.id, 
      { isActive: false },
      { new: true }
    );
    if (!aroma) return res.status(404).json({ message: 'aroma not found' });
    res.status(200).json({ message: 'aroma deactivated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports={
    createAroma,
    getAllAroma,
    getAromaById,
    updateAroma,
    deleteAroma

 }
