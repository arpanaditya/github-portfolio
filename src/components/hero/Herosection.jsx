import "./Herosection.css";
import avatar from "../../assets/headshot-image.jpg";
import { SiTwitter, SiInstagram, SiLinkedin } from "react-icons/si";

const Herosection = () => {
  return (
    <div className="container">
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
            href="http://twitter.com/adityaa_sahoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTwitter color="black" size={35} />
          </a>
          <a
            href="http://instagram.com/adityaa_sahoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram color="black" size={35} />
          </a>
          <a
            href="http://linkedin.com/in/arpan-aditya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin color="black" size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
