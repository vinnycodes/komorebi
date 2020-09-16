import React from 'react';
import './ReserveAd.scss';
import Chef from '../../media/imgs/chefTwo.jpg';

const ReserveAd = () => {
  return (
    <div className="reserveAd">
      <div className="reserveAd__reserve">
        <div className="reserveAd__title">
          Reserve a table
          <br />
          on the site now
          <br />
          <button>
            <a href="#reservation">Reservation</a>
          </button>
        </div>
        <h1>910 473 9010</h1>
      </div>
      <div className="reserveAd__img">
        <img src={Chef} alt="restaurant plating" />
      </div>

      <h4 className="reserveAd__days">Wednesday - Sunday: Noon - Midnight </h4>
      <h4 className="reserveAd__address">Wilmington, NC 4724 New Centre Dr</h4>
    </div>
  );
};

export default ReserveAd;
