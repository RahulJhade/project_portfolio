import React, { useState, useEffect } from 'react';

const ProjectModal = ({ project, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    githubLink: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || '',
        description: project.description || '',
        techStack: project.techStack ? project.techStack.join(', ') : '',
        githubLink: project.githubLink || ''
      });
    }
  }, [project]);

  const validateForm = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    // GitHub link validation (only if provided)
    if (formData.githubLink.trim()) {
      const urlPattern = /^https?:\/\/.+/;
      if (!urlPattern.test(formData.githubLink)) {
        newErrors.githubLink = 'Please provide a valid URL (must start with http:// or https://)';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    // Clear submit error
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      // Convert tech stack string to array
      const techStackArray = formData.techStack
        .split(',')
        .map(tech => tech.trim())
        .filter(tech => tech !== '');

      const projectData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        techStack: techStackArray,
        githubLink: formData.githubLink.trim()
      };

      await onSubmit(projectData);
    } catch (error) {
      setSubmitError(error.message || 'Failed to save project. Please try again.');
      setSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && !submitting) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <h2>{project ? 'Edit Project' : 'Add New Project'}</h2>
        
        {submitError && (
          <div className="submit-error">
            <span className="error-icon">⚠️</span>
            {submitError}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Project Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Real-Time Face Recognition System"
              disabled={submitting}
            />
            {errors.title && <div className="error-message">{errors.title}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Brief summary of your project..."
              rows="4"
              disabled={submitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="techStack">Tech Stack</label>
            <input
              type="text"
              id="techStack"
              name="techStack"
              value={formData.techStack}
              onChange={handleChange}
              placeholder="e.g., Python, TensorFlow, Keras"
              disabled={submitting}
            />
            <small>Separate multiple technologies with commas</small>
          </div>

          <div className="form-group">
            <label htmlFor="githubLink">GitHub Link</label>
            <input
              type="text"
              id="githubLink"
              name="githubLink"
              value={formData.githubLink}
              onChange={handleChange}
              placeholder="https://github.com/username/repo"
              disabled={submitting}
            />
            {errors.githubLink && <div className="error-message">{errors.githubLink}</div>}
          </div>

          <div className="modal-actions">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <span className="button-spinner"></span>
                  {project ? 'Updating...' : 'Adding...'}
                </>
              ) : (
                project ? 'Update Project' : 'Add Project'
              )}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              disabled={submitting}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
