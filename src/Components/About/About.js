import React, { Fragment } from "react";
import CustomButton from "../CustomButton/CustomButton";
import AppleButton from "./About-img/apple-btn.png";
import AndroidButton from "./About-img/android-btn.png";
import PhoneSpotify from "./About-img/iphone-spotify.png";
import David from "./About-img/David-image.png";
import Bao from "./About-img/Bao-image.png";
import Ngoc from "./About-img/Ngoc-image.png";
import Darian from "./About-img/Darian-image.png";

import "./About.css";
import "../../grid.css";

const About = () => {
  return (
    <Fragment>
      <div className="about-container">
        <div className="about-comment row">
          <h2>We provide high quality music and service to our customers.</h2>
        </div>
        <div className="row">
          <div className="col span-1-of-4">
            <blockquote>
              My best app on the phone. It's flawless, reliable and quick. I am
              in love with Spotify - I use it every day. I highly recommend.
              They have such an amazing product. I use premium and it worths
              every penny.
              <cite className="bubble-picture">
                <img src={David} alt="david.png" />
                David
              </cite>
            </blockquote>
          </div>
          <div className="col span-1-of-4">
            <blockquote>
              The site is excellent, you just type a band or artist and it
              brings up everything from them for you to choose your own personal
              playlist of is free and easy.
              <cite className="bubble-picture">
                <img src={Bao} alt="bao.png" />
                Bao
              </cite>
            </blockquote>
          </div>
          <div className="col span-1-of-4">
            <blockquote>
              I love that Spotify has a Discover Weekly and Daily Mix just for
              me and also being able to save so many albums! The website is very
              easy to handle especially for someone that is not tech savvy.
              <cite className="bubble-picture">
                <img src={Ngoc} alt="ngoc.png" />
                Ngoc
              </cite>
            </blockquote>
          </div>
          <div className="col span-1-of-4">
            <blockquote>
              It's easy to use and has a lot of the new and older music. You can
              also choose the premium or free service. The selection of songs is
              what keeps me with Spotify.
              <cite className="bubble-picture">
                <img src={Darian} alt="darian.png" />
                Darian
              </cite>
            </blockquote>
          </div>
        </div>
        <div className="about-top row">
          <h2>How to listen &mdash; Simple as 1, 2, 3</h2>
        </div>
        <div className="row">
          <div className="col span-1-of-2 step-box">
            <img
              className="app-screen"
              src={PhoneSpotify}
              alt="spotify app on iPhone"
            />
          </div>
          <div className="col span-1-of-2 step-box">
            <div className="works-step">
              <div>1</div>
              <p>
                Spotify music is free to all users, but it is even better with a
                Premium subscription with high premium sound quality!
              </p>
            </div>
            <div className="works-step">
              <div>2</div>
              <p>
                Choose the subscription plan that best fits you and sign up
                today to listen.
              </p>
            </div>
            <div className="works-step">
              <div>3</div>
              <p>
                Listen to your favorite EDM artist and rock on with spotify's
                premium high sound quality!
              </p>
            </div>
            <div style={{ paddingLeft: "120px" }}>
              <CustomButton
                href="https://www.spotify.com/us/premium/?checkout=false#PLANS"
                className="signin-button custom-button-ghost"
              >
                Choose your subscription
              </CustomButton>
            </div>
            {/*
            <a href="#apple-button" className="btn-apple">
              <img
                className="btn-size"
                src={AppleButton}
                alt="apple download button"
              />
            </a>
            <a href="#android-button" className="btn-android">
              <img
                className="btn-size"
                src={AndroidButton}
                alt="android download button"
              />
            </a>
            */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
