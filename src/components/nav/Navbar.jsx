import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import Dark64 from "./../../assets/GitHub-Dark-64px.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navigation">
      <img src={Dark64} alt="logo" />
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/contribution">
          <li>Contributions</li>
        </Link>
        <li>
          <MdDarkMode size={20} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
