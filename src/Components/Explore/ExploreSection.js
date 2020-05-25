import React, { Fragment } from "react";
import ExploreItem from "./ExploreItem";
import Coachella from "./explore-img/coachella-test.png";
import Countdown from "./explore-img/countdown.png";
import Edc from "./explore-img/edc.png";
import Tomorrowland from "./explore-img/tomorrowland.png";

import "./Explore.css";

class ExploreSection extends React.Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          name: "Coachella",
          description:
            "The Coachella Valley Music and Arts Festival (commonly called Coachella or the Coachella Festival) is an annual music and artsfestival held at the Empire Polo Club in Indio, California, in the Coachella Valley in the Colorado Desert.",
          image: Coachella,
          id: 1,
        },
        {
          name: "EDC",
          description:
            "Electric Daisy Carnival (EDC) is a globally renowned dance music festival and the largest brand in Insomniac's scope of events and productions. ... EDC is an unique multi-day festival pushing the boundaries of imagination, and setting standards in the live entertainment industry.",
          image: Edc,
          id: 2,
        },
        {
          name: "Tomorrowland",
          description:
            "With well over eight million people tuning in, Tomorrowland quickly and easily becomes the most-watched music festival on the planet. Its official after movie adds another one hundred million views (and still counting) to that claim.",
          image: Tomorrowland,
          id: 3,
        },
        {
          name: "Countdown",
          description:
            "Known across the galaxy as the most poppin’ intergalactic party of the year, Countdown is blasting off into 2020 with the largest New Year’s Eve party on the West Coast. This year, we’re entering another dimension with an all-new alien theme, four reimagined extraterrestrial stages, and some hidden surprises you won’t want to miss.",
          image: Countdown,
          id: 4,
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <div className="top section-features">
          <div className="header">
            <h2>EDM &mdash; The Music of Festivals.</h2>
            <p className="long-copy">
              Subsequently, in the new millennium, the popularity of EDM happens
              to be a genre that demands live attention. Where is a more perfect
              place to listen and dance than at a festival?
            </p>
          </div>
          <div className="row">
            {this.state.section.map(({ name, description, image, id }) => (
              <ExploreItem
                key={id}
                name={name}
                description={description}
                image={image}
              />
            ))}
            <h1>And Many more...</h1>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ExploreSection;
