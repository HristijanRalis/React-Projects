import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <div className="Navbar d-flex justify-content-between">
      <div className="LOGO">
        <h5>LOGO...</h5>
      </div>

      <ul className="NavList d-flex justify-content-between gap-5 ">
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

      <div className="hamburger">
        <FontAwesomeIcon icon={faBars} size="lg" className="hamburgerIcon" />
      </div>

      <ul className="hamburgerList">
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
    </div>
  );
};
