import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';

const API_URL = process.env.REACT_APP_API_URL || 'https://project-portfolio-ko1p.onrender.com/';

function App() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [toast, setToast] = useState(null);

  // Fetch all projects
  useEffect(() => {
    fetchProjects();
  }, []);

  // Filter projects when search term changes
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.techStack.some(tech =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [searchTerm, projects]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/projects`);
      setProjects(response.data.data || []);
      setFilteredProjects(response.data.data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      showToast('Failed to fetch projects. Please check if the backend server is running.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  const handleAddProject = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/projects/${id}`);
      setProjects(projects.filter(p => p._id !== id));
      showToast('Project deleted successfully!', 'success');
    } catch (error) {
      console.error('Error deleting project:', error);
      showToast('Failed to delete project. Please try again.', 'error');
    }
  };

  const handleSubmitProject = async (projectData) => {
    try {
      if (editingProject) {
        // Update existing project
        const response = await axios.put(
          `${API_URL}/projects/${editingProject._id}`,
          projectData
        );
        setProjects(projects.map(p =>
          p._id === editingProject._id ? response.data.data : p
        ));
        showToast('Project updated successfully!', 'success');
      } else {
        // Create new project
        const response = await axios.post(`${API_URL}/projects`, projectData);
        setProjects([response.data.data, ...projects]);
        showToast('Project added successfully!', 'success');
      }
      setIsModalOpen(false);
      setEditingProject(null);
    } catch (error) {
      console.error('Error saving project:', error);
      throw new Error(error.response?.data?.message || 'Failed to save project');
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Project Portfolio</h1>
        <p>Showcasing innovative technical projects and solutions</p>
      </header>

      <div className="controls">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search by technology (e.g., Python, React)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="add-button" onClick={handleAddProject}>
          + Add New Project
        </button>
      </div>

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading projects...</p>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">
            {searchTerm ? '🔍' : '📁'}
          </div>
          <h3>{searchTerm ? 'No projects found' : 'No projects yet'}</h3>
          <p>
            {searchTerm
              ? `No projects match "${searchTerm}". Try a different search term.`
              : 'Start building your portfolio by adding your first project!'}
          </p>
          {!searchTerm && (
            <button className="btn btn-primary" onClick={handleAddProject}>
              Add Your First Project
            </button>
          )}
        </div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project._id}
              project={project}
              onEdit={handleEditProject}
              onDelete={handleDeleteProject}
            />
          ))}
        </div>
      )}

      {isModalOpen && (
        <ProjectModal
          project={editingProject}
          onClose={() => {
            setIsModalOpen(false);
            setEditingProject(null);
          }}
          onSubmit={handleSubmitProject}
        />
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </div>
  );
}

export default App;
