/* Dependencies */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Components */
import NavBar from "./Components/Navbar";

/* Pages */
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

/* CSS */
import "./styles/main.css";
import "./styles/Projects.css";

function App() {
  return (
    <>
      <div className="main">
        <h1>Welcome to Cal Poly Pomona - Security Operations Center</h1>
      </div>
      <Router>
        <div className="navbar">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <div className="foot">{/* <Footer/> */}</div>
      </Router>
    </>
  );
}

export default App;
