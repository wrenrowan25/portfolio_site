import React, { useState } from "react";
import "./../App.css";

function ExpandedView({ project, closeView }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="expanded-view">
      <div className="top-bar">
        <h2>{project.title}</h2>
        <button className="close-button" onClick={closeView}>
          X
        </button>
      </div>
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
        <button
          onClick={() => setActiveTab("github")}
          className={activeTab === "github" ? "active" : ""}
        >
          GitHub
        </button>
      </nav>
      <div className="expanded-content">
        {activeTab === "description" && <p>{project.details}</p>}
        {activeTab === "mockup" && <div>Interactive Mockup Placeholder</div>}
        {activeTab === "video" && <div>Video Demo Placeholder</div>}
        {activeTab === "github" && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ExpandedView;
