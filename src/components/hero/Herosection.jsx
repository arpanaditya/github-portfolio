import React from "react";
import { SiTwitter } from "react-icons/si";
import { BiLink } from "react-icons/bi";
import avatar from "./../../assets/headshot-image.jpg";
import "./Herosection.css";
// import { username, API_URL } from "../Constant";
// import axios from "axios";

const Herosection = () => {

  return (
    <div className="hero-container">
      <div className="left">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="right">
        <h1 className="heading">Aditya Arpan Sahoo</h1>
        <p className="username">(@arpanaditya)</p>
        <p className="userinfo">
          Software Engineer @DigitalProductschool | @mlh mentor | @postmanlabs
          student expert | @scaleracademy Elite
        </p>
        <div className="socials">
          <a
            href={`http://twitter.com/adityaa_sahoo`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTwitter color="white" size={35} />
          </a>
          <a href={`https://linktr.ee/arpanaditya`} target="_blank" rel="noopener noreferrer">
            <BiLink color="white" size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
