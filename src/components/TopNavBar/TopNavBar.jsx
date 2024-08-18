import React from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";

function TopNavBar() {
  const location = useLocation();

  return (
    <nav className="top-nav-bar">
      <div className="logo">Logo</div>
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNavBar;
