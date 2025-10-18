import React, { useState, useEffect } from "react";
import resume from "../data/resume";
import { FaSun, FaMoon, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = newTheme;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <nav
      className={`navbar navbar-expand-lg  ${theme === "dark" ? "navbar-dark bg-transparent" : "navbar-light bg-white shadow-sm"
        }`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#hero">
          {resume.name}
        </a>

        <button
          className="btn btn-theme-toggle"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <div className="d-flex ms-auto">
          <a
            className="btn btn-outline-accent"
            href={resume.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="me-1" /> LinkedIn
          </a>
          <a
            className="btn btn-outline-accent"
            href={`mailto:${resume.email}`}
          >
            <FaEnvelope className="me-1" /> Email
          </a>
        </div>
      </div>
    </nav>
  );
}
