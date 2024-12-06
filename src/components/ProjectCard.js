import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="project-card">
      <img src={project.images[0]} alt={project.title} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p className="project-description">{project.description}</p>
    </Link>
  );
}

export default ProjectCard;
