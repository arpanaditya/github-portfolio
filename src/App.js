import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Herosection from "./components/hero/Herosection";
import Navbar from "./components/nav/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contribution" element={<Herosection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
