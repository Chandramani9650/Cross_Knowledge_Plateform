// controllers/marketplaceController.js
const { MarketplaceItem } = require('../models/MarketPlaceItem');

exports.createMarketplaceItem = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const images = req.files.map(file => file.path);
    const newItem = new MarketplaceItem({
      creator: req.user._id,
      title,
      description,
      price,
      images
    });
    await newItem.save();
    res.status(201).json({ success: true, message: 'Item listed successfully', data: newItem });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getAllMarketplaceItems = async (req, res) => {
  try {
    const items = await MarketplaceItem.find().populate('creator', 'name email');
    res.json({ success: true, data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
