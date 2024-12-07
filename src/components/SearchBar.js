// Import React and the useState hook to manage component state
import React, { useState } from "react";
// Import PropTypes to validate the props passed to the component
import PropTypes from "prop-types";

// Define the SearchBar functional component and destructure its props
function SearchBar({ activeTags = [], setActiveTags, activeTab }) {
  // useState to manage the input value of the search bar
  const [inputValue, setInputValue] = useState("");
  //State for warning message
  const [warning, setWarning] = useState("");

  // Define popular tags for each tab in a mapping object
  const popularTagsByTab = {
    web: ["React.js", "JavaScript", "CSS", "HTML", "Frontend"], // Popular tags for "web" tab
    software: ["Python", "C++", "Java", "Algorithms", "Backend"], // Popular tags for "software" tab
    security: ["Firewalls", "VPN", "Pen Testing", "Protocols", "Security Tools"], // Popular tags for "security" tab
    graphic: ["Photoshop", "Illustrator", "UI/UX", "Branding", "Typography"], // Popular tags for "graphic" tab
    modeling: ["Low-Poly", "High-Poly", "Rigged", "Environment", "Character"], // Popular tags for "modeling" tab
    resume: ["Leadership", "Teamwork", "Problem-Solving", "Certifications", "Education"], // Popular tags for "resume" tab
  };

  // Get the popular tags for the current active tab or fallback to an empty array
  const popularTags = popularTagsByTab[activeTab] || [];

  // Toggle a tag in the activeTags array
  const toggleTag = (tag) => {
    if (activeTags.includes(tag)) {
      // Display a warning message if the tag is already active
      setWarning(`${tag} is already an active tag.`); // Set the warning message
      // Clear the warning after 3 seconds
      setTimeout(() => {
        setWarning("");
      }, 3000);
    } else if (activeTags.length >= 10) {
      // Display a warning message if the limit (10) is reached
      setWarning("You can only select up to 10 tags."); // Set the warning message
      // Clear the warning after 3 seconds
      setTimeout(() => {
        setWarning(""); //Remove warning message
      }, 3000);
    } else {
      // If no conditions are met, add the tag
      setActiveTags([...activeTags, tag]);
    }
  };
  // Remove a tag from the activeTags array
  const removeTag = (tag) => {
    setActiveTags(activeTags.filter((t) => t !== tag));
  };
  // Handle the "Enter" key press event in the input field
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      // Add the trimmed input value to activeTags if it's not already present
      toggleTag(inputValue.trim());
      // Clear the input field
      setInputValue("");
    }
  };

  // Render the search bar and tags UI
  return (
      <div className="search-bar">
        {/* Top section with input field and popular tags */}
        <div className="search-top">
          <div className="search-input">
            <input
              type="text" // Input field type is text
              placeholder="Search projects by technology or skill..." // Placeholder text for the input
              value={inputValue} // Controlled input value
              onChange={(e) => setInputValue(e.target.value)} // Update input value on change
              onKeyPress={handleKeyPress} // Handle "Enter" key press
            />
          </div>
          {/* Popular tags section */}
          <div className="popular-tags">
          {/*Warning messages will display in this div and appear*/}
          {warning.length > 0 ? (
            <div id="warning-message" className="warning-overlay">{warning}</div>
          ) : null}
            <p>Popular:</p> {/* Label for popular tags */}
            {popularTags.map((tag) => (
              <button
                key={tag} // Unique key for each tag
                onClick={() => toggleTag(tag)} // Toggle tag when clicked
                className={activeTags.includes(tag) ? "popular-tag-active" : ""} // Highlight active tags
              >
                {tag} {/* Display the tag name */}
              </button>
            ))}
          </div>
        </div>
        {/* Section for active tags */}
        <div className="active-tags">
          {activeTags.map((tag) => (
            <button key={tag} className="active-tag" onClick={() => removeTag(tag)}>
              {tag} <span>×</span> {/* Tag name with a close button */}
            </button>
          ))}
        </div>
      </div>
  );
}

// Validate the props passed to the SearchBar component
SearchBar.propTypes = {
  activeTags: PropTypes.array, // Ensure activeTags is an array
  setActiveTags: PropTypes.func.isRequired, // Ensure setActiveTags is a function
  activeTab: PropTypes.string.isRequired, // Ensure activeTab is a string
};

// Export the SearchBar component for use in other parts of the app
export default SearchBar;
