import React, { useEffect, useState } from "react";
import { BiLink } from "react-icons/bi";
import { SiTwitter } from "react-icons/si";
import { Watch } from "react-loader-spinner";
import { username } from "../Constant";
import { apidata } from "../Utils";
import "./Herosection.css";

const Herosection = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    document.title = `${username} - Home`;
    apidata().then((data) => {
      setDetails(data);
    });
  }, []);

  return details ? (
    <div className="hero-container">
      <div className="left">
        <img src={details.avatar_url} alt="avatar" />
      </div>
      <div className="right">
        <h1 className="userhead">{details.name}</h1>
        <p className="username">(@{details.login})</p>
        <p className="userinfo">{details.bio}</p>
        <div className="socials">
          <a
            href={`http://twitter.com/${details.twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTwitter size={35} />
          </a>
          <a
            href={`https://${details.blog}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLink size={35} />
          </a>
        </div>
      </div>
    </div>
  ) : (
    <Watch
      height="200"
      width="200"
      radius="48"
      color="#4f46e5"
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

export default Herosection;
