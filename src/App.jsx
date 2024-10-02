import "./App.css";
import { LuGlobe } from "react-icons/lu";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logobig.png" alt="company logo" />
      </div>
      <div className="options">
        <p>
          <strong>Stays</strong>
        </p>
        <p>Experience</p>
      </div>
      <div className="navigator">
        <p>Airbnb your home</p>
        <LuGlobe />
      </div>
    </div>
  );
}

function App() {
  return <Navbar />;
}

export default App;
