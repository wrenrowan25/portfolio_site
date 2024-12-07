import React from "react";
import profilePicture from "../images/pfp.jpg";
import SUNYlogo from "../images/SUNYlogo.png";

// Helper function to calculate months between two dates
const calculateDuration = (startDate) => {
  const start = new Date(startDate); // Start date (e.g., "2024-05-01")
  const now = new Date(); // Current date
  const yearsDiff = now.getFullYear() - start.getFullYear();
  const monthsDiff = now.getMonth() - start.getMonth();

  const totalMonths = yearsDiff * 12 + monthsDiff;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  // Return formatted string based on total months
  if (years >= 1) {
    return `${years} year${years > 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
  } else {
    return `${months} month${months !== 1 ? "s" : ""}`;
  }
};

const ProfessionalExperience = (startDate) => {
  const duration = calculateDuration(startDate);
  return duration;
};

{ProfessionalExperience("2024-05-01")}

function Resume() {
  return (
    <>
      <div className="profile-card">
        <div className="profile-banner">
          <img className="banner-image" src="https://via.placeholder.com/800x200" alt="Banner"/>
        </div>
        <img className="profile-picture" src={profilePicture} alt="Wren Rowan"/>
        <div className="profile-details">
          <div>
            <h3>Wren Rowan</h3>
            <div className="popular-tags">
              <button><a href="https://www.linkedin.com/in/wren-rowan/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"/></a></button>
              <button><a href="https://github.com/wrenrowan25" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"/></a></button>
              <button><a href="mailto:wrenrowan@example.com"><i className="fas fa-envelope"/></a></button>
            </div>
          </div>
          <h4>Student IT Service Desk Manager at SUNY Cobleskill - College of Agriculture and Technology</h4>
          <p>Cobleskill, New York, United States</p>
        </div>
      </div>
      <div className="resume-card">
        <h3>Professional Experience</h3>
        <div className="job-entry">
          <img className="organization-image" src={SUNYlogo} alt="SUNY Cobleskill Logo"/>
          <div className="job-details">
            <h4>Student IT Service Desk Manager</h4>
            <p>
              <strong>Organization:</strong> SUNY Cobleskill - College of
              Agriculture and Technology, Cobleskill, NY
            </p>
            <p>
              <strong>Dates:</strong> May 2024 - Present ({calculateDuration("2024-05-01")})
            </p>
            <ul>
              <li>Provided front-line technical support to students and faculty, troubleshooting hardware and software issues and resolving network connectivity problems. </li>
              <li>Assisted with campus-wide upgrades, including disassembling and installing new desktops with Windows 11, wire management, and labeling systems for inventory. Also contributed to the decommissioning of outdated equipment.</li>
              <li>Developed and maintained documentation for the campus Knowledge Base, creating troubleshooting guides for common and complex technical issues to assist faculty, students, and future technicians.</li>
              <li>Collaborated with full-time staff to oversee service desk operations, implement process improvements, and assist in interviewing and hiring new student employees. Helped communicate between full-time staff and students regarding process documentation and training initiatives.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resume-card">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          <div>
            <i className="fas fa-code"></i>
            <h4>Programming Languages</h4>
            <p>HTML, CSS, JavaScript, C++, Python, SQL</p>
          </div>
          <div>
            <i className="fas fa-paint-brush"></i>
            <h4>Frontend Development</h4>
            <p>HTML, CSS, JavaScript</p>
          </div>
          <div>
            <i className="fas fa-database"></i>
            <h4>Backend Development</h4>
            <p>SQL (Database Management), Python</p>
          </div>
          <div>
            <i className="fas fa-mobile-alt"></i>
            <h4>Mobile App Development</h4>
            <p>Flutter, Android Studio</p>
          </div>
          <div>
            <i className="fas fa-laptop-code"></i>
            <h4>Software Development</h4>
            <p>C++, Python</p>
          </div>
          <div>
            <i className="fas fa-code-branch"></i>
            <h4>Version Control</h4>
            <p>Git</p>
          </div>
          <div>
            <i className="fas fa-tools"></i>
            <h4>IT Service Management</h4>
            <p>TeamDynamix ticketing system</p>
          </div>
        </div>
      </div>
      <div className="resume-card">
        <h3>Education</h3>
        <div className="job-entry">
          <img className="organization-image" src={SUNYlogo} alt="SUNY Cobleskill Logo"/>
          <div className="job-details">
            <h4>State University of New York College of Agriculture and Technology at Cobleskill</h4>
            <p><strong>Degree:</strong> Bachelor of Technology in Cybersecurity</p>
            <p><strong>Dates:</strong> Sep 2023 - May 2027</p>
            <p><strong>GPA:</strong> 3.97</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
