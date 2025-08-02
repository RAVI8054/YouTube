# 🎬 YouTube Clone - Backend
Backend for a YouTube-style app built with Node.js, Express, and MongoDB (MERN stack). It offers a RESTful API for authentication, channel/video management, and comments.

## Table of Contents

- Features
- Technologies Used
- Folder Structure
- API Endpoints
- Setup Instructions

## Features
-Authentication
 -Sign up / login with JWT
 -Password hashing via bcrypt
 -Protected routes for authenticated users (e.g., channel creation, video uploads).

- Channel Management:
  - Create and fetch channel details (name, description, banner, videos).
  - Associate channels with authenticated users.

-Video Management
 -Upload/update/delete video metadata
 -Cloudinary for media storage
 -Search & filter videos

-Comment System
 -Add/edit/delete comments
 -Authenticated users only

-MongoDB
 -Users, Channels, Videos, Comments collections

## 🧰 Tech Stack
-Node.js
-Express.js
-MongoDB + Mongoose
-JWT (auth)
-bcryptjs
-Cloudinary (media storage)
-Nodemon (dev server)


## Folder Structure

```bash
Fronted/
├── controllers/               # API logic
│   ├── authController.js      # Authentication endpoints (signup, login)
│   ├── channelController.js   # Channel creation and retrieval
│   ├── commentController.js   # Comment management
│   └── videoController.js     # Video management (upload, fetch, update, delete)
├── Middleware/                # Custom middleware
│   └── auth.js                # JWT authentication middleware
├── models/                    # Mongoose schemas
│   ├── Channels.Model.js      # Channel schema
│   ├── Comment.Model.js       # Comment schema
│   ├── User.Model.js          # User schema
│   ├── Video.Model.js         # Video schema
├── routes/                    # API routes
│   ├── channel.Route.js       # Channel-related routes
│   ├── comments.Route.js      # Comment-related routes
│   ├── users.Route.js         # User authentication routes
│   └── video.Route.js         # Video-related routes
├── package.json               # Dependencies and scripts
├── index.js                  # Main server entry point, Database connection
└── README.md                  # Backend documentation
```

## API Endpoints
### 🔐 Auth
 -POST /api/users/signup – Register
 -POST /api/users/login – Login
### 📺 Channels
 -POST /api/channels – Create (protected)
 -GET /api/channels/:id – Get details
### 🎥 Videos
 -GET /api/videos – List (search, filter)
 -POST /api/videos – Upload (protected)
 -PUT /api/videos/:id – Update (protected)
 -DELETE /api/videos/:id – Delete (protected)
### 💬 Comments
 -POST /api/comments – Add (protected)
 -PUT /api/comments/:id – Edit (protected)
 -DELETE /api/comments/:id – Delete (protected)
 -GET /api/comments/:videoId – List for video

⚙️ Setup & Run
-Prerequisites
 -Node.js & npm
 -MongoDB (local or Atlas)
 -Cloudinary account

### Installation Steps
## 🚀 Getting Started

### 🔽 1. Clone the Repository

```
git clone https://github.com/your-username/youtube-clone-backend.git
cd youtube-clone-
```

### 📦 2. Install Dependencies
```
npm install
```
 ### ▶️ 3. Run the Server
 ```
  npm start
  ```
  Server runs on: http://localhost:8080

