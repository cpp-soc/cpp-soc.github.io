import React from 'react';
import logo from './logo.svg';
import NavBar from './Components/Navbar';
import './Styles/main.css';

function App() {
  return (
    <div className="main">
      <NavBar/>
      <h1 className="Welcome">
        Welcome to Cal Poly Pomona's Security Operation Center
      </h1>
    </div>

  );
}

export default App;
