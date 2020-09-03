import React from 'react';
import './HomePage.scss';
import LandingPage from '../LandingPage/LandingPage';
import Reservation from '../Reservation/Reservation';

const HomePage = () => {
  return (
    <div className="homePage">
      <LandingPage />
      <Reservation />
    </div>
  );
};

export default HomePage;
