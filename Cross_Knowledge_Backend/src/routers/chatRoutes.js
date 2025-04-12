const express = require('express');
const chatRouter = express.Router();
const { identifier } = require('../middlewares/identification');
const {
  startOrGetConversation,
  getMessages,
  sendMessage,
    deleteMessage,
    editMessage,
    markAsSeen,

} = require('../controllers/chatController');

// Start or get a conversation with a mentor
chatRouter.post('/start', identifier, startOrGetConversation);

// Get all messages in a conversation
chatRouter.get('/:conversationId/messages', identifier, getMessages);

// Send a message in a conversation
chatRouter.post('/:conversationId/send', identifier, sendMessage);
chatRouter.delete('/:messageId', identifier, deleteMessage);
chatRouter.put('/:messageId', identifier, editMessage);
chatRouter.put('/seen/:conversationId', identifier, markAsSeen);

module.exports = chatRouter;