import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CreateChannel.css';

function CreateChannel() {
  // Form state variables
  const [channelName, setChannelName] = useState('');
  const [description, setDescription] = useState('');
  const [banner, setBanner] = useState(null);
  const [bannerUrl, setBannerUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handles uploading of the banner image to Cloudinary
  async function handleBannerUpload(e) {
    const file = e.target.files[0];

    // No file selected
    if (!file) return toast.error('Please select a banner image');

    const maxSize = 5 * 1024 * 1024; // 5MB limit
    if (file.size > maxSize) {
      toast.error('Banner size exceeds 5 MB. Please upload an image less than 5 MB.');
      e.target.value = ''; // Reset file input
      return;
    }

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'youtube-clone'); // Cloudinary preset

    try {
      setIsLoading(true); // Start loading
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dlgorbunu/image/upload',
        data
      );

      // Save uploaded banner info
      setBannerUrl(response.data.url);
      setBanner(file);
      toast.success('Banner uploaded successfully');
    } catch (err) {
      console.error('Banner upload failed:', err);
      toast.error('Failed to upload banner');
    } finally {
      setIsLoading(false); // Stop loading
    }
  }

  // Handles channel creation
  async function handleCreate() {
    const userId = localStorage.getItem('UserId');

    // Validate input
    if (!channelName) return toast.error('Channel name is required');
    if (!userId) return toast.error('You must be logged in to create a channel');

    try {
      const response = await axios.post('http://localhost:8080/channel', {
        channelName,
        description,
        owner: userId,
        channelBanner: bannerUrl || 'https://example.com/default-banner.jpg', // Default if none uploaded
      });

      toast.success('Channel created successfully!');
      localStorage.setItem('UserChannelId', response.data._id); // Save channel ID locally
      window.location.href = `/mychannel/${userId}`; // Redirect to channel page
    } catch (err) {
      console.error('Channel creation failed:', err);
      toast.error('Failed to create channel');
    }
  }

  return (
    <div className="create-channel-page">
      <h2>Create Your Channel</h2>

      {/* Channel Name input */}
      <input
        placeholder="Channel Name"
        value={channelName}
        onChange={(e) => setChannelName(e.target.value)}
        className="create-channel-input"
      />

      {/* Description textarea */}
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="create-channel-textarea"
      />

      {/* File input for banner image */}
      <label className="create-channel-label">Upload Channel Banner:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleBannerUpload}
        className="create-channel-file"
        disabled={isLoading}
      />

      {/* Preview uploaded banner */}
      {bannerUrl && (
        <img
          src={bannerUrl}
          alt="Banner Preview"
          className="create-channel-banner-preview"
        />
      )}

      {/* Create Channel button */}
      <div className="create-channel-buttons">
        <button
          onClick={handleCreate}
          className="create-channel-button"
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create Channel'}
        </button>
      </div>

      {/* Toast notifications container */}
      <ToastContainer style={{ overflow: "hidden" }} />
    </div>
  );
}

export default CreateChannel;
