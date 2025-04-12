const express = require('express');
const router = express.Router();
const { identifier } = require('../middlewares/identification');
const { postDiscussion, getDiscussionsByModule, addReplyToDiscussion } = require('../controllers/discussionController');

// Create a new discussion post
router.post('/create', identifier, postDiscussion);

// Get all discussions for a specific module
router.get('/module/:moduleId', identifier, getDiscussionsByModule);

// Add a reply to a specific discussion
router.post('/reply/:discussionId', identifier, addReplyToDiscussion);

module.exports = router;
