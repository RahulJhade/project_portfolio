#!/bin/bash

echo "🚀 Setting up MERN Project Portfolio..."
echo ""

# Backend setup
echo "📦 Setting up Backend..."
cd backend
npm install
echo "✅ Backend dependencies installed"
echo ""

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    cp .env.example .env
    echo "📝 Created .env file - Please update with your MongoDB URI"
fi

# Frontend setup
echo "📦 Setting up Frontend..."
cd ../frontend
npm install
echo "✅ Frontend dependencies installed"
echo ""

cd ..

echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update backend/.env with your MongoDB connection string"
echo "2. Start the backend: cd backend && npm start"
echo "3. In a new terminal, start the frontend: cd frontend && npm start"
echo ""
echo "Optional: Seed the database with initial projects:"
echo "  cd backend && node seed.js"
