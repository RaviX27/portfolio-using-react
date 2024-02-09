import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import AboutSection from './AboutSection';
import CareerTimeline from './CareerTimeline';
import timelineElements from "./timelineElement";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className='card'>
        <Sidebar />
      </div>
      <div className='main-container'>
        <AboutSection />
        <CareerTimeline timelineElements={timelineElements} />
      </div>
    </div>
  );
};

export default App;