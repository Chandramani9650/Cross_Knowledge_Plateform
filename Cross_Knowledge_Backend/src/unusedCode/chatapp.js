// controllers/chatController.js
/*
const { Conversation } = require('../models/conversation');
const { Chat } = require('../models/chat');

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
    const { conversationId, messageType, content } = req.body;
    const sender = req.user._id;

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
*/