import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

export default function Skills() {
    return (
           <div className="min-h-screen flex flex-col">

             {/* Certificates Section */}
            <div className="certificates-container">
                <h1>Completed Certificates</h1>

                <div className="certificate-image">
                    <h4>Python Programming</h4>
                    <p>Microsoft Learn Student Ambassadors</p>
                    <p>February 2025</p>
                    <img src="/7.PNG" alt="Python" />
                </div>

                <div className="certificate-image">
                    <h4>Build a Social Media App with MERN Stack</h4>
                    <p>SkillEcted</p>
                    <p>February 2025</p>
                    <img src="/4.png" alt="MERN" />
                </div>
                
                <div className="certificate-image">
                    <h4>Certificate in Complete Invideo AI Master Course</h4>
                    <p>Udemy</p>
                    <p>January 2025</p>
                    <img src="/3.jpg" alt="Invideo" />
                </div>

                <div className="certificate-image">
                    <h4>Certificate in Python & Django REST API Bootcamp</h4>
                    <p>Udemy</p>
                    <p>January 2025</p>
                    <img src="/2.jpg" alt="Python & Django" />
                </div>

                <div className="certificate-image">
                    <h4>Certificate in Learn PHP Programming</h4>
                    <p>Udemy</p>
                    <p>October 2024</p>
                    <img src="/1.jpg" alt="Learn PHP Programming" />
                </div>

                <div className="certificate-image">
                    <h4>Certificate Psychology & Counselling Workshop</h4>
                    <p>Orinsto Institute</p>
                    <p>October 2024</p>
                    <img src="/5.jpg" alt="Psychology" />
                </div>

                <div className="certificate-image">
                    <h4>Certificate in English Extension Course</h4>
                    <p>Udemy</p>
                    <p>January 2025</p>
                    <img src="/6.jpg" alt="English" />
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
