import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ExpandedView({ projects }) {
  const { id } = useParams(); // Get the project ID from the URL
  const navigate = useNavigate(); // For navigation
  const project = projects.find(
    (proj) => proj.id === parseInt(id, 10)
  ); // Find the project by ID

  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Handlers for cycling through carousel images
  const handleNextImage = () => {
    setCurrentImage((prev) =>
      prev + 1 > project.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImage((prev) =>
      prev - 1 < 0 ? project.images.length - 1 : prev - 1
    );
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

        {/* Image Carousel with Overlay Text */}
        <div className="image-carousel-container">
          <button
            onClick={handlePreviousImage}
            className="carousel-nav-button"
          >
            {"<"}
          </button>
          <div className="carousel-image-wrapper" style={{ position: "relative" }}>
            <img
              src={project.images[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className="carousel-image"
            />
            {project.imageDescriptions &&
              project.imageDescriptions[currentImage] && (
                <div className="carousel-overlay">
                  {project.imageDescriptions[currentImage]}
                </div>
              )}
          </div>
          <button onClick={handleNextImage} className="carousel-nav-button">
            {">"}
          </button>
        </div>

        {/* Project Information Sections */}
        <div className="project-info">

          {project.devicesUsed && project.devicesUsed.length > 0 && (
            <div className="project-info-section">
              <h3>Devices Used:</h3>
              <ul>
                {project.devicesUsed.map((device, index) => (
                  <li key={index}>{device}</li>
                ))}
              </ul>
            </div>
          )}

          <hr />

          {project.overview && (
            <div className="project-info-section">
              <h3>Overview</h3>
              <p>{project.overview}</p>
            </div>
          )}

          <hr />

          {project.keyLearningOutcomes && (
            <div className="project-info-section">
              <h3>Key Learning Outcomes</h3>
              {Array.isArray(project.keyLearningOutcomes) ? (
                <ul>
                  {project.keyLearningOutcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              ) : (
                <p>{project.keyLearningOutcomes}</p>
              )}
            </div>
          )}

          <hr />

          {project.exercises && (
            <div className="project-info-section">
              <h3>Exercises and Demonstrated Skills</h3>
              {Array.isArray(project.exercises) ? (
                <ol>
                  {project.exercises.map((exercise, index) => (
                    <li key={index}>{exercise}</li>
                  ))}
                </ol>
              ) : (
                <p>{project.exercises}</p>
              )}
            </div>
          )}

          <hr />

          {project.impact && (
            <div className="project-info-section">
              <h3>Impact and Relevance</h3>
              <p>{project.impact}</p>
            </div>
          )}

          <hr />

          {project.conclusion && (
            <div className="project-info-section">
              <h3>Conclusion</h3>
              <p>{project.conclusion}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExpandedView;
