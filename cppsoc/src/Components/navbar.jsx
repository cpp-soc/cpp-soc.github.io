import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <nav>
        <Link to={"./"}>Home </Link>
        <Link to={"./Team"}>Team </Link>
        <Link to={"./FAQ"}>FAQ </Link>
        <Link to={"./Sponsors"}>Contact Us! </Link>
      </nav>
    );
  }
  
export default NavBar