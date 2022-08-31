import React, { useState, useEffect } from "react";
import { SiTwitter } from "react-icons/si";
import { BiLink } from "react-icons/bi";
import "./Herosection.css";
import { username, API_URL } from "../Constant";
import axios from "axios";

const Herosection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/users/${username}`).then((res) => setData(res.data));
  });

  return (
    <div className="hero-container">
      <div className="left">
        <img src={data.avatar_url} alt="avatar" />
      </div>
      <div className="right">
        <h1 className="heading">{data.name}</h1>
        <p className="username">(@{data.login})</p>
        <p className="userinfo">{data.bio}</p>
        <div className="socials">
          <a
            href={`http://twitter.com/${data.twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTwitter color="white" size={35} />
          </a>
          <a href={`https://${data.blog}`} target="_blank" rel="noopener noreferrer">
            <BiLink color="white" size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
