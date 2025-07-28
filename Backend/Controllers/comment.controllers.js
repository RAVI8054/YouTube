import Comment from "../Models/Comment.model.js";


export async function addComment(req,res) {
    try {
        // console.log("checkpoint 1")
    // console.log(req.user)
        const { video, message } = req.body;
        const userComment = new Comment({
            user: req.user._id,
            video,
            message,
        });

        // console.log(userComment)
        await userComment.save()
        res.status(201).json({ message: 'Comment added successfully', userComment })
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
}}

export async function getCommentByVideoId(req,res) {
    try {
        let {videoId}=req.params;
        const comments = await Comment.find({ video: videoId }).populate(
            "user",
            "channelName profilePic userName createdAt"
        );
        res.status(201).json({ message: 'all commets on this video', comments })
    } catch(error) {
        res.status(500).json({ error: 'Server error' });
    }
}