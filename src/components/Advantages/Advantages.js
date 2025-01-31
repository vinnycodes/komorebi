import React from 'react';
import './Advantages.scss';
import PlatingPic from '../../media/imgs/plating.jpg';
import ChefPic from '../../media/imgs/sushi-chef.jpg';
import TablePic from '../../media/imgs/restaurantOne.jpg';
import GrayArrow from '../../media/icons/gray_arrow.svg';

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="advantages__wordBlock advantages__wordBlock--one">
        <p>
          Varied Japanese cuisine{' '}
          <img
            src={GrayArrow}
            alt=""
            className="advantages__grayArrow advantages__grayArrow--one"
          />
          <br /> Competitive prices
        </p>

        <p>
          Regular workshops from the chef
          <img
            src={GrayArrow}
            alt=""
            className="advantages__grayArrow advantages__grayArrow--two"
          />
        </p>
      </div>

      <div className="advantages__imgBlock advantages__imgBlock--one">
        <img src={ChefPic} alt="" />
      </div>
      <div className="advantages__imgBlock advantages__imgBlock--two">
        <img src={PlatingPic} alt="" />
      </div>
      <div className="advantages__imgBlock advantages__imgBlock--three">
        <img src={TablePic} alt="" />
      </div>

      <div className="advantages__wordBlock advantages__wordBlock--two">
        <h1>Komorebi</h1>
      </div>

      <div className="advantages__wordBlock advantages__wordBlock--three">
        <p>Unique atmosphere and style</p>
        <p>
          Event capability <br />
          <img
            src={GrayArrow}
            alt=""
            className="advantages__grayArrow advantages__grayArrow--three"
          />
        </p>
      </div>
    </div>
  );
};

export default Advantages;
