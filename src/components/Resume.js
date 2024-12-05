import React from "react";
import "./../App.css";
import profilePicture from "../images/pfp.jpg";

function Resume() {
  return (
    <>
      <div class="resume-card">
        <h3>Wren Rowan</h3>
        <div class="popular-tags">
            <button><a href="https://www.linkedin.com/in/wren-rowan/" target="_blank">LinkedIn</a></button> 
            <button><a href="https://github.com/wrenrowan25" target="_blank">Github</a></button>
        </div>
        <div>
          <p>Student IT Service Desk Manager at SUNY Cobleskill - College of Agriculture and Technology</p>
          <p>Cobleskill, New York, United States</p>
        </div>
        <img src={profilePicture} alt="Wren Rowan Profile Picture"></img>
      </div>
      <div class="resume-card">
        <h3>Professional Experience</h3>
        <h4>Student IT Service Desk Manager</h4>
        <p><strong>Organization:</strong> SUNY Cobleskill - College of Agriculture and Technology, Cobleskill, NY</p>
        <p><strong>Dates:</strong> May 2024 - Present (5 months)</p>
        <ul>
          <li>Provided front-line technical support to students and faculty, troubleshooting hardware and software issues and resolving network connectivity problems.</li>
          <li>Used a ticket triaging system to efficiently process support requests and delivered assistance via phone, email, and in-person interactions.</li>
          <li>Assisted with campus-wide upgrades, including disassembling and installing new desktops with Windows 11, wire management, and labeling systems for inventory. Also contributed to the decommissioning of outdated equipment.</li>
          <li>Developed and maintained documentation for the campus Knowledge Base, creating troubleshooting guides for common and complex technical issues to assist faculty, students, and future technicians.</li>
          <li>Collaborated with full-time staff to oversee service desk operations, implement process improvements, and assist in interviewing and hiring new student employees. Helped communicate between full-time staff and students regarding process documentation and training initiatives.</li>
        </ul>
      </div>
      <div class="resume-card">
        <h3>Technical Skills</h3>
        <ul>
          <li><strong>Programming Languages:</strong> HTML, CSS, JavaScript, C++, Python, SQL</li>
          <li><strong>Frontend Development:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Backend Development:</strong> SQL (Database Management), Python</li>
          <li><strong>Mobile App Development:</strong> Flutter, Android Studio</li>
          <li><strong>Software Development:</strong> C++, Python</li>
          <li><strong>Version Control:</strong> Git</li>
          <li><strong>IT Service Management:</strong> TeamDynamix ticketing system</li>
        </ul>
      </div>
      <div class="resume-card">
        <h3>Education</h3>
        <h4>State University of New York College of Agriculture and Technology at Cobleskill</h4>
        <p><strong>Degree:</strong> Bachelor of Technology in Cybersecurity</p>
        <p><strong>Dates:</strong> Sep 2023 - May 2027</p>
        <p><strong>GPA:</strong> 3.97</p>
    </div>
    </>
  );
}

export default Resume;
