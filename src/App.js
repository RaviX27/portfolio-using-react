import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import AboutSection from './AboutSection';
import CareerTimeline from './CareerTimeline';
import timelineElements from "./timelineElement";
import SkillsSection from './SkillSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import { Element } from 'react-scroll';
import ScrollReveal from 'scrollreveal';
import './App.css';

const App = () => {
  useEffect(() => {
    ScrollReveal().reveal('.section-title', {
      delay: 300,
      distance: '20px',
      origin: 'bottom',
      opacity: 0,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    ScrollReveal().reveal('.about-content, .career-timeline, .skills, .projects, .contact', {
      delay: 300,
      distance: '20px',
      origin: 'bottom',
      opacity: 0,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      interval: 200, // Delay between each element
    });

    ScrollReveal().reveal('.vertical-timeline-element, .skill-box, .project-box, .contact-box', {
      delay: 300,
      distance: '20px',
      origin: 'bottom',
      opacity: 0,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      interval: 200, // Delay between each element
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <div className='card'>
        <Sidebar />
      </div>
      <div className='main-container'>
        <Element name="about-section">
          <AboutSection />
        </Element>
        <Element name="career-timeline">
          <CareerTimeline timelineElements={timelineElements} />
        </Element>
        <Element name="skills-section">
          <SkillsSection/>
        </Element>
        <Element name="projects-section">
          <ProjectsSection/>
        </Element>
        <Element name="contact-section">
          <ContactSection/>
        </Element>
      </div>
    </div>
  );
};

export default App;
