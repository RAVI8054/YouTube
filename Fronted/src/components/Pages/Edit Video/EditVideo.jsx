import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../UploadVideoPage/VideoUpload.css'; // Reuse styles from upload video

function EditVideo() {
  const { id } = useParams(); // Get video ID from URL params
  const navigate = useNavigate();
  const userId = localStorage.getItem('UserId'); // Get logged-in user ID

  // State to hold form fields for video data
  const [videoData, setVideoData] = useState({
    title: '',
    description: '',
    videoType: '',
    videoLink: '',
    thumbnail: '',
  });

  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Store error messages
  const [thumbnailFile, setThumbnailFile] = useState(null); // Hold newly selected thumbnail

  // Fetch video details when component mounts
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(` https://youtube-backend-b29o.onrender.com/api/video/${id}`, {
          withCredentials: true,
        });
        const { title, description, videoType, thumbnail } = res.data.video;
        setVideoData({ title, description, videoType, thumbnail });
      } catch (err) {
        setError('Failed to fetch video data');
        toast.error('Failed to fetch video data');
        console.error(err);
      }
    };
    fetchVideo();
  }, [id]);

  // Handle input change for each form field
  const handleChange = (e, field) => {
    setVideoData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  // Store thumbnail file when user selects one
  const handleThumbnailChange = (e) => {
    setThumbnailFile(e.target.files[0]);
  };

  // Upload thumbnail to Cloudinary (only if user selected a new one)
  const uploadThumbnail = async () => {
    if (!thumbnailFile) return videoData.thumbnail; // Return old thumbnail if not updated

    const data = new FormData();
    data.append('file', thumbnailFile);
    data.append('upload_preset', 'youtube-clone'); // Cloudinary upload preset

    try {
      setIsLoading(true);
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dlgorbunu/image/upload',
        data
      );
      return response.data.url; // Cloudinary returns URL
    } catch (err) {
      setError('Thumbnail upload failed');
      toast.error('Thumbnail upload failed');
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Submit updated video data to server
  const handleUpdateVideo = async () => {
    if (!userId) {
      toast.error('You must be logged in to edit videos');
      return;
    }

    if (!videoData.title || !videoData.videoType) {
      toast.error('Title and category are required');
      return;
    }

    try {
      setIsLoading(true);
      let updatedVideoData = { ...videoData };

      // If thumbnail changed, upload new one
      if (thumbnailFile) {
        const thumbnailUrl = await uploadThumbnail();
        updatedVideoData.thumbnail = thumbnailUrl;
      }

      // Send PUT request to update video
      await axios.put(
        ` https://youtube-backend-b29o.onrender.com/api/video/${id}`,
        updatedVideoData,
        { withCredentials: true }
      );

      toast.success('Video updated successfully');
      navigate(`/mychannel/${userId}`); // Navigate back to user's channel
    } catch (err) {
      setError('Failed to update video');
      toast.error(err.response?.data?.error || 'Failed to update video');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-heading">Edit Video</h2>

      {/* Video Title */}
      <input
        type="text"
        className="upload-input"
        placeholder="Title"
        value={videoData.title}
        onChange={(e) => handleChange(e, 'title')}
      />

      {/* Video Description */}
      <textarea
        className="upload-textarea"
        placeholder="Description"
        value={videoData.description}
        onChange={(e) => handleChange(e, 'description')}
      />

      {/* Video Category/Type */}
      <textarea
        className="upload-textarea"
        placeholder="Category"
        value={videoData.videoType}
        onChange={(e) => handleChange(e, 'videoType')}
      />

      {/* Video Link */}
      <input
        type="text"
        className="upload-input"
        placeholder="Video Link"
        value={videoData.videoLink}
        onChange={(e) => handleChange(e, 'videoLink')}
      />

      {/* Thumbnail Upload */}
      <input
        type="file"
        className="upload-input"
        accept="image/*"
        onChange={handleThumbnailChange}
      />

      {/* Current Thumbnail Preview */}
      {videoData.thumbnail && (
        <div className="thumbnail-preview">
          <p>Current Thumbnail:</p>
          <img
            src={videoData.thumbnail}
            alt="Thumbnail Preview"
            style={{ maxWidth: '200px', marginTop: '10px' }}
          />
        </div>
      )}

      {/* Action Buttons */}
      <div className="button-group">
        <button
          onClick={handleUpdateVideo}
          className="upload-button"
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update'}
        </button>
        <button
          onClick={() => navigate(`/mychannel/${userId}`)}
          className="cancel-button"
        >
          Cancel
        </button>
      </div>

      {/* Show error message if exists */}
      {error && <p className="error-text">{error}</p>}

      {/* Toast notification container */}
      <ToastContainer style={{ overflow: 'hidden' }} />
    </div>
  );
}

export default EditVideo;
