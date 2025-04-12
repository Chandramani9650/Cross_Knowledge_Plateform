const {LearningModel} = require('../models/learningModel');
const { MentorshipRequest } = require('../models/MenterShipModel');

exports.addlearningPost = async (req, res) => {
  try {
    const { title, description, category, videoUrl, textContent } = req.body;

    // Validate text fields
    if (!title || !description || !category || !videoUrl || !textContent) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const imagePaths = req.files?.map(file => file.path) || [];

    const newLearningPost = new LearningModel({
      title,
      description,
      category,
      videoUrl,
      textContent,
      images: imagePaths,
      createdBy: req.user?._id // Optional if using authentication
    });

    await newLearningPost.save();

    return res.status(200).json({
      success: true,
      message: 'Learning post created successfully',
      data: newLearningPost
    });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

//mentership request handling

exports.sendMentorshipRequest = async (req, res) => {
  try {
    const { mentorId, moduleId, message } = req.body;
    const learnerId = req.user._id; // From identifier middleware

    const newRequest = await MentorshipRequest.create({
      mentor: mentorId,
      learner: learnerId,
      module: moduleId,
      message
    });

    return res.status(201).json({ success: true, data: newRequest });
  } catch (err) {
    console.error('Error creating mentorship request:', err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.getMentorRequests = async (req, res) => {
    try {
      const mentorId = req.user._id;
  
      const requests = await MentorshipRequest.find({ mentor: mentorId })
        .populate('learner', 'name email')
        .populate('module', 'title');
  
      res.status(200).json({ success: true, data: requests });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to fetch requests' });
    }
  };
exports.respondToRequest = async (req, res) => {
    try {
      const { requestId } = req.params;
      const { status } = req.body; // "accepted" or "rejected"
  
      if (!['accepted', 'rejected'].includes(status)) {
        return res.status(400).json({ success: false, message: 'Invalid status' });
      }
  
      const request = await MentorshipRequest.findByIdAndUpdate(
        requestId,
        { status },
        { new: true }
      );
  
      res.status(200).json({ success: true, data: request });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to update request' });
    }
  };
    
