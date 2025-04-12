// controllers/chatController.js
const { Conversation } = require('../models/ConversationSchema');
const { Chat } = require('../models/ChatSchema');

// Start or fetch a conversation between two users
exports.startOrGetConversation = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const targetUserId = req.params.userId;

    let conversation = await Conversation.findOne({
      participants: { $all: [currentUserId, targetUserId] },
    });

    if (!conversation) {
      conversation = new Conversation({ participants: [currentUserId, targetUserId] });
      await conversation.save();
    }

    res.status(200).json({ success: true, conversation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get all messages of a conversation
exports.getMessages = async (req, res) => {
  try {
    const messages = await Chat.find({ conversationId: req.params.conversationId })
      .populate('sender', 'name')
      .sort({ timestamp: 1 });

    res.status(200).json({ success: true, messages });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Send a message
exports.sendMessage = async (req, res) => {
    try {
      const { messageType, content } = req.body;
      const sender = req.user._id;
      const conversationId = req.params.conversationId;
console.log("Sender:", req.user?._id);
console.log("ConversationId:", req.params.conversationId);
      if (!sender || !conversationId) {
        return res.status(400).json({ success: false, message: 'Missing sender or conversationId' });
      }
  
      const message = new Chat({
        conversationId,
        sender,
        messageType,
        content,
      });
  
      await message.save();
  
      res.status(201).json({ success: true, message });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  


//delete a message
exports.deleteMessage = async (req, res) => {
    try {
      const { messageId } = req.params;
      const currentUserId = req.user._id;
  
      const message = await Chat.findById(messageId);
  
      if (!message) return res.status(404).json({ success: false, message: 'Message not found' });
  
      if (!message.sender.equals(currentUserId)) {
        return res.status(403).json({ success: false, message: 'Unauthorized: You can only delete your own messages' });
      }
  
      await message.deleteOne();
      res.status(200).json({ success: true, message: 'Message deleted' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  
  // Edit a message
  exports.editMessage = async (req, res) => {
    try {
      const { messageId } = req.params;
      const { content } = req.body;
      const currentUserId = req.user._id;
  
      const message = await Chat.findById(messageId);
      if (!message) return res.status(404).json({ success: false, message: 'Message not found' });
  
      if (!message.sender.equals(currentUserId)) {
        return res.status(403).json({ success: false, message: 'Unauthorized: You can only edit your own messages' });
      }
  
      message.content = content;
      await message.save();
  
      res.status(200).json({ success: true, message });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  
  // Mark messages as seen
  exports.markAsSeen = async (req, res) => {
    try {
      const { conversationId } = req.params;
      const currentUserId = req.user._id;
  
      await Chat.updateMany(
        { conversationId, sender: { $ne: currentUserId }, seen: { $ne: true } },
        { $set: { seen: true } }
      );
  
      res.status(200).json({ success: true, message: 'Messages marked as seen' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  