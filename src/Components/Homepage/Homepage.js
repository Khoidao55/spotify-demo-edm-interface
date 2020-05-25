import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import "./background.png";
import CustomButton from "../CustomButton/CustomButton";

const Homepage = () => {
  return (
    <Fragment>
      <div className="background">
        <div className="row">
          <div className="gryffin-text-box">
            <h1>SPOTIFY presents:</h1>
            <h1>Electric Dance Music</h1>
            <Link to="/explore">
              <CustomButton className="custom-button custom-button-full">
                Explore EDM!
              </CustomButton>
            </Link>
            <Link to="/artists">
              <CustomButton className="custom-button custom-button-ghost">
                Show me artists!
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
