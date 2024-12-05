import React, { useState } from "react";
import "./../App.css";

function SearchBar({ activeTags, setActiveTags, activeTab }) {
  const [inputValue, setInputValue] = useState("");

  // Define popular tags for each tab
  const popularTagsByTab = {
    web: ["React.js", "JavaScript", "CSS", "HTML", "Frontend"],
    software: ["Python", "C++", "Java", "Algorithms", "Backend"],
    networking: ["Security", "Firewalls", "Networking", "Linux", "Protocols"],
    graphic: ["Photoshop", "Illustrator", "UI/UX", "Branding", "Typography"],
    modeling: ["Low-Poly", "High-Poly", "Rigged", "Environement", "Character"],
    resume: ["Leadership", "Teamwork", "Problem-Solving", "Certifications", "Education"],
  };

  // Fallback to empty array if no tags are defined for the active tab
  const popularTags = popularTagsByTab[activeTab] || [];

  const addTag = (tag) => {
    if (activeTags.length < 10 && !activeTags.includes(tag)) {
      setActiveTags([...activeTags, tag]);
    }
  };

  const removeTag = (tag) => {
    setActiveTags(activeTags.filter((t) => t !== tag));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() && !activeTags.includes(inputValue)) {
      addTag(inputValue.trim());
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
          <button key={tag} onClick={() => addTag(tag)}>
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

export default SearchBar;
