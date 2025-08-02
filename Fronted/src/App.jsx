import React, { useState, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';

// Components
import NavBar from './components/NavBar/NavBar';

// Lazy load page components
const Home = lazy(() => import('./components/Pages/Home/Home'));
const VideoPage = lazy(() => import('./components/Pages/VideoPlayer/VideoPage'));
const ProfilePage = lazy(() => import('./components/Pages/Profile/ProfilePage'));
const SignUp = lazy(() => import('./components/Pages/SignUp/SignUp'));
const CreateChannel = lazy(() => import('./components/Pages/CreateChannel/CreateChannel'));
const MyChannelPage = lazy(() => import('./components/Pages/My Channel/MyChannelPage'));
const VideoUpload = lazy(() => import('./components/Pages/UploadVideoPage/VideoUpload'));
const EditVideo = lazy(() => import('./components/Pages/Edit Video/EditVideo'));

function App() {
  // State to control sidebar visibility
  const [showSideBar, setShowSideBar] = useState(false);

  // State for search query entered in NavBar
  const [searchQuery, setSeachQuery] = useState('');

  // Toggle sidebar visibility
  function toggleSideBar() {
    setShowSideBar(!showSideBar);
  }

  return (
    <div className="app">
      {/* Top navigation bar with search and toggle sidebar props */}
      <NavBar toggleSideBar={toggleSideBar} onSearch={setSeachQuery} />

      {/* Suspense fallback for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Video viewing page */}
          <Route path="/video/:id" element={<VideoPage showSideBar={showSideBar} />} />

          {/* Home page, includes search query */}
          <Route path="/" element={<Home showSideBar={showSideBar} searchQuery={searchQuery} />} />

          {/* User profile page */}
          <Route path="/profile/:id" element={<ProfilePage showSideBar={showSideBar} />} />

          {/* Signup page */}
          <Route path="/signup" element={<SignUp />} />

          {/* Channel creation page */}
          <Route path="/create-channel" element={<CreateChannel />} />

          {/* My channel page */}
          <Route path="/mychannel/:id" element={<MyChannelPage />} />

          {/* Upload video page */}
          <Route path="/upload-video" element={<VideoUpload />} />

          {/* Edit video page */}
          <Route path="/edit-video/:id" element={<EditVideo />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
