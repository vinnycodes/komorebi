import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav" id="top">
      <div className="nav__logo">KOMOREBI</div>
      <ul className="nav__list">
        <li className="nav__item">Contact</li>
        <li className="nav__item">9104739010</li>
        <li className="nav__item">
          <a href="#reservation">Reservation</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
