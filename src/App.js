import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ExpandedView from "./components/ExpandedView";
import IntroScreen from "./components/IntroScreen";
import SearchBar from "./components/SearchBar";
import Resume from "./components/Resume";
import { projects } from "./data";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("web"); // Track the active tab
  const [activeTags, setActiveTags] = useState([]); // Track active tags for search
  const [showIntro, setShowIntro] = useState(true); // Manage intro screen visibility

  const closeIntro = () => {
    setShowIntro(false);
  };

  return (
    <Router>
      <div className="App">
        {showIntro ? (
          <IntroScreen onClose={closeIntro} />
        ) : (
          <>
            {/* Navbar */}
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            <Routes>
              {/* Resume Tab */}
              <Route path="/resume" element={<Resume />} />

              {/* Project Grid */}
              <Route
                path="/"
                element={
                  <>
                    {/* SearchBar with activeTags and setActiveTags */}
                    <SearchBar
                      activeTags={activeTags}
                      setActiveTags={setActiveTags}
                      activeTab={activeTab}
                    />
                    <div className="project-grid">
                      {(activeTags.length > 0
                        ? projects.filter((project) =>
                            project.tags.some((tag) =>
                              activeTags.includes(tag)
                            )
                          )
                        : projects
                      )
                        .filter((project) => project.category === activeTab)
                        .map((project) => (
                          <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={`/project/${project.id}`}
                          />
                        ))}
                    </div>
                  </>
                }
              />

              {/* Expanded View */}
              <Route
                path="/project/:id"
                element={<ExpandedView projects={projects} />}
              />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
