import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">KOMOREBI</div>
      <div className="nav__container">
        <ul className="nav__list">
          <li className="nav__item">Contacts</li>
          <li className="nav__item">9104739010</li>
          <li className="nav__item">Reservation</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
