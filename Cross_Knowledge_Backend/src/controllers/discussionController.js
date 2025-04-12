const { DiscussionModel } = require('../models/Q&ASessionModel');

// Post a new discussion
exports.postDiscussion = async (req, res) => {
  try {
    const { module, question } = req.body;
    const author = req.user._id;

    const discussion = await DiscussionModel.create({ module, question, author });
    res.status(201).json({ success: true, data: discussion });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error posting discussion', error: err });
  }
};

// Get discussions by module ID
exports.getDiscussionsByModule = async (req, res) => {
  try {
    const { moduleId } = req.params;

    const discussions = await DiscussionModel.find({ module: moduleId })
      .populate('author', 'name')
      .populate('replies.author', 'name');

    res.status(200).json({ success: true, data: discussions });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching discussions', error: err });
  }
};

// Add reply to a discussion
exports.addReplyToDiscussion = async (req, res) => {
  try {
    const { discussionId } = req.params;
    const { text } = req.body;
    const author = req.user._id;

    const discussion = await DiscussionModel.findById(discussionId);
    if (!discussion) return res.status(404).json({ success: false, message: 'Discussion not found' });

    discussion.replies.push({ author, text });
    await discussion.save();

    res.status(200).json({ success: true, data: discussion });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error adding reply', error: err });
  }
};
