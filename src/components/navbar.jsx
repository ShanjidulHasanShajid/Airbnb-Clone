import { FiMenu } from "react-icons/fi";
import { LuGlobe } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logobig.png" alt="company logo" />
      </div>
      <div className="options">
        <p>
          <strong>Stays</strong>
        </p>
        <p>Experiences</p>
      </div>
      <div className="navigator">
        <div className="navEnclosure">
          <p>Airbnb your home</p>
          <LuGlobe />
          <div className="dropDown">
            <FiMenu className="hambugerMenu"/>
            <FaUserCircle className="profileIcon" />
          </div>

        </div>
        
      </div>
    </div>
  );
}