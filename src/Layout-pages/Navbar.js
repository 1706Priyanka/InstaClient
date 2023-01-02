import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper #e1f5fe light-blue lighten-5">
        <Link to="/post" className="brand-logo left insta-logo">
          Instaclone
        </Link>
        <ul id="nav-mobile" className="right ">
          <li>
            <Link className="a" to="/create">
              <i className="material-icons">camera_alt</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
