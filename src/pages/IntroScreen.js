import React from "react";
import { Link } from "react-router-dom";
import profilePicture from "../images/pfp.jpg"; 

function IntroScreen({ onClose }) {
  return (
    <div className="intro-screen">
      <div className="intro-container">
        <div className="intro-text">
          <h1>Adapting, Learning, and Creating in the Tech World</h1>
          <p>
            Hi, I'm Wren, a recent graduate from SUNY Cobleskill with a Bachelor's in Cybersecurity.
            I have a strong passion for trying new things and a love for creating, no matter the medium.
            I originally began my journey in art, earning a Certificate in Commercial Art from UCVTS.
            Over time, as I explored and developed new skills and hobbies, I expanded into programming
            and other tech as a way to give functionality and breathe life into my creations. Whether it's
            designing secure systems, developing helpful software, or making 3D animations, I love coming
            up with ideas and making them work!
          </p>
          <p>
            I'm always working on a project of some kind, and every step I take is made with the end goal
            in mind. My curiosity drives me to explore new ideas and tackle challenges from different angles,
            while my adaptability allows me to bring value from a diverse set of perspectives. With a wide
            range of skills and an eagerness to learn, I'm ready to contribute to meaningful projects and grow
            alongside my future team.
          </p>
          <p>
            Feel free to explore my portfolio and reach out — let’s turn our ideas into reality together!
          </p>
          <Link to="/portfolio/webdev" className="intro-button" onClick={onClose}>
            Check Out My Portfolio!
          </Link>
        </div>
        <Link to="/portfolio/webdev" className="intro-button-mobile" onClick={onClose}>
            Check Out My Portfolio!
        </Link>
        <div className="intro-image">
          <img src={profilePicture} alt="Wren Rowan" />
        </div>
      </div>
    </div>
  );
}

export default IntroScreen;