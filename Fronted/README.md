# 🎥 YouTube Clone – Frontend
 A responsive YouTube-style frontend built with React + Vite, designed for seamless browsing, video playback, and user interactions. It provides a responsive, user-friendly interface for browsing videos, managing channels, and interacting with content, mimicking core YouTube functionalities like video playback, commenting, and filtering.

---
## 🧩 Table of Contents
- 🚀 Features
- ⚙️ Tech Stack
- 🗂️ Folder Structure
- 🧪 Setup Instructions
- 💡 Usage
- 🛠️ Performance Optimization
---

## 🚀 Features
### 🏠 Homepage UI:
- YouTube-style header with search and profile.
- Toggleable sidebar for navigation.
- Filter videos by category (e.g., Entertainment).
- Grid layout of video cards.

### 🔐 User Authentication:
- Signup/Login with JWT auth.
- Username displayed after login.

### 📺 Video Playback:
- Play videos from Cloudinary or YouTube.
- Like/dislike + comments (for logged-in users).

### 📡 Channel Page:
- Authenticated users can create channels.
- `/my-channel` to edit/delete uploads.

### 🔍 Search & Filter:
- Search by title.
- Filter using category buttons.

### 📱 Responsive Design:
- Mobile, tablet, and desktop friendly.

---

⚙️ Tech Stack
- ⚛️ React
 - 🚀 Vite
 - 🔄 React Router
 - 🎨 Material UI
 - 🔥 Axios
 - 💬 React Toastify
 - 🎯 Custom Hooks
 - 🧠 Lazy Loading + Code Splitting
 - 🖌️ CSS Modules

---
## 🗂️ Folder Structure

```bash
Fronted/
├── public/
│   ├── index.html
│   
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │      ├── NavBar.js
│   │   │      └── NavBar.css
│   │   ├── SideBar/
│   │   │      ├── Sidebar.js
│   │   │      └── Sidebar.css
│   ├── Pages/
│   │   ├── CreateChannel/
│   │   │   └── CreateChannel.js
│   │   ├── Edit Video/
│   │   │   ├── EditVideo.js
│   │   │   └── VideoUpload.css
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── HomePage.css
│   │   ├── LogIn/
│   │   │   ├── LogIn.js
│   │   │   └── LogIn.css
│   │   ├── My Channel/
│   │   │   ├── MyChannelPage.js
│   │   │   └── MyChannelPage.css
│   │   ├── Profile/
│   │   │   └── ProfilePage.js
│   │   ├── SignUp/
│   │   │   ├── SignUp.js
│   │   │   └── SingUp.css
│   │   ├── UploadVideoPage/
│   │   │   ├── VideoUpload.js
│   │   │   └── VideoUpload.css
│   │   └── VideoPlayer/
│   │       ├── VideoPage.js
│   │       └── VideoPage.css
│   ├── App.js
│   ├── app.css
│   └── index.js
├── package.json
├── vite.config.js
└── README.md
```

---

## Setup Instructions

### Prerequisites
- Node.js and npm
- Backend running at: http://localhost:8080

### Steps

## 🚀 Getting Started

### 🔽 1. Clone the Repository
```
git clone https://github.com/RAVI8054/YouTube.git
cd youtube/frontend

```
### 📦 2. Install Dependencies
```
npm install
```

 ### ▶️ 3. Run the development  Server
```
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

---
## 💡 Usage

- **Home**: Video grid + sidebar + category filters
 -Home page with video feed
- **Sign up / Log in**: `/signup` or `/login`
 -Create a new account         
- **Create Channel**: `/create-channel` 
 -Create your own channel  
- **Upload Video**: `/upload-video` 
 -Upload video to your channel
- **Watch Video**: `/video/:id`
 -Watch a specific video  
- **My Channel**: `/my-channel`
 -Manage your uploaded videos
- **Filter**: Use category buttons on home

---

