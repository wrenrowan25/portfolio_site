import React, { useState } from "react";
import PropTypes from "prop-types";
import "./../App.css";

function SearchBar({ activeTags = [], setActiveTags, activeTab }) {
  const [inputValue, setInputValue] = useState("");

  // Define popular tags for each tab
  const popularTagsByTab = {
    web: ["React.js", "JavaScript", "CSS", "HTML", "Frontend"],
    software: ["Python", "C++", "Java", "Algorithms", "Backend"],
    networking: ["Security", "Firewalls", "Networking", "Linux", "Protocols"],
    graphic: ["Photoshop", "Illustrator", "UI/UX", "Branding", "Typography"],
    modeling: ["Low-Poly", "High-Poly", "Rigged", "Environment", "Character"],
    resume: ["Leadership", "Teamwork", "Problem-Solving", "Certifications", "Education"],
  };

  // Fallback to an empty array if no tags are defined for the active tab
  const popularTags = popularTagsByTab[activeTab] || [];

  // Toggle a tag in activeTags (add if not present, remove if present)
  const toggleTag = (tag) => {
    if (activeTags.includes(tag)) {
      // Remove the tag if it's already active
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else if (activeTags.length < 10) {
      // Add the tag if it's not already active and limit not reached
      setActiveTags([...activeTags, tag]);
    }
  };

  // Remove a tag from activeTags
  const removeTag = (tag) => {
    setActiveTags(activeTags.filter((t) => t !== tag));
  };

  // Handle pressing "Enter" in the input field
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() && !activeTags.includes(inputValue.trim())) {
      toggleTag(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search projects by technology or skill..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="popular-tags">
        {popularTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)} // Toggle tag when clicked
            className={activeTags.includes(tag) ? "active" : ""}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="active-tags">
        {activeTags.map((tag) => (
          <div key={tag} className="active-tag">
            {tag} <span onClick={() => removeTag(tag)}>×</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Add PropTypes validation
SearchBar.propTypes = {
  activeTags: PropTypes.array, // Ensure activeTags is an array
  setActiveTags: PropTypes.func.isRequired, // Ensure setActiveTags is a function
  activeTab: PropTypes.string.isRequired, // Ensure activeTab is a string
};

export default SearchBar;
