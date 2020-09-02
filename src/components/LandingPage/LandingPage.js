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

        <h4>Menu</h4>
      </div>

      <div className="landingPage__social">
        <ul className="landingPage__socialList">
          <li className="landingPage__socialItems">Instagram</li>
          <li className="landingPage__socialItems">Facebook</li>
          <li className="landingPage__socialItems">Youtube</li>
          <li className="landingPage__socialItems">Pinterest</li>
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
