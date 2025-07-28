import Video from "../Models/Video.model.js";

export async function uploadVideo(req, res) {
  try {
    const { title, description, videoLink, videoType, thumbnail } = req.body;
    // this console for cheak user all details
    // console.log(req.user);
    const newVideo = new Video({
      user: req.user._id,
      title,
      description,
      videoLink,
      videoType,
      thumbnail,
    });
    await newVideo.save();
    return res.status(201).json({
      success: true,
      message: "Video uploaded successfully",
      video: newVideo,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

export async function getAllVideo(req, res) {
  try {
    //populate("arg=ref of collcetion name,arg2-field names which want")
    const videos = await Video.find().populate(
      "user",
      "channelName profilePic userName createdAt"
    );
    res.status(200).json({ success: "true", videos: videos });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

export async function getVideoById(req, res) {
  try {
    let { id } = req.params;
    //   console.log(id);
    const video = await Video.findById(id).populate(
      "user",
      "channelName profilePic userName createdAt"
    );
    res.status(200).json({ success: "true", videos: video });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

export async function getAllVideosByUserId(req, res) {
  try {
    const { userId } = req.params;
    const video = await Video.find({ user: userId }).populate(
      "user",
      "channelName profilePic userName createdAt"
    );
    res.status(200).json({ success: "true", video: video });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
