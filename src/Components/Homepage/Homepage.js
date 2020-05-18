import React from 'react';
import './Homepage.css';
import './background.png';

const Homepage = ({ onRouteChange }) => {
    console.log("hello: " + onRouteChange);
    return(
        <div className="background">
            <div className="row">
                <div className="gryffin-text-box">
                    <h1>SPOTIFY presents:</h1>
                    <h1>Electric Dance Music</h1>
                    <a className="btn btn-full"  href="#0" onClick={() => onRouteChange('explore')}>Explore EDM!</a>
                    <a className="btn btn-ghost" href="#1">Show me artists!</a> 
                </div>
            </div>
        </div>
    )
}

export default Homepage;