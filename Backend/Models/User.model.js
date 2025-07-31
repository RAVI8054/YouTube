import mongoose from 'mongoose';

// Define the schema for a user
const userSchema = new mongoose.Schema({
    channelName: {
        type: String,        // Public name for the user's channel
        required: true,
        trim: true
    },
    userName: {
        type: String,        // Unique username for login or display
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,        // Hashed password
        required: true
    },
    about: {
        type: String,        // Short bio or description about the user/channel
        required: true,
        trim: true
    },
    profilePic: {
        type: String,        // URL to profile picture
        required: true,
        trim: true
    }
}, { timestamps: true });     // Automatically adds createdAt and updatedAt fields

// Create and export the User model
const User = mongoose.model('user', userSchema);
export default User;
