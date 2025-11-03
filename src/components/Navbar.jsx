import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/Portfolio/" className="navbar-link">
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Portfolio/resume" className="navbar-link">
            Resume
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Portfolio/portfolio" className="navbar-link">
            Portfolio
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/Portfolio/contact" className="navbar-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
