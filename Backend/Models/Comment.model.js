// Import mongoose for defining the schema and model
import mongoose from 'mongoose';

// Define the schema for a comment
const commentSchema = new mongoose.Schema(
    {
        // Reference to the user who made the comment
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the 'User' model (capitalized for convention)
            required: true,
        },

        // Reference to the video the comment belongs to
        video: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video', // Reference to the 'Video' model
            required: true,
        },

        // The actual comment message
        message: {
            type: String,
            required: true,
            trim: true, // Trims whitespace from both ends
        },
    },
    {
        // Automatically adds createdAt and updatedAt fields
        timestamps: true,
    }
);

// Create and export the Comment model
const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
