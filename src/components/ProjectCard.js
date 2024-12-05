import React from "react";
import "./../App.css";

function ProjectCard({ project, searchTags, onClick }) {
  const highlightedTags = project.tags.map((tag) =>
    searchTags.includes(tag)
      ? <span key={tag} className="highlight">{tag}</span> /* Need a key when doing a map in React */
      : <span key={tag}>{tag}</span>
  );

  return (
    <div className="project-card" onClick={onClick}>
      <img src={project.images[0]} alt={project.title} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <div className="project-tags">{highlightedTags}</div>
      <p className="project-description">{project.description}</p>
    </div>
  );
}

export default ProjectCard;
