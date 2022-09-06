import React, { useEffect, useState } from "react";
import { BiLink } from "react-icons/bi";
import { SiTwitter } from "react-icons/si";
import { apidata } from "../Utils";
import "./Herosection.css";

const Herosection = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    apidata().then((data) => {
      setDetails(data);
    });
  }, []);

  return (
    details ?  (
      <div className="hero-container">
        <div className="left">
          <img src={details.avatar_url} alt="avatar" />
        </div>
        <div className="right">
          <h1 className="heading">{details.name}</h1>
          <p className="username">(@{details.login})</p>
          <p className="userinfo">
            {details.bio}
          </p>
          <div className="socials">
            <a
              href={`http://twitter.com/${details.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTwitter color="white" size={35} />
            </a>
            <a
              href={`https://${details.blog}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLink color="white" size={35} />
            </a>
          </div>
        </div>
      </div>
    ):
      <div>Loading...</div>
  );
};

export default Herosection;
