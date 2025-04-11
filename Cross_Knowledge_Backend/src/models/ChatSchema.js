const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Conversation',
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    messageType: {
      type: String,
      enum: ['text', 'image', 'video'],
      default: 'text',
    },
    content: {
      type: String, // Text or media URL
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    }
  });
  
const chatwithMentor = mongoose.model('Chat', messageSchema);
module.exports = { chatwithMentor };

  