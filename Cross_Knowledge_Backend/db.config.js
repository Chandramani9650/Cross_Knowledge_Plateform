const mongoose = require('mongoose');
require('dotenv').config();

const ConnectionDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to MongoDB successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

module.exports = {ConnectionDB};