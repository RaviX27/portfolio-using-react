import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="#" className="logo">Portfolio.</a>
      </div>
      <div className="nav-options">
        <Link
          to="about-section"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as per your need
          duration={500}
        >
          About
        </Link>
        <Link
          to="career-timeline"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as per your need
          duration={500}
        >
          Career
        </Link>
        <Link
          to="skills-section"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as per your need
          duration={500}
        >
          Skill
        </Link>
        <Link
          to="projects-section"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as per your need
          duration={500}
        >
          Project
        </Link>
        <Link
          to="contact-section"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as per your need
          duration={500}
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;