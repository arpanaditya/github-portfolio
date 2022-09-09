import React, { useEffect, useState } from "react";
import { apirepos } from "../Utils";
import { Watch } from "react-loader-spinner";
import "./Projects.css";
import { username } from "../Constant";

const Projects = () => {
  const [repos, setRepos] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = `${username} - Projects`;
    apirepos().then((data) => {
      setRepos(data);
    });
  }, []);

  return repos ? (
    <div className="project-container">
      <div className="container">
        <div className="heading">
          <div className="header">
            <h1>Projects</h1>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search Projects..."
              id=""
              className="searchbar"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="project-box">
          {repos
            .filter((repo) => repo.name.toLowerCase().includes(query))
            .map((repo) => {
              return (
                <div className="box">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
    </div>
  ) : (
    <Watch
      height="200"
      width="200"
      radius="48"
      color="#700B97"
      ariaLabel="watch-loading"
      wrapperStyle={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "87vh",
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Projects;
