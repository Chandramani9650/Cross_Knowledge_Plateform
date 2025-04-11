const express = require('express');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/userModel');

require('dotenv').config();
const { doHash, doHashValidation } = require('../utils/Hashing');
const { signupSchema, signinSchema } = require('../middlewares/validator')


exports.signup = async (req, res)=>{
const { name, email, password, role, bio, skills, profilePic } = req.body;
console.log(req.body);
try {
    const {error, value} = signupSchema.validate({name, email, password, role, bio, skills, profilePic});
    console.log(value,"1");
    if (error) {
        return res.status(400).json({ success:false, message: error.details[0].message });
    }
    const existingUser = await UserModel.findOne({ email });
    console.log(value,"2");
    if (existingUser) {
        return res.status(400).json({ success:false, message: 'Email already exists' });
    }
    const hashedPassword = await doHash(password, 10);
    console.log("3");
    const newUser = new UserModel({
        name,
        email,
        password: hashedPassword,
        role,
        bio,
        skills,
        profilePic
    });

    const result = await newUser.save()
    console.log(result, "4");
    result.password = undefined; // Remove password from the response
  
    res.status(201).json({
        success: true,
        message: 'Your account has been created successfully',
        result,
    });

    
} catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' }); 
}
}


exports.signin = async (req, res) => {
 const { email, password } = req.body;

 try {
   const {error, value} = signinSchema.validate({email, password});
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }
    const existingUser = await UserModel.findOne({ email }).select('+password');
    if (!existingUser) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }
    const result = await doHashValidation(password, existingUser.password);
    if (!result) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }
    const token = jwt.sign({
        userId: existingUser._id,
        email: existingUser.email,
        verified: existingUser.verified,
    },
    process.env.JWT_SECRET, 
    {
        expiresIn: process.env.JWT_EXPIRES_IN || '3d',
    });
    res.cookie('Autherization', 'Bearer'+ token, {
     expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
     httpOnly: process.env.NODE_ENV === 'production',
				secure: process.env.NODE_ENV === 'production',
    }).status(200).json({
        success: true,
        message: 'Login successful',
        token,
        user: {
            id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role,
            bio: existingUser.bio,
            skills: existingUser.skills,
            profilePic: existingUser.profilePic,
        },
        
    })


 } catch (error) {

    console.error(error);
    return res.status(500).json({ message: 'Internal server error while login' });
 }
}

exports.signout = async (req, res) => {
    try {
        res.clearCookie('Autherization', {
            httpOnly: process.env.NODE_ENV === 'production',
            secure: process.env.NODE_ENV === 'production',
        }).status(200).json({
            success: true,
            message: 'Logout successful',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error while logout' });
    }
}
