import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExpandedView from "./pages/ExpandedView";
import IntroScreen from "./pages/IntroScreen";
import Resume from "./pages/Resume";
import { projects } from "./data";
import Portfolio from "./pages/Portfolio";

function App() {
  const [activeTab, setActiveTab] = useState("web");
  const [showIntro, setShowIntro] = useState(true);
  const [activeTags, setActiveTags] = useState([]);

  const closeIntro = () => {
    setShowIntro(false);
  };
  console.log(activeTab)
  return (
    <Router>
      <div className="App">
        {showIntro ? (
          <IntroScreen onClose={closeIntro} />
        ) : (
          <>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            <Routes>
              {/* Resume Page */}
              <Route path="/resume" element={<Resume />} />

              {/* Portfolio Pages */}
              <Route
                path="/portfolio/*"
                element={<Portfolio projects={projects} activeTab={activeTab} activeTags={activeTags} setActiveTags={setActiveTags} />}
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
