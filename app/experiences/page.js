import React from 'react';
import { 
  FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt, FaChalkboardTeacher 
} from "react-icons/fa";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="experience-container">
        <h1>Experiences</h1>

        {/* Experiences Section */}
        <div className="experience-card">
          <FaChalkboardTeacher className="experience-icon" />
          <div className="experience-content">
            <h2>Private ICT Tutor</h2>
            <h3>Self Employed . Part-Time</h3>
            <h3>January 2025 - Present</h3>
            <h3>Kandy District, Central Province, Sri Lanka . Remote</h3>    
            <p>Conducting private ICT tutoring for Grade 9, 10, and 11 students, covering topics like programming, databases, and 
              computer applications. Helped students improve their understanding and performance in ICT exams.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <h3>&copy; Shafiya Munawwar</h3>
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
