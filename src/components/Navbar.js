import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ activeTab, setActiveTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: "web", label: "Web Development", path: "/portfolio/webdev" },
    { id: "software", label: "Software Development", path: "/portfolio/software" },
    { id: "security", label: "Networking/Security", path: "/portfolio/netsec" },
    { id: "graphic", label: "Graphic Design", path: "/portfolio/design" },
    { id: "modeling", label: "3D Modeling", path: "/portfolio/3d" },
    { id: "resume", label: "Resume", path: "/resume" },
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
            <Link
              to={tab.path}
              key={tab.id}
              className={`nav-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab.id);
                setIsMenuOpen(false); // Close menu when an item is selected
              }}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;