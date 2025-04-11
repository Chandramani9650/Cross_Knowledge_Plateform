const mongoose = require('mongoose');
const MarketplaceItemSchema = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    description: String,
    images: [String],
    price: Number,
    isAvailable: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  });


  const MarketplaceItem = mongoose.model('MarketplaceItem', MarketplaceItemSchema);
  module.exports = {MarketplaceItem}