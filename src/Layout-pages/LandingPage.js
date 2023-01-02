import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingpage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing-image">
        <img
          className="image-style"
          src="img/instagram-logo.png"
          alt="landingpage"
        />
      </div>
      <div className="insta-div">
        <h1 className="instaclone">Welcome to Instaclone</h1>
        <button
          className="btn waves-effect waves-light enter"
          type="submit"
          name="action"
        >
          <Link to="/post" className="page-link">
            Enter
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
