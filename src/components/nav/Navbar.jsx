import "./Navbar.css";
import Dark64 from "../../assets/GitHub-Dark-64px.png";
import {MdDarkMode} from 'react-icons/md';

const Navbar = () => {
  return (
    <div className="navigation">
      <img src={Dark64} alt="logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>Projects</li>
        <li>Contribution</li>
        <li>
          <MdDarkMode size={20} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
