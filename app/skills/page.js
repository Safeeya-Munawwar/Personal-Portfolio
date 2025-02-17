import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaGitAlt, FaGithub, FaFigma, FaDatabase 
} from "react-icons/fa";
import { 
  SiBootstrap, SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiNextdotjs, 
  SiJsonwebtokens, SiSocketdotio, SiGraphql, SiNetlify, SiPostman, SiRender, SiMysql 
} from "react-icons/si";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { 
  FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaSearch, FaDownload 
} from "react-icons/fa";

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col">
  <div className="skills-head">  
<h1>Skills</h1>
</div>  
<div className="skills-cont">
  
  <div className="skills-section">
    <h3>Frontend:</h3>
    <div className="skills-box">
      {/* Frontend Skills */}
      <div className="flex flex-col items-center space-y-2">
            <FaHtml5 size={40} className="text-[#e34c26]" />
            <span className="font-bold">HTML</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaCss3Alt size={40} className="text-[#264de4]" />
            <span className="font-bold">CSS</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaJsSquare size={40} className="text-[#f7df1e]" />
            <span className="font-bold">JavaScript</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaReact size={40} className="text-[#61dbfb]" />
            <span className="font-bold">React.js</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <SiTailwindcss size={40} className="text-[#38bdf8]" />
            <span className="font-bold">Tailwind CSS</span>
          </div>
    </div>
  </div>

  <div className="skills-section">
    <h3>Backend:</h3>
    <div className="skills-box">
      {/* Backend Skills */}
      <div className="flex flex-col items-center space-y-2">
          <SiBootstrap size={40} className="text-[#563d7c]" />
          <span className="font-bold">Java</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SiBootstrap size={40} className="text-[#563d7c]" />
          <span className="font-bold">PHP</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SiBootstrap size={40} className="text-[#563d7c]" />
          <span className="font-bold">C#</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SiBootstrap size={40} className="text-[#563d7c]" />
          <span className="font-bold">Python</span>
        </div>
    </div>
  </div>

  <div className="skills-section">
    <h3>Databases:</h3>
    <div className="skills-box">
      {/* Databases */}
      <div className="flex flex-col items-center space-y-2">
          <SiMysql size={40} className="text-[#00758f]" />
          <span className="font-bold">MySQL</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <FaDatabase size={40} className="text-[#000]" />
          <span className="font-bold">DBMS</span>
        </div>
    </div>
  </div>

  <div className="skills-section">
    <h3>Frameworks & Tools:</h3>
    <div className="skills-box">
      {/* Tools */}
      <div className="flex flex-col items-center space-y-2">
          <SiBootstrap size={40} className="text-[#563d7c]" />
          <span className="font-bold">Swing</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SiBootstrap size={40} className="text-[#563d7c]" />
          <span className="font-bold">Laravel</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <FaGitAlt size={40} className="text-[#f05032]" />
          <span className="font-bold">Git</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <FaGithub size={40} className="text-black" />
          <span className="font-bold">GitHub</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <DiVisualstudio size={40} className="text-[#0078d7]" />
          <span className="font-bold">VS Code</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <DiVisualstudio size={40} className="text-[#0078d7]" />
          <span className="font-bold">Netbeans</span>
    </div>
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
