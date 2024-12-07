import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project , activeTags}) {
  function selectTag(tag) {
    return activeTags.some((activeTag) => 
      tag.toLowerCase().includes(activeTag.toLowerCase())
    );
  }

  return (
    <Link to={`/project/${project.id}`} className="project-card">
      <img src={project.images[0]} alt={project.title} className="project-image" />
      <h3 className="project-title title-font">{project.title}</h3>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <button className={selectTag(tag) ? "popular-tag-active" : null} key={tag}>{tag}</button>
        ))}
      </div>
      <p className="project-description body-font">{project.description}</p>
    </Link>
  );
}

export default ProjectCard;
