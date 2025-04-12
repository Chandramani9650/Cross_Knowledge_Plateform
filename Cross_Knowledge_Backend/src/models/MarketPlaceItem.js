const mongoose = require('mongoose');

// This schema represents a Marketplace feature in your platform, where mentors or learners can list items for sale—like crafted goods, learning kits, tools, or resources. Let's break it down clearly:

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