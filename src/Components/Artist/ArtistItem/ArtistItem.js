import React from "react";
import Music from "../../Music/Music";
import "./ArtistItem.css";

const ArtistItem = ({ name, image, song }) => {
  return (
    <li>
      <figure className="dj-photo">
        <img src={image} alt="dj Photos" />
        <h3 className="dj-name">{name}</h3>
        <a href="#" className="centered">
          <Music song={song} />
        </a>
      </figure>
    </li>
  );
};

export default ArtistItem;
