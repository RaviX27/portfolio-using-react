import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCalendar } from'@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <div className="logo">
          <a href="#" className="logo">Portfolio.</a>
        </div>
        <div className="nav-options">
          <a href="#" className='active'>About</a>
          <a href="#">Education</a>
          <a href="#">Skill</a>
          <a href="#">Project</a>
          <a href="#">Contact Me</a>
        </div>
        
      </div>
      <div className='card'>
        <div className="sidebar">
            <div className='sidebar-content'>
              <h3>Hello, I'm</h3>
              <h1 className='name'>Umanda Ravimal</h1>
              <h3>I am a <span>Software Engineer</span></h3>
              <div className='social-media'>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="github-icon"  />
              </a>
            </div>
              <a href='#' className='btn'>Download CV</a>
            </div>
            <div className='home-img'>
              <img src={process.env.PUBLIC_URL + '/my-img.png'} alt="Home" className='my-img' />
            </div>
        </div>
      </div>
      <div className='main-container'>
        <section className='about'>
          <h2 className='section-title'>
            About <span>Me </span>
          </h2>
          <p className='about-content'>I am Umanda Wanninayake, a passionate and motivated third-year Information and Communication Technology student at the Faculty of Technology in the University of Sri Jayewardenepura. With a current GPA of 3.40, I am eager to embark on a Software Engineering Internship where I can apply my technical proficiency, problem-solving skills, and collaborative teamwork in a dynamic learning environment.
              In my academic journey, I have honed my skills in various programming languages including Java, Python, and JavaScript. My coursework has equipped me with a solid foundation in essential areas such as Object-Oriented Programming, Machine Learning, Web Development, Data Structure and Algorithm, and Database Systems. I bring to the table a keen understanding of Quality Assurance, having gained practical experience as a Quality Assurance Technician at Global System Solutions International. During my tenure, I not only sharpened my teamwork skills through collaborative projects but also contributed to the collective success of the team by fostering effective communication.
              Outside the realm of technology, I have further enriched my communication skills through a Diploma in English from the British Way English Academy. This has empowered me to express ideas clearly and collaborate effectively in diverse settings.
              I am excited about the prospect of contributing my skills and enthusiasm to a challenging internship role, where I can continue to grow as a software engineer and make meaningful contributions to innovative projects.
          </p>
        </section>
        <section className='education'>
          <h2 className='section-title'>
            My <span>Education </span>
          </h2>
          <div className='content'>
            <div className='year'>
            <FontAwesomeIcon icon={faCalendar} className="calendar-icon" />
             2021 - present</div>
            <h3>Bachelor Degree - University of Sri Jayawardanapura</h3>
            <p>
              I'm currently following a Bachelor of ICT (hons) degree.
            </p>

          </div>
          <div className='content'>
            <div className='year'>
            <FontAwesomeIcon icon={faCalendar} className="calendar-icon" />
            2020 - 2021
            </div>
            <h3>Diploma in English - British Way English Academy</h3>
            <p>
              I have successfully completed Diploma in English course with General pass in Britishway English Academy Anuradapura.
            </p>
          </div>

          <div className='content'>
            <div className='year'>
            <FontAwesomeIcon icon={faCalendar} className="calendar-icon" />
            2006 - 2019
            </div>
            <h3>Advance Level - Bandaranayake Navodya School</h3>
            <p>
              I have learn in Ehetuwewa Bandaranayake Navodya School and I choosed technology Stream. I Got 3B's and my Z-score was 1.6713.
            </p>
          </div>
        </section> 
      </div>
      
    </div>
  );
};

export default App;