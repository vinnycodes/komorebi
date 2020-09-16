import React, { useState, useEffect } from 'react';
import './Reservation.scss';
import { ReactComponent as VerifiedSubmission } from '../../media/icons/verified.svg';

const Reservation = () => {
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(0);
  const [name, setName] = useState('');
  const [specialWishes, setSpecialWishes] = useState('');
  const [submit, setSubmit] = useState(false);

  // Control Amount of People for Reservation
  useEffect(() => {
    // No lower than 0 people
    if (people < 0) {
      return setPeople(0);
    }
    // No higher than 21 people
    if (people > 21) {
      return setPeople(21);
    }
  }, [people]);

  const reservationForm = () => {
    if (submit) {
      return (
        <div className="reservation__formContainer">
          <div className="reservation__verifiedSubmission">
            <VerifiedSubmission />
            <br />
            <h1>See You Soon</h1>
            <br />
            <p>Please contact us directly for any pertinent questions</p>
            <p>9104739010</p>
            <p>info@komorebi.com</p>
            <br />
            <h3>Wednesday - Sunday: 12pm - 12am </h3>
            <br />
            <h3>Wilmington, NC 4724 New Centre Dr</h3>
          </div>
        </div>
      );
    }
    return (
      <div className="reservation__formContainer">
        <form action="" className="reservation__form">
          <input
            type="date"
            min="2020-010-15"
            max="2021-2-20"
            required
            name="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input type="time" name="time" placeholder="Time" required />
          <input
            type="number"
            name="quantity"
            placeholder={'How many people?'}
            min="12:00"
            max="24:00"
            required
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
          <input
            type="text"
            name="wishes"
            placeholder="Special Wishes"
            required
            value={specialWishes}
            onChange={(e) => setSpecialWishes(e.target.value)}
          />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            required
            pattern="[0-9]{10}"
          />
          <input
            type="submit"
            value="Reservation"
            onClick={(e) => handelSubmit(e)}
          />
        </form>
        <div className="reservation__hours">
          <h4>Wednesday - Sunday: 12pm - 12am </h4>
          <h4>Wilmington, NC 4724 New Centre Dr</h4>
        </div>
      </div>
    );
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (date && people && name && specialWishes) {
      setSubmit(true);
    }
  };

  return (
    <div className="reservation" id="reservation">
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

        {reservationForm()}
      </div>
    </div>
  );
};

export default Reservation;
