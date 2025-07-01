const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB Successfully!!");
    } catch (e) {
        console.log(e.message);
    }
}

module.exports = { connectToMongoDB };
