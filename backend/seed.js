const mongoose = require('mongoose');
require('dotenv').config();
const Project = require('./models/Project');

const seedProjects = [
  {
    title: 'Brain Tumor Detection',
    description: 'A machine learning application that uses deep learning to detect brain tumors from MRI scans with high accuracy. Implements CNN architecture for medical image classification.',
    techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'OpenCV'],
    githubLink: 'https://github.com/yourusername/brain-tumor-detection'
  },
  {
    title: 'Real-Time Face Recognition System',
    description: 'An advanced computer vision system that performs real-time face detection and recognition using OpenCV. Features include face tracking, recognition accuracy optimization, and live video processing.',
    techStack: ['Python', 'OpenCV', 'NumPy', 'dlib'],
    githubLink: 'https://github.com/yourusername/face-recognition-system'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://rahul100jhade_db_user:Project_Portfolio@cluster0.kgzvebt.mongodb.net/?appName=Cluster0');
    
    console.log('🔄 Clearing existing projects...');
    await Project.deleteMany({});
    
    console.log('🌱 Seeding database with projects...');
    await Project.insertMany(seedProjects);
    
    console.log('✅ Database seeded successfully!');
    console.log(`📦 Added ${seedProjects.length} projects`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
