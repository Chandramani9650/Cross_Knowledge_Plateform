
const mongoose = require('mongoose');
const MentorshipRequestSchema = new mongoose.Schema({
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    learner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    module: { type: mongoose.Schema.Types.ObjectId, ref: 'LearningModule' },
    message: String,
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    requestedAt: { type: Date, default: Date.now },
  });
  
const MentorshipRequest = mongoose.model('MentorshipRequest', MentorshipRequestSchema);

module.exports = { MentorshipRequest };