import React from 'react';

const ProjectCard = ({ project, onEdit, onDelete }) => {
  const handleGithubClick = (e) => {
    e.stopPropagation();
    if (project.githubLink) {
      window.open(project.githubLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="project-card" onClick={() => onEdit(project)}>
      <h3>{project.title}</h3>
      <p>{project.description || 'No description provided'}</p>
      
      {project.techStack && project.techStack.length > 0 && (
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="card-actions">
        {project.githubLink && (
          <button 
            className="btn btn-github" 
            onClick={handleGithubClick}
            title="View on GitHub"
          >
            GitHub →
          </button>
        )}
        <button 
          className="btn btn-edit" 
          onClick={(e) => {
            e.stopPropagation();
            onEdit(project);
          }}
        >
          Edit
        </button>
        <button 
          className="btn btn-delete" 
          onClick={(e) => {
            e.stopPropagation();
            onDelete(project._id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
