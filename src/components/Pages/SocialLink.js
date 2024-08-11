import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "./SocialLinks.css"; // Import the CSS file

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
          <span className="social-link-text">LinkedIn</span>
        </>
      ),
      href: "https://www.linkedin.com/in/vaishali-jain-571361229/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FontAwesomeIcon icon={faGithub} className="fa-icon" />
          <span className="social-link-text">GitHub</span>
        </>
      ),
      href: "https://github.com/jainvaishali0408",
    },
    {
      id: 3,
      child: (
        <>
          <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
          <span className="social-link-text">Mail</span>
        </>
      ),
      href: "mailto:jainvaishali850@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <FontAwesomeIcon icon={faFileAlt} className="fa-icon" />
          <span className="social-link-text">Resume</span>
        </>
      ),
      href: "https://drive.google.com/file/d/1xdqeeSsmwOmxOXLEssT4BxH04muChnGj/view?usp=sharing",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="social-links-container">
      <ul className="social-links-list">
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`social-link-item ${style}`}
          >
            <a
              href={href}
              className="flex items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
