import React from 'react';
import './CookingLessonAd.scss';
import CookingLessonImg from '../../media/imgs/cookingLesson.jpg';

const CookingLessonAd = () => {
  return (
    <div className="cookingAd" id="cookingAd">
      <h1 className="cookingAd__title">
        Cooking <br /> lesson
      </h1>
      <p className="cookingAd__description">
        If you want to understand the essence of Japanese cuisine, we invite you
        to professional master classes from one of the best authentic chefs.
        <br />
        <br />
        Here you will learn the basics of cooking, plunge into the culture of
        the country and learn how to cook exclusive dishes.
      </p>

      <div className="cookingAd__picture">
        <div className="cookingAd__img"></div>
        {/* <img src={CookingLessonImg} alt="chef making sushi" /> */}
      </div>
    </div>
  );
};

export default CookingLessonAd;
