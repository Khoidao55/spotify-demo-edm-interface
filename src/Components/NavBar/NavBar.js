import React from "react";
import "./NavBar.css";
import SpotifyLogo from "./logo.png";
import { Link } from "react-router-dom";
import { auth } from "../../FireBase/FireBase.utils";
import User from "./user.png";

const NavBar = ({ currentUser }) => {
  return (
    <nav>
      <div className="row">
        <Link to="/">
          <img src={SpotifyLogo} alt="Homepage navigation" className="logo" />
        </Link>
        <ul className="main-nav">
          <li>
            <Link to="/">
              <a href="#home">Home</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a href="#about">About</a>
            </Link>
          </li>
          <li>
            {currentUser ? (
              <a href="#signout" onClick={() => auth.signOut()}>
                <cite className="user-profile">
                  <img src={User} />
                </cite>
              </a>
            ) : (
              <Link to="/signin">
                <a href="#signin">Sign In</a>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
