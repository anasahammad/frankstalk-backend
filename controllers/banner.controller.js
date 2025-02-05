// controllers/bannerController.js

const Banner = require("../models/banner.model");




// Create Banner
const createBanner = async (req, res) => {
  try {
    const { bannerPhoto } = req.body;

    // Validate `bannerPhoto` as an array
    if (!bannerPhoto || !Array.isArray(bannerPhoto)) {
      return res.status(400).json({ message: "bannerPhoto must be an array of URLs." });
    }

    // Validate each URL in the array
    const invalidUrls = bannerPhoto.filter((url) => !isValidUrl(url));
    if (invalidUrls.length > 0) {
      return res.status(400).json({
        message: "Invalid URLs detected in bannerPhoto.",
        invalidUrls,
      });
    }

    // Save banner to the database
    const banner = new Banner({ bannerPhoto });
    await banner.save();

    res.status(201).json({ message: "Banner created successfully!", banner });
  } catch (error) {
    res.status(500).json({ message: "Error creating banner", error: error.message });
  }
};

// Helper function to validate URLs
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};


// Get All Banners
const getBanners = async (req, res) => {
  try {
    const banners = await Banner.find();
    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({ message: "Error fetching banners", error: error.message });
  }
};

// Update Banner
const updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const { bannerPhoto } = req.body;

    if (!bannerPhoto || !Array.isArray(bannerPhoto)) {
      return res.status(400).json({ message: "bannerPhoto must be an array of URLs." });
    }

    const banner = await Banner.findByIdAndUpdate(
      id,
      { bannerPhoto },
      { new: true }
    );

    if (!banner) {
      return res.status(404).json({ message: "Banner not found." });
    }

    res.status(200).json({ message: "Banner updated successfully!", banner });
  } catch (error) {
    res.status(500).json({ message: "Error updating banner", error: error.message });
  }
};

// Delete Banner
const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await Banner.findByIdAndDelete(id);

    if (!banner) {
      return res.status(404).json({ message: "Banner not found." });
    }

    res.status(200).json({ message: "Banner deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting banner", error: error.message });
  }
};

module.exports = { createBanner, getBanners, updateBanner, deleteBanner };
