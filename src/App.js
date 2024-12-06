import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExpandedView from "./pages/ExpandedView";
import IntroScreen from "./pages/IntroScreen";
import Resume from "./pages/Resume";
import { projects } from "./data";
import Portfolio from "./pages/Portfolio";
import lightbulbdark from "./images/lightbulbdark.png";
import lightbulblight from "./images/lightbulblight.png";

function App() {
  const [activeTab, setActiveTab] = useState("web");
  const [showIntro, setShowIntro] = useState(true);
  const [activeTags, setActiveTags] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const closeIntro = () => {
    setShowIntro(false);
  };

  /*DarkMode Toggle Button Functionality*/
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  return (
    <Router>
      <div className="App">
        {showIntro ? (
          <IntroScreen onClose={closeIntro} />
        ) : (
          <>
            {/* Navbar */}
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Dark Mode Toggle */}
            <button
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              style={{
                position: "fixed",
                top: "8px",
                right: "20px",
                background: "var(--button-bg)",
                color: "var(--text-color)",
                border: "none",
                borderRadius: "5px",
                padding: "7px 9px 4px 9px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              <img src={isDarkMode ? lightbulbdark : lightbulblight} />
            </button>

            {/* Routes */}
            <Routes>
              {/* Resume Page */}
              <Route path="/resume" element={<Resume />} />

              {/* Portfolio Pages */}
              <Route
                path="/portfolio/*"
                element={
                  <Portfolio
                    projects={projects}
                    activeTab={activeTab}
                    activeTags={activeTags}
                    setActiveTags={setActiveTags}
                  />
                }
              />

              {/* Expanded Project Page */}
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
