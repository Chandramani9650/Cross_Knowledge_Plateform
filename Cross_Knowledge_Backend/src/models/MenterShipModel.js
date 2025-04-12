
const mongoose = require('mongoose');


// Learner asks for 1-on-1 guidance from a mentor in a specific module. Request from learner to mentor
const MentorshipRequestSchema = new mongoose.Schema({
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, //// Mentor being requested
    learner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Learner requesting help
    module: { type: mongoose.Schema.Types.ObjectId, ref: 'LearningModule' }, // Course/topic/content
    message: String, // Optional message from the learner to 
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    requestedAt: { type: Date, default: Date.now },
  });
  
const MentorshipRequest = mongoose.model('MentorshipRequest', MentorshipRequestSchema);

module.exports = { MentorshipRequest };