import React from "react";
import "./Projects.css";
// import axios from "axios";
// import { username, API_URL } from "../../components/Constant";

const Projects = () => {

  return (
    <div className="project-container">
      <div className="header">
        <h1>Projects</h1>
      </div>
      <div className="project-box">
            <div className="box">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Project 1
              </a>
              <p className="description">Project Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ut excepturi aut saepe porro aspernatur.</p>
              <p className="lang">
                <span style={{ "font-weight": "bold" }}>Languages:</span>{" "}
                HTML, CSS, JavaScript
              </p>
              <p className="demo"><a href="#" target="_blank" rel="noopener noreferrer">Preview</a></p>
            </div>
          );
      </div>
    </div>
  );
};

export default Projects;
