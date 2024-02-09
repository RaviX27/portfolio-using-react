import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare, faJava, faPython, faAngular, faNodeJs} from '@fortawesome/free-brands-svg-icons';
import { faMicrochip as faMicrochipSolid ,faDatabase, faCloud, faCodeBranch} from '@fortawesome/free-solid-svg-icons';

const SkillsSection = () => {
  return (
    <section className="skills">
      <h2 className="section-title"><span>My </span>Skills</h2>
      <div className="skills-grid">
        <SkillBox icon={faJava} name="Java" />
        <SkillBox icon={faPython} name="Python" />
        <SkillBox icon={faMicrochipSolid} name="Machine Learning" />
        <SkillBox icon={faReact} name="React" />
        <SkillBox icon={faAngular} name="Angular" />
        <SkillBox icon={faHtml5} name="HTML5" />
        <SkillBox icon={faCss3} name="CSS3" />
        <SkillBox icon={faJsSquare} name="JavaScript" />
        <SkillBox icon={faNodeJs} name="Node.js" />
        <SkillBox icon={faDatabase} name="SQL" />
        <SkillBox icon={faCloud} name="Cloud Computing" />
        <SkillBox icon={faCodeBranch} name="Git" />
        
      </div>
    </section>
  );
};

const SkillBox = ({ icon, name }) => {
  return (
    <div className="skill-box">
      <FontAwesomeIcon icon={icon} className="skill-icon" />
      <span className="skill-name">{name}</span>
    </div>
  );
};

export default SkillsSection;