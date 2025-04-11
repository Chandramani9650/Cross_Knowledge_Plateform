const joi = require('joi');

// validator for signup

exports.signupSchema = joi.object({

    name: joi.string().min(5).max(32).required(),
    email: joi.string().min(6).max(48).email({tlds:{allow:['com', 'net','in']}}).lowercase().required(),
    password: joi.string().min(8).max(32).required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$'))
    .messages({
        'string.pattern.base': 'Password must be alphanumeric and between 8 to 32 characters long'
    }),
    role: joi.string().valid('mentor', 'learner').required(),
    bio: joi.string().optional(),
    skills: joi.array().items(joi.string()).optional(),
    profilePic: joi.string().optional(),
})

// validator for signin
exports.signinSchema = joi.object({

    email: joi.string().min(6).max(48).email({tlds:{allow:['com', 'net','in']}}).lowercase().required(),
    password: joi.string().min(6).max(32).required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$'))
})