import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;