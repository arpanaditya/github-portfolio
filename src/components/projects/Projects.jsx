import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="header">
        <h1>Projects</h1>
      </div>
      <div className="project-box">
        <div className="box">
          Project Name
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
            maiores!
          </p>
        </div>
        <div className="box">box2</div>
        <div className="box">box3</div>
        <div className="box">box4</div>
        <div className="box">box5</div>
        <div className="box">box6</div>
      </div>
    </div>
  );
};

export default Projects;
