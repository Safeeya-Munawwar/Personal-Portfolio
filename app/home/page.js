import React from "react";
import { 
  FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt, FaSearch, FaDownload 
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header>
        <div>
          
        </div>    
      </header>

      {/* Main Content */}
      <div className="main-content">
        <div className="profile-container">
          {/* Profile Image */}
          <img src="/profile.jpg" alt="Profile" />

          {/* Profile Content */}
          <div className="profile-content">
          <h1>Safeeya Munawwar</h1>
          
          <div className="skills-container">
  <div className="skills-wrapper">
    <h2 className="skills-text">
      Full-Stack Developer | Front-End Developer | Back-End Developer | App Developer | Web Developer | UI Designer | ICT Tutor | Content Creator |
    </h2>
    <h2 className="skills-text">
    Full-Stack Developer | Front-End Developer | Back-End Developer | App Developer | Web Developer | UI Designer | ICT Tutor | Content Creator |
    </h2>
  </div>
</div>

<h3> 
I am passionate about developing seamless and interactive user experiences. Currently pursuing my Higher National Diploma in Information Technology (HNDIT) at ATI-Kandy, I am dedicated to exploring emerging technologies and building innovative projects to enhance my skills. My goal is to create impactful digital solutions that blend functionality with user-centric design.</h3>



            {/* Download CV */}
            <a 
              href="/Safeeya_Munawwar_CV.pdf" 
              download 
              className="cv-button"
            >
              <FaDownload /> Download My CV
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <h3>&copy; Safeeya Munawwar</h3>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/safeeya-munawwar" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Safeeya-Munawwar" title="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:shafiyasha0036@gmail.com" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://safeeya-munawwar-personal-portfolio.vercel.app/" title="Portfolio">
            <FaExternalLinkAlt />
          </a>
        </div>
      </footer>
    </div>
  );
}
