import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import AboutSection from './AboutSection';
import CareerTimeline from './CareerTimeline';
import timelineElements from "./timelineElement";
import SkillsSection from './SkillSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import { Element } from 'react-scroll';
import './App.css';

const App = () => {
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