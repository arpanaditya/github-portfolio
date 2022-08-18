import React, { useState, useEffect } from "react";
import "./Projects.css";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/arpanaditya/repos")
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
            <a href={item.html_url} target='_blank' rel="noopener noreferrer">{item.name}</a>
              {/* {item.name} */}
              <p className="description">{item.description}</p>
              <p className="lang"><span style={{'font-weight': 'bold'}}>Languages:</span> {item.language}</p>
            </div>
          );
        })}
        {/* <div className="box">
          Project Name
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
            maiores!
          </p>
        </div> */}
        {/* <div className="box">box2</div>
        <div className="box">box3</div>
        <div className="box">box4</div>
        <div className="box">box5</div>
        <div className="box">box6</div> */}
        {/* <img src="http://ghchart.rshah.org/arpanaditya" alt="2016rshah's Github chart" /> */}
      </div>
    </div>
  );
};

export default Projects;
