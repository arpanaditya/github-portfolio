import React, { useEffect, useState } from "react";
import { apirepos } from "../Utils";
import "./Projects.css";

const Projects = () => {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    apirepos().then((data) => {
      setRepos(data);
    });
  }, []);

  return repos ? (
    <div className="project-container">
      <div className="header">
        <h1>Projects</h1>
      </div>
      <div className="project-box">
        {repos.map((repo) => {
          return (
            <div className="box">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              <p className="description">{repo.description}</p>
              <p className="lang">
                <span style={{ "font-weight": "bold" }}>Languages:</span>{" "}
                {repo.language}
              </p>
              <p className="demo">
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Projects;
