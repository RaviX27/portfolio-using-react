import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <h3>Hello, I'm</h3>
        <h1 className='name'>Umanda Ravimal</h1>
        <h3>I am an <span>ICT Undergraduate</span></h3>
        <div className='social-media'>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
          </a>
          <a href="https://www.linkedin.com/in/umandaravimal" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
          </a>
          <a href="https://github.com/RaviX27" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="github-icon"  />
          </a>
        </div>
        <a href='#' className='btn'>Download CV</a>
      </div>
      <div className='home-img'>
        <img src={process.env.PUBLIC_URL + '/my-img.png'} alt="Home" className='my-img' />
      </div>
    </div>
  );
};

export default Sidebar;