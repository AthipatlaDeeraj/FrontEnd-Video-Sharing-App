# 🎥 StreamSphere — Next-Gen Video Sharing Platform

A modern **full-stack video sharing app** with secure auth, subscriptions, comments, likes/dislikes, playlists, watch history, **dark/light theme**, and a **clean, responsive UI**. Built on **React (Vite) + Node.js/Express + MongoDB**, with optional **Firebase (OAuth/notifications)** and **FFmpeg/Cloudinary** for media.

> **Not a YouTube clone** — StreamSphere adds **Watch Parties, Creator Collabs, AI Highlights, Quiz Mode**, and flexible monetization.

---

## 📚 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [API Overview](#-api-overview)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Features

### 🔐 Authentication & Users
- JWT **Signup/Login/Logout**, refresh tokens
- **Google OAuth** (Firebase)
- **Role-based access**: `user`, `creator`, `admin`
- Email verify + **forgot/reset password**
- Optional **2FA** (TOTP)

### 🎬 Video & Media
- Drag-and-drop **upload**, edit, delete
- **FFmpeg** compression + **thumbnail** generation
- Privacy: **Public / Unlisted / Private**
- **HLS streaming** (adaptive) ready
- **Auto-tagging** & categories (AI optional)
- Batch uploads

### 💬 Social & Engagement
- **Likes / Dislikes**
- **Threaded comments & replies** (markdown)
- **Playlists** + **Watch Later**
- **Share with timestamp** links
- **Watch history** & resume playback
- Real-time **notifications** (likes, comments, subs)

### 💸 Monetization & Subscriptions
- Follow/Subscribe creators
- **Tiered memberships** (supporter, pro, premium)
- **Pay-per-view** options
- Basic revenue dashboard for creators

### 🌓 UI/UX
- **TailwindCSS** responsive layout
- **Dark/Light** theme (system + user preference)
- Keyboard shortcuts, accessible player, captions
- Fast search & filter: duration, category, popularity, recency

### 🚀 Unique Differentiators (beyond YouTube)
- **Watch Parties**: synced playback with room chat
- **Creator Collabs**: co-owned series + revenue split
- **AI Highlights**: auto-generated key moments/timestamps
- **Quiz Mode**: time-stamped questions for edu videos
- **Offline Mode**: cache videos for offline viewing
- **Focus Mode**: distraction-free player + notes

### 📈 Creator & Admin
- Creator analytics: views, retention, engagement, revenue
- Admin: user moderation, content review, policy flags
- Platform health metrics & reports

---

## 🧰 Tech Stack

| Layer            | Tools |
|------------------|------|
| Frontend         | **React (Vite)**, **Redux Toolkit**, **TailwindCSS** |
| Backend          | **Node.js**, **Express** |
| Database         | **MongoDB** (+ **Mongoose**) |
| Auth             | **JWT**, **Firebase Auth** (Google OAuth) |
| Media            | **FFmpeg**, **Cloudinary** (or S3) |
| Realtime         | Socket.io (watch parties/notifications) |
| Caching/Queues   | Redis (optional) |
| DevOps           | Docker, AWS (EB) / Render / Railway |

---
***PROJECT STRUCTURE***
<img width="229" height="812" alt="image" src="https://github.com/user-attachments/assets/e2cfb105-35e1-438f-8506-526485f42081" />

<img width="705" height="682" alt="image" src="https://github.com/user-attachments/assets/1cc9910c-c372-438f-8d21-e9bbee716d9b" />



---

## 🚀 Getting Started

### Prerequisites
- Node.js **18+**
- MongoDB (local or Atlas)
- FFmpeg installed (for thumbnails/transcoding)
- Cloudinary (or S3) account for media storage
- Firebase project (for Google OAuth & notifications)

### 1) Clone
```bash
git clone https://github.com/<your-username>/streamsphere.git
cd streamsphere


🤝 Contributing

Personal project, but PRs and feature requests are welcome:

Fork the repo

Create a feature branch

Open a PR with clear description & screenshots

## 🗂 Project Structure

