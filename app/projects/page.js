import React from 'react';
import { 
  FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt 
} from "react-icons/fa";

export default function Projects() {
  
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Safeeya Munawwar - Personal Portfolio: A dynamic and interactive portfolio showcasing my skills, projects, and experiences. Built using Next.js, Tailwind CSS, React, and Formspree for contact form handling.",
      image: "portfolio.PNG",  
      link: "https://safeeya-munawwar-personal-portfolio.vercel.app/",
    },
    {
      title: "Pharmacy Management System",
      description: "MediCare Lanka Pharmacy Management System is a web-based application designed to streamline and automate the operations of a pharmacy. This system enhances efficiency, accuracy, and user experience in managing customers, medicines, suppliers, and invoices while generating sales and purchase reports. Built using HTML, CSS, JavaScript, PHP, and MySQL, it offers a robust and scalable solution for modern pharmacy management.",
      image: "medi.PNG",  
      link: "https://github.com/Safeeya-Munawwar/Pharmacy-Management-System.git",
    },
    {
      title: "Library Management System",
      description: "The Library Management System is a Java-based application designed for efficient library operations. Built using NetBeans, Java Swing, and MySQL, it supports role-based access, allowing Admins to manage books and members, while Members can search and view books. The system adheres to the MVC architecture, emphasizing modularity, object-oriented programming (OOP) principles, and robust error handling.",
      image: "library.PNG", 
      link: "https://github.com/Safeeya-Munawwar/Library_Management_System.git",
    },
    {
      title: "Medicine Expiry Date Reminder App",
      description: "The Medicine Expiry Date Reminder App is a practical tool designed to help you manage your medication inventory efficiently. With a streamlined interface and comprehensive features, this app ensures you never miss important expiry dates and helps you stay organized.",
      image: "medicine.PNG", 
      link: "https://safeeya-munawwar.github.io/Medicine-Expiry-Date-Reminder-App/",
    },
    {
      title: "Student Grade Management System - Java Console Based",
      description: "The Student Grade Management System is a Java-based console application designed to efficiently manage student data and grades. It provides features to: Add, update, and remove student information. Manage grades for multiple subjects. Calculate average grades.",
      image: "student.PNG", 
      link: "https://github.com/Safeeya-Munawwar/Student-Grade-Management-System.git",
    },
    {
      title: "Java Console Based Pharmacy Management System",
      description: "This is a console-based Java project that implements a Pharmacy Management System. The system provides an efficient way to manage pharmacy operations such as inventory management, sales processing, and sales report generation. It is designed to be user-friendly and scalable, making it suitable for small to medium-sized pharmacies.",
      image: "javap.PNG",  
      link: "https://github.com/Safeeya-Munawwar/Java-Console-Based-Pharmacy-Management-System.git"
    },
    {
      title: "Tasty Bud Recipes - Blog",
      description: "A blog built to share recipes, designed using HTML, CSS, and JavaScript.",
      image: "tasty.PNG",  
      link: "https://Safeeya-Munawwar.github.io/TastyBudRecipes/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="p-4 bg-white shadow-md rounded-xl">
        <h1 className="text-xl font-semibold text-blue-800 text-center mb-6">Projects</h1>

        {projects.map((project, index) => (
          <div key={index} className="project-card p-4 bg-gray-100 shadow-lg rounded-lg mb-6">
            <h3 className="project-title text-lg font-semibold text-blue-700 text-center mb-2">{project.title}</h3>
            <p className="project-description text-gray-700 text-center mb-4">{project.description}</p>
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image w-full md:w-1/2 h-48 object-cover rounded-lg mb-4"
              />
            )}
            {project.link && (
              <a 
                href={project.link} 
                className="project-link text-blue-500 font-semibold hover:underline inline-block mt-2"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </section>

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
