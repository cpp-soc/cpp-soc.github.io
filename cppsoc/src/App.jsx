/* Dependencies */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Components */
import NavBar from "./Components/navbar";

/* Pages */
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Team from "./Pages/Team";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";

/* CSS */
import "./styles/main.css";
import "./styles/Projects.css";
import "./styles/navbar.css";

function App() {
  return (
    <>
      <div className="main">
      </div>
      <Router>
        <div className="navbar">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <div className="foot">{}</div>
      </Router>
    </>
  );
}

export default App;
