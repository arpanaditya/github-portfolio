import React, { useEffect, useState } from "react";
import { MdDarkMode, MdWbSunny, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Dark64 from "./../../assets/GitHub-Dark-64px.png";
import Light64 from "./../../assets/GitHub-Light-64px.png";
import "./Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("light-theme");
  const [logo, setLogo] = useState(Dark64);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"));
    setLogo((prevLogo) => (prevLogo === Light64 ? Dark64 : Light64));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="navigation">
      <img src={logo} alt="logo" className="logo" />
      <div className={`menu-button ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
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
          {theme === "light-theme" ? <MdDarkMode size={20} /> : <MdWbSunny size={20} />}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
