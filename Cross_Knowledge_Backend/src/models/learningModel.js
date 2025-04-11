const mongoose = require('mongoose');

const learningModelSchema  = new mongoose.Schema({
    title: {type: String, required: true}, 
    description: {type: String, required: true},
    category: {type:String, required: true}, // e.g., "Woodworking", "Pottery"
    videoUrl: String, // YouTube, Video, or internal
    textContent: String, // Description, steps
    images: [String], // optional extra visuals
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},{
    timestamps: true,
})


const WorkSampleSchema = new mongoose.Schema({
    learner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    module: { type: mongoose.Schema.Types.ObjectId, ref: 'LearningModule' },
    fileUrl: String,
    comment: String,
    status: { type: String, enum: ['pending', 'reviewed'], default: 'pending' },
    feedback: String,
    uploadedAt: { type: Date, default: Date.now },
  });

const LearningModel = mongoose.model('Learning', learningModelSchema);
const WorkSampleModel = mongoose.model('WorkSample', WorkSampleSchema);

module.exports = { LearningModel, WorkSampleModel };