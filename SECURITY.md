# 🔒 Security Guidelines

## ⚠️ BEFORE YOU COMMIT TO GIT

### Critical Security Checklist:

✅ **Never commit these files:**
- `.env` (contains actual credentials)
- `node_modules/`
- Any file with passwords, API keys, or tokens

✅ **Always verify `.gitignore` includes:**
```
.env
.env.local
.env.development.local
.env.production.local
node_modules/
```

✅ **Check before committing:**
```bash
git status
# Make sure .env is NOT listed
```

---

## 🛡️ Environment Variables Setup

### Step 1: Create Your .env File

```bash
cd backend
cp .env.example .env
```

### Step 2: Add Your Credentials

Edit `backend/.env` with your actual MongoDB URI:

**For Local MongoDB:**
```env
MONGODB_URI=mongodb://localhost:27017/project-portfolio
```

**For MongoDB Atlas (Cloud):**
```env
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/project-portfolio?retryWrites=true&w=majority
```

### Step 3: Verify .env is Ignored

```bash
git status
# .env should NOT appear in the list
```

---

## 🚨 If You Accidentally Committed Credentials

### Immediate Actions:

1. **Remove from Git history:**
```bash
git rm --cached .env
git commit -m "Remove credentials file"
```

2. **Change all passwords immediately:**
   - MongoDB: Change database password
   - Rotate any API keys

3. **Update .gitignore:**
```bash
echo ".env" >> .gitignore
git add .gitignore
git commit -m "Add .env to gitignore"
```

---

## 📝 Sharing Your Project

### For Code Review / Submission:

**DO:**
- ✅ Include `.env.example` with placeholder values
- ✅ Document setup steps in README
- ✅ Ensure `.gitignore` is properly configured

**DON'T:**
- ❌ Share actual `.env` file
- ❌ Include real passwords in any file
- ❌ Commit `node_modules/`

### Safe Sharing Process:

```bash
# 1. Verify no secrets in code
grep -r "mongodb+srv://" --exclude-dir=node_modules --exclude=".env*"

# 2. Check .gitignore
cat .gitignore

# 3. Verify git status
git status

# 4. Safe to commit
git add .
git commit -m "Ready for review"
git push
```

---

## 🔐 Production Deployment

### Using Environment Variables:

**Render / Railway / Heroku:**
- Set environment variables in the platform dashboard
- Never hardcode credentials in code

**Vercel:**
- Add environment variables in Project Settings
- Use different values for development and production

---

## 📚 Additional Resources

- [MongoDB Security Checklist](https://docs.mongodb.com/manual/administration/security-checklist/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)

---

**Remember**: Security is not optional. Always protect your credentials!
