import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="project-card">
      <img src={project.images[0]} alt={project.title} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <button key={tag}>{tag}</button>
        ))}
      </div>
      <p className="project-description">{project.description}</p>
    </Link>
  );
}

export default ProjectCard;
