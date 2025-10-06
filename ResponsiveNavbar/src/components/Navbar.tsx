import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div className="Navbar d-flex justify-content-between">
      <div className="LOGO">
        <h5>LOGO...</h5>
      </div>

      <ul className="NavList  gap-5 ">
        <li>
          <Link to="/" className="list-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/content" className="list-item">
            Content
          </Link>
        </li>
        <li>
          <Link to="/aboutUs" className="list-item">
            About Us
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="lg" className="hamburgerIcon" />
      </div>

      {menuOpen && (
        <ul className="hamburgerList">
          <li>
            <Link to="/" className="hamburger-list-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/content" className="hamburger-list-item">
              Content
            </Link>
          </li>
          <li>
            <Link to="/aboutUs" className="hamburger-list-item">
              About Us
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
