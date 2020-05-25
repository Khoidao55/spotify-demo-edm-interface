import React from "react";
import "./ExploreItem.css";

const ExploreItem = ({ name, description, image }) => {
  return (
    <div className="col span-1-of-4 box">
      <img src={image} alt="artist-names" className="feature-logo" />
      <h3 className="underline-title">{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ExploreItem;
