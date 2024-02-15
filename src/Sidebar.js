import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {

  const handleDownloadCV = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + '/Umanda Wanninayake Resume.pdf';
    downloadLink.download = 'Umanda Wanninayake Resume.pdf';
    downloadLink.click();
  };

  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <h3>Hello, I'm</h3>
        <h1 className='name'>Umanda Ravimal</h1>
        <h3>I am an <span>ICT Undergraduate</span></h3>
        <div className='social-media'>
          <a href="https://www.facebook.com//umanda.wanninayake" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
          </a>
          <a href="https://www.linkedin.com/in/umandaravimal" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
          </a>
          <a href="https://github.com/RaviX27" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="github-icon"  />
          </a>
        </div>
        <a onClick={handleDownloadCV} className='btn'>Download CV</a>
      </div>
      <div className='home-img'>
        <img src={process.env.PUBLIC_URL + '/my-img.png'} alt="Home" className='my-img' />
      </div>
    </div>
  );
};

export default Sidebar;