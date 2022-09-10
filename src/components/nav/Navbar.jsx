import { useEffect, useState } from "react";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import Dark64 from "./../../assets/GitHub-Dark-64px.png";
import Light64 from "./../../assets/GitHub-Light-64px.png";
import "./Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("light-theme");
  const [logo, setLogo] = useState(Dark64);

  const toggleTheme = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
    logo === Light64 ? setLogo(Dark64) : setLogo(Light64);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="navigation">
      <img src={logo} alt="logo" />
      <ul className="nav-links">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="links">Home</li>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <li className="links">Projects</li>
        </Link>
        <Link to="/contribution" style={{ textDecoration: "none" }}>
          <li className="links">Contributions</li>
        </Link>
        <li onClick={() => toggleTheme()}>
          {theme === "light-theme" ? (
            <MdDarkMode size={20} />
          ) : (
            <MdWbSunny size={20} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
