import React from 'react';
import cancerImage from "./Canser predict img.png";
import fileCompImage from "./File Comp img.jpg"
import spamImage from "./spam detect img.jpg"

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: 'Skin Cancer Detection Mobile App',
      imageUrl:cancerImage,
      githubLink: 'https://github.com/RaviX27/Skin-Cancer-prediction-with-CNN'
    },
    {
      id: 2,
      name: 'Huffman File Compression',
      imageUrl: fileCompImage,
      githubLink: 'https://github.com/RaviX27/File-Compression-App'
    },
    {
      id: 3,
      name: 'Multi-Language Spam Filter',
      imageUrl: spamImage,
      githubLink: 'https://github.com/RaviX27/Multilingual-Spam-Detector'
    }
  ];

  return (
    <section className="projects">
      <h2 className="section-title"><span>My </span>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectBox key={project.id} name={project.name} imageUrl={project.imageUrl} githubLink={project.githubLink} />
        ))}
      </div>
    </section>
  );
};

const ProjectBox = ({ name, imageUrl, githubLink }) => {
  return (
    <div className="project-box" onClick={() => window.open(githubLink, '_blank')}>
      <img src={imageUrl} alt={name} className="project-image" />
      <span className="project-name">{name}</span>
    </div>
  );
};

export default ProjectsSection;
