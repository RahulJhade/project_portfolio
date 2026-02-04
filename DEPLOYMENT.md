# Deployment Guide

This guide will help you deploy your MERN Project Portfolio application to production.

## Prerequisites

- MongoDB Atlas account (free tier available)
- Vercel account (for frontend)
- Render/Railway account (for backend)
- Git repository

---

## Part 1: Database Setup (MongoDB Atlas)

### Step 1: Create MongoDB Atlas Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster (free tier M0)
4. Wait for the cluster to be created (2-3 minutes)

### Step 2: Configure Database Access

1. Click "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username and strong password (save these!)
5. Grant "Read and write to any database" privileges
6. Click "Add User"

### Step 3: Configure Network Access

1. Click "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### Step 4: Get Connection String

1. Click "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<dbname>` with `project-portfolio`

Example:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/project-portfolio?retryWrites=true&w=majority
```

---

## Part 2: Backend Deployment (Render)

### Step 1: Prepare Backend

1. Ensure your code is pushed to GitHub
2. Make sure `.env` is in `.gitignore`

### Step 2: Deploy to Render

1. Go to [Render](https://render.com)
2. Sign up or sign in
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Select your repository

### Step 3: Configure Web Service

**Settings:**
- **Name:** project-portfolio-backend
- **Environment:** Node
- **Build Command:** `cd backend && npm install`
- **Start Command:** `cd backend && node server.js`
- **Plan:** Free

### Step 4: Add Environment Variables

Click "Environment" tab and add:
- **Key:** `MONGODB_URI`
- **Value:** Your MongoDB Atlas connection string
- **Key:** `NODE_ENV`
- **Value:** `production`

### Step 5: Deploy

1. Click "Create Web Service"
2. Wait for deployment (5-10 minutes)
3. Copy your backend URL (e.g., `https://project-portfolio-backend.onrender.com`)

---

## Part 3: Frontend Deployment (Vercel)

### Step 1: Update Frontend Configuration

In `frontend/src/App.js`, update the API URL:

```javascript
const API_URL = process.env.REACT_APP_API_URL || 'https://your-backend-url.onrender.com/api';
```

Commit and push this change.

### Step 2: Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up or sign in with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset:** Create React App
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`

### Step 3: Add Environment Variables

In Vercel project settings:
- **Key:** `REACT_APP_API_URL`
- **Value:** `https://your-backend-url.onrender.com/api`

### Step 4: Deploy

1. Click "Deploy"
2. Wait for deployment (2-3 minutes)
3. Your app will be live at `https://your-project.vercel.app`

---

## Part 4: Seed Production Database

### Option 1: Using MongoDB Compass

1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect using your Atlas connection string
3. Create database `project-portfolio`
4. Create collection `projects`
5. Insert your seed data manually

### Option 2: Using Backend Seed Script

1. Update `backend/.env` with production MongoDB URI
2. Run: `node seed.js`
3. Revert `.env` back to development settings

---

## Alternative Deployment Options

### Backend Alternatives
- **Railway:** Similar to Render, easy deployment
- **Heroku:** Popular but no longer free tier
- **AWS EC2:** More control, requires more setup

### Frontend Alternatives
- **Netlify:** Similar to Vercel
- **GitHub Pages:** Free but limited features
- **AWS S3 + CloudFront:** Enterprise solution

---

## Post-Deployment Checklist

✅ Backend is running and responding to API calls  
✅ Frontend can connect to backend  
✅ Database is populated with seed data  
✅ All CRUD operations work  
✅ Search functionality works  
✅ Form validation works  
✅ GitHub links open correctly  
✅ Responsive design works on mobile  

---

## Troubleshooting

### Backend Issues

**Problem:** "Application failed to respond"
- Check Render logs for errors
- Verify MongoDB connection string
- Ensure all environment variables are set

**Problem:** "Cannot connect to database"
- Verify MongoDB Atlas IP whitelist includes 0.0.0.0/0
- Check database user credentials
- Test connection string format

### Frontend Issues

**Problem:** "Failed to fetch projects"
- Verify backend URL in environment variables
- Check browser console for CORS errors
- Ensure backend is deployed and running

**Problem:** "404 Not Found"
- Check build settings in Vercel
- Verify root directory is set to `frontend`
- Clear cache and redeploy

---

## Monitoring and Maintenance

### Monitor Backend
- Check Render logs regularly
- Set up uptime monitoring (UptimeRobot, etc.)
- Monitor MongoDB Atlas metrics

### Update Application
1. Make changes to your code
2. Push to GitHub
3. Vercel and Render auto-deploy from main branch

### Backup Database
- MongoDB Atlas provides automatic backups
- Download backups periodically for safety

---

## Cost Considerations

### Free Tier Limits

**MongoDB Atlas (M0):**
- 512 MB storage
- Shared CPU
- Good for development/small projects

**Render:**
- Apps spin down after 15 min of inactivity
- 750 hours/month free
- Slower cold starts

**Vercel:**
- Unlimited deployments
- 100 GB bandwidth/month
- Serverless functions

### Upgrade When Needed
- More storage needed → MongoDB Atlas M2/M5
- Need always-on backend → Render paid plan
- High traffic → Vercel Pro

---

## Security Best Practices

1. **Never commit secrets to Git**
   - Use `.gitignore` for `.env`
   - Use platform environment variables

2. **Use HTTPS only**
   - Render and Vercel provide SSL automatically

3. **Implement rate limiting**
   - Add express-rate-limit in production

4. **Enable CORS properly**
   - Restrict to your frontend domain only

5. **Regular updates**
   - Keep dependencies updated
   - Monitor security advisories

---

## Support Resources

- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [MERN Stack Guide](https://www.mongodb.com/mern-stack)
