const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
    // product: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Product', // optional: tie it to a specific product if needed
    // },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const Conversation = mongoose.model('Conversation', conversationSchema);
  module.exports = { Conversation };
  