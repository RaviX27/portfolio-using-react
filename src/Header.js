import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="#" className="logo">Portfolio.</a>
      </div>
      <div className="nav-options">
        <a href="#" className='active'>About</a>
        <a href="#">Career</a>
        <a href="#">Skill</a>
        <a href="#">Project</a>
        <a href="#">Contact Me</a>
      </div>
    </div>
  );
};

export default Header;