# 🚀 Project Portfolio - MERN Stack Application

> A full-stack web application for managing and showcasing technical projects. Built for MERN Stack Internship Assessment.

**👨‍💻 Candidate:** Rahul Jhade  
**📅 Date:** January 30, 2026  
**🎯 Assessment:** "My Project Portfolio" Application

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)

---

## 📸 Application Screenshots

### 1. Dashboard with Projects
![Dashboard View](./screenshots/dashboard.png)
*Main dashboard showing project cards with modern dark theme and animated gradients*

### 2. Add/Edit Project Form
![Add Project Modal](./screenshots/add-modal.png)
*Modal form with validation for adding or editing projects*

### 3. Search & Filter
![Search Functionality](./screenshots/search.png)
*Live search filtering by technology stack (Python, React, etc.)*

### 4. Responsive Mobile View
![Mobile Responsive](./screenshots/mobile.png)
*Fully responsive design working on all screen sizes*

---

## ✨ Features Implemented

### Core Requirements ✅
- ✅ **Full CRUD Operations**: Create, Read, Update, Delete projects
- ✅ **MongoDB Database**: Proper schema design with validation
- ✅ **RESTful API**: Express.js backend with organized routes
- ✅ **React Frontend**: Modern UI with component architecture
- ✅ **Auto-refresh**: UI updates without page reload
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile

### Bonus Features ✅
- ✅ **Search/Filter**: Filter projects by technology stack
- ✅ **Form Validation**: URL validation and required field checks
- ✅ **Loading States**: Spinners and loading indicators
- ✅ **Empty States**: Helpful messages when no projects exist
- ✅ **Success Feedback**: Toast notifications for actions
- ✅ **Error Handling**: User-friendly error messages

---

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **React.js** - UI library
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling with animations

---

## 📦 Installation & Setup

### Prerequisites
- ✅ **Node.js** (v14+) - [Download](https://nodejs.org/)
- ✅ **MongoDB** - [Local](https://www.mongodb.com/try/download/community) OR [Atlas](https://www.mongodb.com/cloud/atlas) (Free)
- ✅ **Git** - [Download](https://git-scm.com/)

---

### 🚀 Step-by-Step Setup

#### **Step 1: Clone Repository**
```bash
git clone https://github.com/yourusername/project-portfolio.git
cd project-portfolio
```

#### **Step 2: Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
```

#### **Step 3: Configure Environment Variables**

Edit `backend/.env`:

```env
PORT=5000
NODE_ENV=development

# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/project-portfolio

# OR MongoDB Atlas (replace YOUR_USERNAME, YOUR_PASSWORD, YOUR_CLUSTER)
# MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/project-portfolio
```

**🔗 MongoDB Atlas Setup:**
1. [Create free account](https://cloud.mongodb.com)
2. Create Cluster (M0 Free)
3. Database Access → Add User
4. Network Access → Allow from Anywhere (0.0.0.0/0)
5. Connect → Get connection string
6. Paste in `.env` file

#### **Step 4: Seed Database**
```bash
node seed.js
```

Expected output:
```
✅ Database seeded successfully!
📦 Added 2 projects
```

#### **Step 5: Start Backend**
```bash
npm start
```

Expected output:
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
```

✅ **Keep this terminal running!**

#### **Step 6: Frontend Setup**

Open **NEW terminal**:

```bash
cd frontend
npm install
npm start
```

Browser opens at `http://localhost:3000`

---

## 🔌 API Endpoints

Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/projects` | Get all projects |
| GET | `/projects/:id` | Get single project |
| POST | `/projects` | Create project |
| PUT | `/projects/:id` | Update project |
| DELETE | `/projects/:id` | Delete project |

### Sample Request
```bash
# Create a project
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "E-commerce Platform",
    "description": "Full-stack shopping website",
    "techStack": ["React", "Node.js", "MongoDB"],
    "githubLink": "https://github.com/username/ecommerce"
  }'
```

### Sample Response
```json
{
  "success": true,
  "data": {
    "_id": "65abc123def456789",
    "title": "E-commerce Platform",
    "description": "Full-stack shopping website",
    "techStack": ["React", "Node.js", "MongoDB"],
    "githubLink": "https://github.com/username/ecommerce",
    "createdAt": "2026-01-30T10:00:00.000Z"
  }
}
```

---

## 📁 Project Structure

```
project-portfolio/
├── backend/
│   ├── controllers/
│   │   └── projectController.js    # CRUD logic
│   ├── models/
│   │   └── Project.js              # MongoDB schema
│   ├── routes/
│   │   └── projects.js             # API routes
│   ├── server.js                   # Express setup
│   ├── seed.js                     # Database seeding
│   └── .env.example                # Env template
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProjectCard.js      # Project card
│   │   │   ├── ProjectModal.js     # Add/Edit form
│   │   │   └── Toast.js            # Notifications
│   │   ├── App.js                  # Main app
│   │   └── App.css                 # Styles
│   └── package.json
│
├── screenshots/                     # App screenshots
├── README.md                        # This file
└── .gitignore                       # Git ignore
```

---

## 🎨 Features Demo

### 1. Add Project
- Click "+ Add New Project"
- Fill form with validation
- See success toast
- Project appears instantly

### 2. Edit Project
- Click on any project card
- Modify details
- Save changes
- UI updates immediately

### 3. Delete Project
- Click "Delete" button
- Confirm deletion
- Project removed with animation

### 4. Search Projects
- Type "Python" in search
- See filtered results
- Clear to see all

---

## 🔧 Troubleshooting

### "Cannot connect to MongoDB"
- **Local**: Start MongoDB service
- **Atlas**: Check connection string and IP whitelist

### "Port 5000 already in use"
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### "Failed to fetch projects"
- Ensure backend is running
- Test: `http://localhost:5000/api/projects`

---

## 📊 Assessment Criteria Met

| Requirement | Status | Notes |
|------------|--------|-------|
| MongoDB Schema | ✅ | With validation |
| RESTful API | ✅ | All endpoints |
| React Frontend | ✅ | Component-based |
| CRUD Operations | ✅ | Fully functional |
| Responsive Design | ✅ | Mobile-friendly |
| Search/Filter (Bonus) | ✅ | By tech stack |
| Validation (Bonus) | ✅ | URL & required fields |

---

## 🚀 Deployment

See `DEPLOYMENT.md` for production deployment guide.

Quick summary:
- **Backend**: Deploy to Render/Railway
- **Frontend**: Deploy to Vercel/Netlify
- **Database**: MongoDB Atlas (already cloud)

---

## 👨‍💻 Author

**Rahul Jhade**
- Assessment: MERN Stack Internship
- Date: January 30, 2026

---

## 📄 License

MIT License - feel free to use this project for learning!

---

**⭐ Thank you for reviewing this project!**
