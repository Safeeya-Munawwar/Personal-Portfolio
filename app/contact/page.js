"use client"; 

import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xrbearrk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setErrorMessage("");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
    <div className="contact"> 
  <div className="contact-container">
    <h2>Contact Me</h2>
    <h3>If you'd like to get in touch, please feel free to send a message!</h3>

    {successMessage && <p className="success">{successMessage}</p>}
    {errorMessage && <p className="error">{errorMessage}</p>}

    <form onSubmit={handleSubmit} className="contact-form">
      <label>Your Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Your Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Your Message</label>
      <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required />

      <button type="submit">Send Message</button>
    </form>

    <div className="social-links">
      <a href="mailto:shafiyasha0036@gmail.com"><FaEnvelope /></a>
      <a href="https://www.linkedin.com/in/safeeya-munawwar"><FaLinkedin /></a>
      <a href="https://github.com/Safeeya-Munawwar"><FaGithub /></a>
    </div>
  </div>
</div>


      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600">
        <h3 className="font-semibold">&copy; Safeeya Munawwar</h3>
        <div className="social-links flex justify-center gap-4 mt-2 text-2xl">
          <a href="https://www.linkedin.com/in/safeeya-munawwar" title="LinkedIn" className="text-gray-700 hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Safeeya-Munawwar" title="GitHub" className="text-gray-700 hover:text-blue-600">
            <FaGithub />
          </a>
          <a href="mailto:shafiyasha0036@gmail.com" title="Email" className="text-gray-700 hover:text-blue-600">
            <FaEnvelope />
          </a>
          <a href="https://safeeya-munawwar-personal-portfolio.vercel.app/" title="Portfolio" className="text-gray-700 hover:text-blue-600">
            <FaExternalLinkAlt />
          </a>
        </div>
      </footer>
    </div>
  );
}
