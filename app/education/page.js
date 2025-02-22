import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt, FaSearch, FaDownload, FaGraduationCap, FaSchool } from "react-icons/fa";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Skills() {
    return (
<div className="min-h-screen flex flex-col">
    <div className="education-container">
      <h1>Education</h1>

      {/* Education Section */}
      <div className="education-card">
        <FaGraduationCap className="edu-icon" />
        <div className="edu-content">
          <h2>Higher National Diploma in Information Technology (HNDIT)</h2>
          <h3>Sri Lanka Institute of Advanced Technological Education (SLIATE)</h3>
          <h3>Advanced Technological Institute - Kandy</h3>
          <p>2023 - Present</p>
          <p>GPA:</p>
          <p>   - First Year First Semester: 3.96/4.0</p>
          <p>   - First Year Second Semester: 3.93/4.0</p>
        </div>
      </div>

      <div className="education-card">
        <FaSchool className="edu-icon" />
        <div className="edu-content">
          <h2>General Certificate of Education Advanced Level</h2>
          <h3>Arts Stream</h3>
          <h3>Arafa Muslim Maha Vidyalaya - Kandy</h3>
          <p>2021</p>
          <p>Results: ABC             
          </p>
          <p>Z-Score: 1.0589</p>
        </div>
      </div>

      <div className="education-card">
        <FaSchool className="edu-icon" />
        <div className="edu-content">
          <h2>General Certificate of Education Ordinary Level</h2>
          
          <h3>Arafa Muslim Maha Vidyalaya - Kandy</h3>
          <p>2018</p>
          <p>
            Results: 2A 3B 4C
          </p>
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
