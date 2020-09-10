import React from 'react';
import './CookingLessonAd.scss';

const CookingLessonAd = () => {
  return (
    <div className="cookingAd">
      <h1 className="cookingAd__title">
        Cooking <br /> Lesson
      </h1>
      <p className="cookingAd__description">
        If you want to understand the essence of Italian cuisine, we invite you
        to professional master classes from one of the best Moscow chefs.
        <br />
        Here you will learn the basics of cooking, plunge into the culture of
        the country and learn how to cook exclusive dishes.
      </p>

      <div className="cookingAd__picture"></div>
    </div>
  );
};

export default CookingLessonAd;
