import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Bean & Brew</h2>

      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;