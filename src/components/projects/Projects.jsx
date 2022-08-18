import React, { useState, useEffect } from "react";
import "./Projects.css";
import axios from "axios";
import { username, API_URL } from "../../components/Constant";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/users/${username}/repos`)
      .then((res) => setData(res.data))
      .then((error) => console.log(error));
  }, []);

  return (
    <div className="project-container">
      <div className="header">
        <h1>Projects</h1>
      </div>
      <div className="project-box">
        {data.map((item) => {
          return (
            <div className="box">
              <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
              <p className="description">{item.description}</p>
              <p className="lang">
                <span style={{ "font-weight": "bold" }}>Languages:</span>{" "}
                {item.language}
              </p>
              <p className="demo"><a href={item.homepage} target="_blank" rel="noopener noreferrer">Preview</a></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
