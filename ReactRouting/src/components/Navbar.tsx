import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="nav-list d-flex text-center gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutUs">AboutUs</Link>
        </li>

        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </nav>
  );
};
