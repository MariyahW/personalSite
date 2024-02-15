import React from "react";
import Dropdown from "./Dropdown";

export default function Nav() {
  return (
    <>
      <nav className="nav-bar">
     

        <ul>
          <li>
            <a className="navList" href="./index.html">
              Home
            </a>
            <a className="navList" href="./contact.html">
              Contact Me
            </a>
          </li>
          <li>
            <a className="navList" href="./resume.html">Resume</a>
          </li>
          <li>
            <a className="navList" href="./blog.html">Exclusively Mariyah</a>
          </li>
          <li>
            <a className="navList"
              href="./images/mariyah-watson-cv-tech-update.pdf"
              download="Mariyah_Watson_Resume"
            >
              Download Full Resume
            </a>
          </li>
          <li>
            <a className="navList"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              See My Work
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
