import React from 'react';
import './HomePage.scss';
import LandingPage from '../LandingPage/LandingPage';
import Reservation from '../Reservation/Reservation';
import Advantages from '../Advantages/Advantages';
import Menu from '../Menu/Menu';
import CookingLessonAd from '../CookingLessonAd/CookingLessonAd';

const HomePage = () => {
  return (
    <div className="homePage">
      <LandingPage />
      <Reservation />
      <Advantages />
      <Menu />
      <CookingLessonAd />
    </div>
  );
};

export default HomePage;
