import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <nav>
        <Link to={"./"}>Home </Link>
        <Link to={"./Projects"}>Projects </Link>
{/* w */}
      </nav>
    );
  }
  
export default NavBar