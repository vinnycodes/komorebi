import React from 'react';
import './LandingPage.scss';
import sushiMainOne from '../../media/imgs/sushiPlating.jpg';
import sushiMainTwo from '../../media/imgs/sushiMainTwo-two.jpg';
import Nav from '../Nav/Nav.js';

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Nav />

      <div className="landingPage__imageOne">
        <img
          src={sushiMainOne}
          alt=""
          className="landingPage__imageOne--picture"
        />
      </div>
      <div className="landingPage__imageTwo">
        <img
          src={sushiMainTwo}
          alt=""
          className="landingPage__imageTwo--picture"
        />
      </div>

      <div className="landingPage__center">
        <h1>Komorebi</h1>
        <h3>Authentic Japanese</h3>

        <h4>
          <a href="#menu">Menu</a>
        </h4>
      </div>

      <div className="landingPage__social">
        <ul className="landingPage__socialList">
          <li className="landingPage__socialItems">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="landingPage__socialItems">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li className="landingPage__socialItems">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </li>
          <li className="landingPage__socialItems">
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pinterest
            </a>
          </li>
        </ul>
        <ul className="landingPage__socialList landingPage__socialList--secondary">
          <li className="landingPage__socialItems">
            Wilmington, NC 4724 New Centre Dr
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
