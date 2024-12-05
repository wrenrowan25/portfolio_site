import React, { useState } from "react";
import "./../App.css";

function Navbar({ activeTab, setActiveTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: "web", label: "Web Development" },
    { id: "software", label: "Software Development" },
    { id: "security", label: "Networking/Security" },
    { id: "graphic", label: "Graphic Design" },
    { id: "modeling", label: "3D Modeling" },
    { id: "resume", label: "Resume" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Hamburger Menu */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Desktop View: Full Nav */}
        <div className={`nav-tabs ${isMenuOpen ? "open" : ""}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab.id);
                setIsMenuOpen(false); // Close menu when an item is selected
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;