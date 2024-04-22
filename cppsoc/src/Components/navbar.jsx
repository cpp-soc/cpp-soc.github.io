import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink to={"./"} activeClassName="active">Home </NavLink>
      <NavLink to={"./Projects"} activeClassName="active">Projects </NavLink>
      <NavLink to={"./Team"} activeClassName="active">Team </NavLink>
      <NavLink to={"./FAQ"} activeClassName="active">FAQ </NavLink>
      <NavLink to={"./Contact"} activeClassName="active">Contact </NavLink>
      {/* Add more NavLink components for other navigation items */}
    </nav>
  );
}

export default NavBar;
