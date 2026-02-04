# ⚡ Quick Start Guide

Get your MERN Project Portfolio running in 5 minutes!

## 🎯 What You'll Build

A full-stack portfolio application with:
- Modern, animated UI with dark theme
- Full CRUD operations (Create, Read, Update, Delete)
- Smart search by technology
- Form validation
- Responsive design

## 📋 Before You Start

Make sure you have installed:
- ✅ Node.js (v14+) - [Download](https://nodejs.org/)
- ✅ MongoDB - [Download](https://www.mongodb.com/try/download/community) OR use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free cloud database)
- ✅ Git - [Download](https://git-scm.com/)

## 🚀 Installation (3 Steps)

### Step 1: Setup Backend (2 minutes)

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env and add your MongoDB connection:
# For local MongoDB:
MONGODB_URI=mongodb://localhost:27017/project-portfolio

# OR for MongoDB Atlas (cloud):
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/project-portfolio

# Seed initial projects (Brain Tumor Detection & Face Recognition)
node seed.js

# Start backend server
npm start
```

✅ Backend running at `http://localhost:5000`

### Step 2: Setup Frontend (2 minutes)

Open a NEW terminal:

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start React app
npm start
```

✅ Frontend opens automatically at `http://localhost:3000`

### Step 3: Test It Out! (1 minute)

1. Your browser should open automatically to `http://localhost:3000`
2. You'll see 2 pre-loaded projects (from your resume!)
3. Try:
   - ✨ Searching by "Python" or "TensorFlow"
   - ➕ Adding a new project
   - ✏️ Editing a project (click on card or Edit button)
   - 🗑️ Deleting a project

## 🎨 Features Demo

### Search/Filter
Type "Python" in the search bar → See both ML projects

### Add Project
1. Click "+ Add New Project"
2. Fill in:
   - Title: "E-commerce Website"
   - Description: "Full-stack shopping platform"
   - Tech Stack: "React, Node.js, MongoDB"
   - GitHub: "https://github.com/yourusername/ecommerce"
3. Click "Add Project"

### Edit Project
- Click on any project card
- Modify details
- Click "Update Project"

### Delete Project
- Click "Delete" button
- Confirm deletion

## 🎯 Project Structure

```
project-portfolio/
│
├── backend/               # Node.js + Express + MongoDB
│   ├── models/           # Database schemas
│   ├── controllers/      # Business logic
│   ├── routes/           # API endpoints
│   └── server.js         # Main server file
│
├── frontend/             # React Application
│   └── src/
│       ├── components/   # React components
│       ├── App.js        # Main app
│       └── App.css       # Styling
│
└── Documentation files
```

## 🛠️ Troubleshooting

### "Cannot connect to MongoDB"
- **Local:** Is MongoDB running? Start it with `mongod`
- **Atlas:** Check connection string, ensure IP is whitelisted

### "Port 5000 already in use"
- Kill the process: `lsof -ti:5000 | xargs kill -9` (Mac/Linux)
- Or change PORT in backend/.env

### "Failed to fetch projects"
- Ensure backend is running (check terminal)
- Check `http://localhost:5000/api/projects` in browser

## 📚 Next Steps

1. **Customize the seed data** in `backend/seed.js` with your actual projects
2. **Modify the design** in `frontend/src/App.css` to match your style
3. **Add more features** like project categories or image uploads
4. **Deploy to production** using the DEPLOYMENT.md guide

## 🎓 Learning Points

This project demonstrates:
- ✅ RESTful API design
- ✅ React hooks (useState, useEffect)
- ✅ MongoDB CRUD operations
- ✅ Form validation
- ✅ CSS animations
- ✅ Responsive design
- ✅ Component architecture

## 📖 Additional Resources

- 📘 **README.md** - Complete documentation
- 🔌 **API_DOCUMENTATION.md** - API endpoint details
- 🚀 **DEPLOYMENT.md** - Production deployment guide

## 💡 Pro Tips

1. **Use MongoDB Compass** to visualize your database
2. **Install React DevTools** browser extension for debugging
3. **Enable auto-save** in your code editor
4. **Test API endpoints** with Postman or Thunder Client

## 🎉 You're Ready!

Start building your portfolio and showcase your amazing projects!

Questions? Check the documentation files or open an issue on GitHub.

---

**Built by:** Rahul Jhade  
**Tech Stack:** MongoDB, Express.js, React.js, Node.js  
**Assessment:** MERN Stack Internship - January 2026
