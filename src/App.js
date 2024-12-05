import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ExpandedView from "./components/ExpandedView";
import IntroScreen from "./components/IntroScreen";
import SearchBar from "./components/SearchBar";
import Resume from "./components/Resume";
import { projects } from "./data";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("web");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const [activeTags, setActiveTags] = useState([]);

  const closeIntro = () => {
    setShowIntro(false);
  };

  // Filter projects based on active tags
  const filteredProjects = projects
    .filter((project) => activeTags.some((tag) => project.tags.includes(tag)))
    .sort((a, b) => {
      const aMatches = a.tags.filter((tag) => activeTags.includes(tag)).length;
      const bMatches = b.tags.filter((tag) => activeTags.includes(tag)).length;
      return bMatches - aMatches;
    });

  return (
    <div className="App">
      {showIntro ? (
        <IntroScreen onClose={closeIntro} />
      ) : (
        <>
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Render SearchBar only for tabs other than "resume" */}
          {activeTab !== "resume" && (
            <SearchBar
              activeTags={activeTags}
              setActiveTags={setActiveTags}
              activeTab={activeTab}
            />
          )}

          {/* Resume Tab */}
          {activeTab === "resume" ? (
            <div className="project-grid">
              <Resume />
            </div>
          ) : (
            // Other Tabs (Render Projects)
            <div className="project-grid">
              {(activeTags.length > 0 ? filteredProjects : projects)
                .filter((project) => project.category === activeTab)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    searchTags={activeTags}
                    setSelectedProject={setSelectedProject} // Set the selected project here
                  />
                ))}
            </div>
          )}

          {/* Expanded View */}
          {selectedProject && (
            <ExpandedView
              project={selectedProject} // Pass the selected project to ExpandedView
              closeView={() => setSelectedProject(null)} // Clear selected project on close
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
