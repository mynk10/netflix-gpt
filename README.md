# 🍿 NetflixGPT

**NetflixGPT** is a powerful and immersive movie discovery platform built using modern web technologies and AI-inspired UX. It combines the slick UI/UX of Netflix with the intelligent movie recommendation concept of GPT-style interaction. This full-stack application allows users to authenticate, browse trending content, view trailers, and get AI-powered movie suggestions, all from one seamless interface.

Built using **React**, **Tailwind CSS**, **Firebase**, and the **TMDB API**, this project is a great example of combining clean frontend design, real-time authentication, API integration, and Redux state management.

---

## 🚀 Features

### 🔐 Authentication

* Login / Sign-up functionality using Firebase Auth
* Form validation using `useRef`
* Conditional navigation (redirect to `/browse` on login)
* Session management with `onAuthStateChanged`

### 🎬 Movie Discovery

* Browse trending and currently playing movies
* Embedded trailers autoplay in the background
* Movie lists categorized into genres (multiple sections)
* TMDB API integration for real-time data

### 🔎 NetflixGPT (Search)

* Smart search bar
* Instant movie suggestions
* Clean and accessible UI for exploring results

---

## 🧱 Project Structure

### 🧩 Setup & Configuration

* Create React App (`CRA`)
* Tailwind CSS setup with custom configuration
* Firebase project initialization and config
* TMDB API registration and token management

### ⚙️ Core Implementation Steps

* App routing with React Router
* Header component with conditional rendering
* Login and Signup forms with validation
* Firebase Auth integration for user creation & login
* Redux store with `userSlice` and `movieSlice`
* Custom hooks for fetching now-playing movies
* Fetch and display trailers using YouTube Embed
* Responsive layout using Tailwind CSS

---

## 🗂️ Component Planning

### 📁 `Header`

* Logo
* Navigation (conditional on auth)
* Logout button

### 📁 `Login` / `Signup`

* Shared form layout
* Input validation
* Firebase logic for user creation/login

### 📁 `Browse`

* Main Container

  * Movie trailer as background
  * Title and short description
* Secondary Container

  * Movie suggestion lists based on TMDB categories

### 📁 `NetflixGPT`

* Search input bar
* Auto-suggest movie titles as user types

---

## 🔧 Technical Highlights

* Used `useRef` for cleaner form management
* Firebase Auth callbacks with unsubscription on cleanup
* Centralized constants for static values (API endpoints, keys, etc.)
* Redux Toolkit slices for user and movies
* YouTube trailers embedded with autoplay & mute
* Custom Tailwind CSS utilities to match Netflix UI

---

## 📦 Tech Stack

* React (CRA)
* Tailwind CSS
* Firebase (Authentication)
* TMDB API
* Redux Toolkit
* YouTube IFrame Player API

---

## 📤 Deployment

* Built for production using optimized React build
* Deployed using Firebase Hosting / Vercel / Netlify

---

## ✅ To Do / Improvements

* Add AI-powered GPT suggestions with OpenAI API
* Add user profile preferences and saved lists
* Implement search history and filters
* Enhance accessibility and dark mode support

---

Happy streaming with **NetflixGPT**! 🍿
