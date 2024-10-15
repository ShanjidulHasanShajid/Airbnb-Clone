import { FiMenu } from "react-icons/fi";
import { LuGlobe } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import "./App.css";

function App() {
  return (<>
    <Navbar />
    <SearchBar/>
    </>
  );

}

export default App;
