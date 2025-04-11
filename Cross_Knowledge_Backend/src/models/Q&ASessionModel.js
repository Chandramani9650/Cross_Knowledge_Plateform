const mongoose = require('mongoose');

const DiscussionSchema = new mongoose.Schema({
    module: { type: mongoose.Schema.Types.ObjectId, ref: 'LearningModule' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    question: String,
    replies: [
      {
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        text: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  });

  const DiscussionModel = mongoose.model('Discussion', DiscussionSchema);

  module.exports = { DiscussionModel };