import "./App.css";
import Herosection from "./components/hero/Herosection";
import Navbar from "./components/nav/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      {/* <Route path="/navbar" component={Navbar} /> */}
      <Route path="/hero" component={Herosection} />
        {/* <Herosection /> */}
      </div>
    </Router>
  );
}

export default App;
