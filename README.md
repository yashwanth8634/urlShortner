# URL Shortener

A production-ready URL shortening service built with Node.js, Express, and MongoDB. This project demonstrates real-world system design challenges including collision handling, TTL-based expiry, and fast redirects at scale.

## About

This URL shortener system showcases practical backend engineering. While the concept seems simple — convert long URLs into short codes — it reveals important edge cases that emerge at scale:

- **Collision Handling**: Every short code generation must check the database first. Skip this check, and you silently overwrite someone else's link.
- **Custom Aliases**: Users can set their own short codes for branded URLs.
- **Expiry Management**: Set TTL (time-to-live) on shortened URLs for automatic cleanup.
- **Fast Redirects**: Optimized for speed when users access shortened links.

Built as part of a hands-on exploration of system design patterns used by real services.

## Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: EJS Templates (77.5% JavaScript, 22.5% EJS)
- **Database**: MongoDB (URL storage and alias mapping)
- **Deployment**: Render

## Features

✅ **Shorten Long URLs** - Convert complex URLs into memorable short links  
✅ **Custom Aliases** - Create branded short codes  
✅ **URL Expiry** - Set TTL for automatic link expiration  
✅ **Fast Redirects** - Optimized redirect performance  
✅ **Collision Prevention** - Robust duplicate detection  
✅ **Simple Web Interface** - User-friendly URL shortening experience

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

```bash
git clone https://github.com/yashwanth8634/urlShortner.git
cd urlShortner
npm install
```

### Run

```bash
npm start
```

## Usage

1. Open the app in your browser
2. Paste a long URL into the input field
3. (Optional) Create a custom alias for a branded short link
4. Generate a short URL
5. Share or open the short link to redirect to the original URL

## Project Structure

- `src/` - application source code
- `public/` - static assets
- `package.json` - project dependencies and scripts

## Live Demo

Visit the application: [https://urlshortner-51pm.onrender.com/](https://urlshortner-51pm.onrender.com/)

## Key System Design Lessons

This project demonstrates that **simple ideas have real edge cases once you scale**:

- How to handle collisions in distributed systems
- Why database checks are critical before writes
- TTL-based expiry patterns
- Redirect optimization for high-traffic scenarios

**Building > Reading about building** — This project is a practical exploration of system design patterns used in production services.

---

*Built by [@yashwanth8634](https://github.com/yashwanth8634)*
