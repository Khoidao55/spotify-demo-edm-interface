import React, { Fragment } from "react";
import Marshmello from "./img/1.jpg";
import Illenium from "./img/2.jpg";
import Gryffin from "./img/3.jpg";
import Chainsmokers from "./img/4.jpg";
import Zedd from "./img/5.jpg";
import SanHolo from "./img/6.jpg";
import Slander from "./img/8.jpg";
import Elephante from "./img/elephante.png";

import GryffinSong from "../Music/Songs/Gryffin_TieMeDown.mp3";
import MarshmelloSong from "../Music/Songs/Marshmello_Alone.mp3";
import IlleniumSong from "../Music/Songs/Illenium_CrawlOutOfLove.mp3";
import ChainSmokerSong from "../Music/Songs/Chainsmokers_Roses.mp3";
import ZeddSong from "../Music/Songs/Zedd_Clarity.mp3";
import SanholoSong from "../Music/Songs/SanHolo_Light.mp3";
import ElephanteSong from "../Music/Songs/Elephante.mp3";
import SlanderSong from "../Music/Songs/Slander.mp3";

import ArtistItem from "./ArtistItem/ArtistItem.js";
import "./img/background.jpg";
import "./Artist.css";

class Artist extends React.Component {
  constructor() {
    super();

    this.state = {
      play: false,
      pause: true,
      section: [
        {
          name: "Marshmello",
          image: Marshmello,
          song: MarshmelloSong,
          id: 1,
        },
        {
          name: "Illenium",
          image: Illenium,
          song: IlleniumSong,
          id: 2,
        },
        {
          name: "Gryffin",
          image: Gryffin,
          song: GryffinSong,
          id: 3,
        },
        {
          name: "Chainsmokers",
          image: Chainsmokers,
          song: ChainSmokerSong,
          id: 4,
        },
        {
          name: "Zedd",
          image: Zedd,
          song: ZeddSong,
          id: 5,
        },
        {
          name: "San Holo",
          image: SanHolo,
          song: SanholoSong,
          id: 6,
        },
        {
          name: "Elephante",
          image: Elephante,
          song: ElephanteSong,
          id: 7,
        },
        {
          name: "Slander",
          image: Slander,
          song: SlanderSong,
          id: 8,
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <div className="dj-container">
          <h2 className="descriptions">Some artist includes... </h2>
          <ul className="dj-showcase clearfix">
            {this.state.section.map(({ name, image, id, song }) => (
              <ArtistItem key={id} name={name} image={image} song={song} />
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Artist;
