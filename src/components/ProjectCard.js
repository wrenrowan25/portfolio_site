import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project, activeTags }) {
  // If there are no tags, default to an empty array.
  const tags = project.tags || [];

  function selectTag(tag) {
    return activeTags.some((activeTag) =>
      tag.toLowerCase().includes(activeTag.toLowerCase())
    );
  }

  return (
    <Link to={`/project/${project.id}`} className="project-card">
      <img
        src={project.images[0]}
        alt={project.title}
        className="project-image"
      />
      <h3 className="project-title title-font">{project.title}</h3>
      {tags.length > 0 && (
        <div className="project-tags">
          {tags.map((tag) => (
            <button
              key={tag}
              className={selectTag(tag) ? "popular-tag-active" : ""}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
      <p className="project-description body-font">{project.description}</p>
    </Link>
  );
}

export default ProjectCard;
