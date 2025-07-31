import mongoose from 'mongoose';

// Main schema for a video document
const videoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,  // Reference to the user who uploaded the video
        ref: 'user',
        required: true
    },
    title: {
        type: String,  // Title of the video
        required: true,
        trim: true
    },
    description: {
        type: String,  // Optional description of the video
        trim: true
    },
    videoLink: {
        type: String,  // URL to the video content
        required: true,
        trim: true
    },
    thumbnail: {
        type: String,  // URL to the video's thumbnail image
        required: true,
        trim: true
    },
    videoType: {
        type: String,  // Type or tag for the video (e.g., "Short", "Live", "All")
        default: "All",
        trim: true
    },
    category: {
        type: String,  // Main category for the video
        required: true,
        trim: true,
        enum: ["Music",
            "Gaming",
            "News",
            "Education",
            "Science & Technology",
            "Entertainment",
            "Sports",
            "Comedy",
            "How-to & Style",
            "People & Blogs",
            "Travel & Events",
            "Film & Animation",
            "Autos & Vehicles",
            "Pets & Animals",
            "Nonprofits & Activism",
            "Shows",
            "Shorts",
            "Live",
            "Documentary"] // Allowed categories
    },
    like: {
        type: Number,  // Number of likes
        default: 0
    },
    dislike: {
        type: Number,  // Number of dislikes
        default: 0
    },
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

// Create and export the Video model
const Video = mongoose.model('video', videoSchema);
export default Video;
