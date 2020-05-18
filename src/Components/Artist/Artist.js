import React from 'react';
import Marshmello from './img/1.jpg';
import Illenium from './img/2.jpg';
import Gryffin from './img/3.jpg';
import Chainsmokers from './img/4.jpg';
import Zedd from './img/5.jpg';
import SanHolo from './img/6.jpg';
import Alesso from './img/7.jpeg';
import Slander from './img/8.jpg';
import './img/background.jpg';
import './Artist.css';

const Artist = () => {
    return (
        <div className="dj-container">
        <h1>Some artist includes... </h1>
        <ul class='dj-showcase clearfix'>
                <li>
                    <figure class="dj-photo">
                        <img src={Marshmello} alt="marshmello"/>
                        <h4 class="centered">Marshmello</h4>
                    </figure>
                </li>
                <li>
                    <figure class="dj-photo">
                        <img src={Illenium} alt="illenium"/>
                        <h4 class="centered">illenium</h4>
                    </figure>
                </li>
                <li>
                    <figure class="dj-photo">
                        <img src={Gryffin} alt="gryffin"/>
                        <h4 class="centered">gryffin</h4>
                    </figure> 
                </li>
                <li>
                    <figure class="dj-photo">
                        <img src={Chainsmokers} alt="chainsmokers"/>
                        <h4 class="centered">chainsmokers</h4>
                    </figure>
                </li>
                <li>
                    <figure class="dj-photo">
                        <img src={Zedd} alt="zedd"/>
                        <h4 class="centered">zedd</h4>
                    </figure>
                </li>
                <li>
                    <figure class="dj-photo">
                        <img src={SanHolo} alt="sanholo"/>
                        <h4 class="centered">san holo</h4>
                    </figure>
                </li>
                <li>
                    <figure class="dj-photo">
                        <img src={Alesso} alt="alesso"/>
                        <h4 class="centered">Alesso</h4>
                    </figure> 
                </li>
                <li>
                    <figure class="dj-photo">
                        <img src={Slander} alt="slander"/>
                        <h4 class="centered">Slander</h4>
                    </figure>
                </li>
            </ul>
            <h2>And many more...</h2>
        </div>
    )
}

export default Artist;