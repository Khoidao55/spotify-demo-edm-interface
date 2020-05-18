import React from 'react';
import './ArtistItem.css';

const ArtistItem = ({ name, image }) => {
    return(
         
                <li>
                    <figure className="dj-photo">
                        <img src={image} alt="{marshmello}"/>
                        <h4 className="centered">{name}</h4>
                    </figure>
                </li>
  
    )
}

export default ArtistItem;