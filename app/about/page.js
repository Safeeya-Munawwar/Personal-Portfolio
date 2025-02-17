import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaGitAlt, FaGithub, FaFigma 
} from "react-icons/fa";
import { 
  SiBootstrap, SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiNextdotjs, 
  SiJsonwebtokens, SiSocketdotio, SiGraphql, SiNetlify, SiPostman, SiRender 
} from "react-icons/si";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { 
  FaLinkedin, FaEnvelope, FaExternalLinkAlt
} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
       <div className="about-container">
      

        <div className="about-name">
          <h1 className="text-3xl font-bold text-gray-800">Safeeya Munawwar</h1>
          
          <div className="about-wrapper">
              <h2 className="about-text">
                Full-Stack Developer | Front-End Developer | Back-End Developer | App Developer | Web Developer | UI Designer | ICT Tutor | Content Creator |
              </h2>
              <h2 className="about-text">
                Full-Stack Developer | Front-End Developer | Back-End Developer | App Developer | Web Developer | UI Designer | ICT Tutor | Content Creator |
              </h2>
            </div>
            

          {/* About Me Section */}
          <div className="about-description">
          <h3 className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
            I am from Kandy, Sri Lanka, with a strong background in software engineering. I have completed my O/L and A/L, and I'm currently studying 
            the Higher National Diploma in Information Technology (HNDIT). With a growing expertise in full-stack development, I have worked
            on various projects, including web apps and console-based applications.
            In addition to my technical skills, I am an ICT tutor, helping Grade 9, 10, and 11 students. I also enjoy learning new technologies
            and improving my skill set to stay current in the ever-evolving world of tech.
          </h3>
        </div>
        </div>
        
          
</div>
        {/* Footer */}
        <footer className="footer">
          <h3>&copy; 2025 Safeeya Munawwar</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/shafiya-munawwar" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Shafiya-Munawwar0036" title="GitHub">
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
