import React, { useEffect, useState } from "react";
import "./Contributions.css";
import { username } from "../Constant";
import { Watch } from "react-loader-spinner";

const Contributions = () => {

  const [imgurl, setImgurl] = useState(null);

  useEffect(() => {
    document.title = `${username} - Contributions`
    setImgurl(`https://ghchart.rshah.org/${username}`);
  })

  return imgurl ? (
    <div>
      <h1>{username}'s Contribution Graph</h1>
      <div className="graph">
        <img
          src={imgurl}
          alt={`${username} GitHub Contribution Graph`}
        />
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

export default Contributions;
