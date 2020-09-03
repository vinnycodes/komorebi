import React from 'react';
import './HomePage.scss';
import LandingPage from '../LandingPage/LandingPage';
import Reservation from '../Reservation/Reservation';
import Advantages from '../Advantages/Advantages';

const HomePage = () => {
  return (
    <div className="homePage">
      <LandingPage />
      <Reservation />
      <Advantages />
    </div>
  );
};

export default HomePage;
