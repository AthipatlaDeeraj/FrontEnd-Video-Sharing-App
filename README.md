🎥 StreamSphere – Next-Gen Video Sharing Platform

A modern full-stack video sharing platform designed for seamless content creation, real-time engagement, and a personalized user experience.

Built with React (Vite), Node.js, and MongoDB, StreamSphere goes beyond basic video sharing by introducing collaborative and AI-driven features, ensuring a truly unique experience for both creators and viewers.

🌟 Key Features
👥 Authentication & User Management

Secure Authentication with JWT (Signup/Login/Logout)

Social login using Google OAuth via Firebase

Role-based access → User, Creator, Admin

Email verification and password reset flow

Two-Factor Authentication (2FA) for extra security

📹 Video Management

Upload, edit, and delete videos with drag-and-drop uploader

Automatic video compression & thumbnail generation via FFmpeg

Privacy settings: Public, Private, or Unlisted

Batch upload support for creators

AI-powered auto-tagging & categorization of videos

💬 Community Engagement

Likes/Dislikes and threaded comments/replies

Save to Watch Later and create custom playlists

Share videos with timestamp-based deep links

Real-time notifications for likes, comments, and subscriptions

🚀 Unique Standout Features

These make StreamSphere stand apart from typical YouTube-like clones.

Watch Parties – Host live video sessions with friends, synced playback, and group chat.

Creator Collaboration Mode – Two creators can co-own a series and share revenue.

AI-Generated Highlights – Automatically generate short highlight reels from videos.

Quiz Mode for Educational Content – Embed quizzes at specific timestamps to engage learners.

Custom Monetization Models – Beyond ads, offer pay-per-view or tiered subscription plans.

Dynamic Dark/Light Mode – Automatic switching based on user preference or system settings.

Offline Video Support – Save videos in browser cache for offline playback.

📊 Analytics for Creators

Views, likes/dislikes, and watch-time stats

Revenue breakdown from subscriptions and monetization

Viewer demographics and engagement heatmaps

🛠 Tech Stack
Category	Tech Used
Frontend	React.js (Vite), TailwindCSS, Redux Toolkit
Backend	Node.js, Express.js
Database	MongoDB, Firebase (auth & notifications)
Authentication	JWT, Firebase Auth, Google OAuth
Video Processing	FFmpeg, Cloudinary
State Management	Redux Toolkit
Deployment	AWS Elastic Beanstalk, Docker
Version Control	Git & GitHub
📂 Project Structure
StreamSphere/
│
├── Client/                       # Frontend
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── img/                   # Static images & icons
│   │   ├── Pages/                 # Page-level components
│   │   ├── redux/                 # State management files
│   │   ├── utils/                 # Utility functions (axios, Firebase configs)
│   │   ├── App.jsx                # Root app file
│   │   ├── axios.js               # Axios configuration
│   │   ├── firebase.js            # Firebase integration
│   │   └── main.jsx               # React entry point
│   │
│   ├── index.html
│   └── vite.config.js
│
├── Server/                        # Backend
│   ├── controllers/               # Business logic
│   ├── models/                     # MongoDB schemas
│   ├── routes/                     # API endpoints
│   ├── verifyToken.js              # JWT middleware
│   └── index.js                    # Backend entry point
│
└── .env                            # Environment variables

🚀 Getting Started
Prerequisites

Node.js v18+

MongoDB installed or cloud instance

FFmpeg installed for video processing

Firebase project set up for auth & notifications

1. Clone the Repository
git clone https://github.com/<your-username>/stream-sphere.git
cd stream-sphere

2. Setup Backend
cd Server
npm install
npm run dev


Create a .env file inside /Server:

MONGO_URI=<your-mongo-uri>
JWT_SECRET=<your-secret>
FIREBASE_API_KEY=<your-key>
FIREBASE_AUTH_DOMAIN=<your-domain>

3. Setup Frontend
cd Client
yarn install
yarn dev

📸 Screenshots
Homepage	Video Player	Creator Dashboard

	
	
📈 Future Enhancements

AI-driven personalized recommendations based on user behavior

Multi-language subtitle generation using AI

Mobile App using React Native

NFT-based video ownership for creators

AI moderation for harmful or inappropriate content

🤝 Contributing

This is a personal project, but feature suggestions and collaboration are welcome!
Open a pull request or issue to get involved.

📜 License

This project is licensed under the MIT License – feel free to use and modify it with attribution.

💡 Why This Project?

StreamSphere is not just another video platform.
It brings together:

Community-driven features like watch parties and collabs

AI enhancements for smarter content discovery

Creator-first monetization models

A clean, modern UI that focuses on user experience
