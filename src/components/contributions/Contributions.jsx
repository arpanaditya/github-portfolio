import React, { useEffect } from "react";
import "./Contributions.css";
import { username } from "../Constant";

const Contributions = () => {

  useEffect(() => {
    document.title = `${username} - Contributions`
  })

  return (
    <div>
      <h1>{username}'s Contribution Graph</h1>
      <div className="graph">
        <img
          src={`https://ghchart.rshah.org/121212/${username}`}
          alt={`${username} GitHub Contribution Graph`}
        />
      </div>
    </div>
  );
};

export default Contributions;
