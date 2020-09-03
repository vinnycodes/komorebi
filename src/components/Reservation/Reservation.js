import React from 'react';
import './Reservation.scss';

const Reservation = () => {
  return (
    <div className="reservation">
      <div className="reservation__container">
        <div className="reservation__words">
          <h1>Reserve</h1>
          <h1>a table</h1>

          <p>
            Want to try delicious Japanese cuisine
            <br />
            from profesional chefs?
          </p>

          <p>
            Then the Komorebi restaurant is what you need!
            <br />
            We offer real culinary masterpieces
            <br />
            according to authentic Japanese recipes.
          </p>

          <p>Reserve a table and spend time with pleasure!</p>
        </div>
        <div className="reservation__formContainer">
          <form action="" className="reservation__form">
            <input type="text" name="date" placeholder="Date" />
            <input type="text" name="time" placeholder="Time" />
            <input
              type="number"
              name="quantity"
              placeholder="How many people"
            />
            <input type="text" name="wishes" placeholder="Special Wishes" />
            <input type="text" name="name" placeholder="Your name" />
            <input type="tel" name="phone" placeholder="Your Phone" />
            <input type="submit" value="Reservation" />
          </form>
          <div className="reservation__hours">
            <h4>Tuesday - Sunday: 12pm - 10pm </h4>
            <h4>Wilmington, NC 4724 New Centre Dr</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
