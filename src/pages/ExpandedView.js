import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ExpandedView({ projects }) {
  const { id } = useParams(); // Get the project ID from the URL
  const navigate = useNavigate(); // For navigation
  const project = projects.find((proj) => proj.id === parseInt(id, 10)); // Find the project by ID

  const [activeTab, setActiveTab] = useState("description");
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1 > project.images.length - 1 ? 0 : prev + 1));
  };

  const handlePreviousImage = () => {
    setCurrentImage((prev) => (prev - 1 < 0 ? project.images.length - 1 : prev - 1));
  };

  return (
<div className="expanded-view">
  <div className="expanded-view-card">
    {/* Top Bar */}
    <div className="top-bar">
      <h2>{project.title}</h2>
      <button className="close-button" onClick={() => navigate(-1)}>
        X
      </button>
    </div>

    {/* Tabs */}
    <nav className="expanded-tabs">
      <button
        onClick={() => setActiveTab("description")}
        className={activeTab === "description" ? "active" : ""}
      >
        Description
      </button>
      <button
        onClick={() => setActiveTab("mockup")}
        className={activeTab === "mockup" ? "active" : ""}
      >
        Interactive Mockup
      </button>
      <button
        onClick={() => setActiveTab("video")}
        className={activeTab === "video" ? "active" : ""}
      >
        Video Demo
      </button>
      <button>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </button>
    </nav>

    {/* Content */}
    <div className="expanded-content">
      {activeTab === "description" && (
        <>
          <div className="image-carousel">
            <button onClick={handlePreviousImage}>{"<"}</button>
            <img
              src={project.images[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className="carousel-image"
            />
            <button onClick={handleNextImage}>{">"}</button>
          </div>
          <div className="details">
            {project.details.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </>
      )}
      {activeTab === "mockup" && <div>Interactive Mockup Placeholder</div>}
      {activeTab === "video" && (
        <div>
          {project.video ? (
            <video controls width="100%">
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>No video demo available for this project.</p>
          )}
        </div>
      )}
    </div>
  </div>
</div>
  )
}

export default ExpandedView;
