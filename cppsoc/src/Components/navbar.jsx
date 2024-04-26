import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <ul>
      <img className="navbarlogo" src="../src/Assets/2024/Media/SOC.png"/>
      <li><NavLink to={"./"} activeClassName="active">Home </NavLink></li>
      <li><NavLink to={"./Projects"} activeClassName="active">Projects </NavLink></li>
      <li><NavLink to={"./Team"} activeClassName="active">Team </NavLink></li>
      <li><NavLink to={"./FAQ"} activeClassName="active">FAQ </NavLink></li>
      <li><NavLink to={"./Contact"} activeClassName="active">Contact </NavLink></li>
      {/* Add more NavLink components for other navigation items */}
    </ul>
  );
}

export default NavBar;
