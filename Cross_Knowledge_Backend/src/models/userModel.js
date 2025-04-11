const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
 name:{ 
    type: String,
    trim: true,
    required: true ,
    minlength: [5, "Name must be at least 2 characters"],
    maxlength: [32, "Name must be at most 32 characters"],
    lowercase:true
    },
email:{ 
         type: String,
         required:[true,"Email is required"],
         unique: [true, "Email must be unique"],
         trim: true,
         minlength: [6, "Email must be at least 6 characters"],
         maxlength: [48, "Email must be at most 32 characters"],
         lowercase: true
        },

password:{ 
    type: String,
    required: [true, 'Password must be provided!'],
    trim: true,
    select: false,

},

role: {
      type: String,
      enum: ['mentor', 'learner'], 
      required: true
    
    },
bio: String,

skills: [String],

profilePic: String,

//address section
address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    country: { type: String }
  },

  

verified: {
    type: Boolean,
    default: false,
},
verificationCode: {
    type: String,
    select: false,
},
verificationCodeValidation: {
    type: Number,
    select: false,
},
forgotPasswordCode: {
    type: String,
    select: false,
},
forgotPasswordCodeValidation: {
    type: Number,
    select: false,
}

},
{
    timestamps: true,
    
}
)

const UserModel= mongoose.model('User', userSchema);
module.exports = { UserModel };