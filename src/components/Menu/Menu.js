import React, { useState, useEffect } from 'react';
import './Menu.scss';
import { menuPics } from './MenuItemPics';

const foodMenu = {
  Appetizers: {
    1: {
      name: 'Crab Rangoon',
      price: 3.5,
      amount: '6 Pieces',
      pic: menuPics.crabRangoon,
    },
    2: { name: 'Edamame', price: 4, amount: 'Bowl', pic: menuPics.edamame },
    3: {
      name: 'Fried Calamari',
      price: 5.5,
      amount: 'Small Plate',
      pic: menuPics.calamari,
    },
    4: {
      name: 'Pork Gyoza',
      price: 5,
      amount: '4 Pieces',
      pic: menuPics.gyoza,
    },
    5: {
      name: 'Spring Roll',
      price: 3,
      amount: '2 Pieces',
      pic: menuPics.tempura,
    },
    6: {
      name: 'Shrimp/Vegetable Tempura',
      price: 7,
      amount: '8 Pieces',
      pic: menuPics.springRoll,
    },
  },
  'Soup & Salads': {
    1: { name: 'Miso Soup', price: 3, amount: 'Cup/Bowl', pic: 'pic' },
    2: { name: 'Wonton Soup', price: 4, amount: 'Cup/Bowl', pic: 'pic' },
    3: { name: 'Mini Pho Soup', price: 5, amount: 'Cup/Bowl', pic: 'pic' },
    4: { name: 'Mini Ramen Soup', price: 5, amount: 'Cup/Bowl', pic: 'pic' },
    5: { name: 'House Salad', price: 3, amount: 'Cup/Bowl', pic: 'pic' },
    6: { name: 'Seaweed Salad', price: 4, amount: 'Cup/Bowl', pic: 'pic' },
  },
  Sushi: {},
  'Specialty Rolls': {
    1: {
      name: 'Alaskan',
      price: 14.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_1,
    },
    2: {
      name: 'Bagel',
      price: 15.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_2,
    },
    3: {
      name: 'Crazy',
      price: 13.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_3,
    },
    4: {
      name: 'Crunchy',
      price: 13.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_4,
    },
    5: {
      name: 'Dynamite',
      price: 13.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_5,
    },
    6: {
      name: 'Kiss Bye',
      price: 9.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_6,
    },
    7: {
      name: 'Lobster',
      price: 14.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_7,
    },
    8: {
      name: 'Philadelphia',
      price: 11.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_8,
    },
    9: {
      name: 'Rainbow',
      price: 15.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_9,
    },
    10: {
      name: 'Rock n Roll',
      price: 16.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_10,
    },
    11: {
      name: 'Shrimp Tempura',
      price: 11.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_11,
    },
    12: {
      name: 'White River',
      price: 15.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_12,
    },
    13: {
      name: 'Wild Crab',
      price: 17.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_13,
    },
    14: {
      name: 'Yellow Tail',
      price: 15.95,
      amount: '8 Pieces',
      pic: menuPics.specialtyRoll_14,
    },
  },
  'Rice & Noodles': {
    1: { name: 'House Fried Rice', price: 7, amount: 'Entree', pic: 'pic' },
    2: { name: 'House Lo Mein', price: 6.5, amount: 'Entree', pic: 'pic' },
    3: { name: 'Pad Thai', price: 8.25, amount: 'Entree', pic: 'pic' },
    4: { name: 'Pad See Eew', price: 8, amount: 'Entree', pic: 'pic' },
  },
  Drinks: {},
  Dessert: {},
};

const Menu = () => {
  const [menu, setMenu] = useState('Appetizers');
  const [menuChoices, setMenuChoices] = useState(foodMenu[menu]);

  useEffect(() => {
    setMenuChoices(foodMenu[menu]);

    // console.log(foodMenu['Sushi'][1]);
    // console.log(menuPics);
  }, [menu]);

  const MenuItems = (props) => {
    return (
      <li className="menu__listItem" onClick={() => setMenu(props.item)}>
        {props.item}
      </li>
    );
  };

  return (
    <div className="menu" id="menu">
      <div className="menu__container">
        <ul className="menu__list">
          <h1 className="menu__title">Menu</h1>
          <MenuItems item="Appetizers" />
          <MenuItems item="Soup & Salads" />
          <MenuItems item="Sushi" />
          <MenuItems item="Specialty Rolls" />
          <MenuItems item="Rice & Noodles" />
        </ul>

        <div className="menu__gallery">
          {Object.keys(menuChoices).map((item, i) => {
            return (
              <div key={i}>
                <h3>{menuChoices[item].name}</h3>
                <h5>{menuChoices[item].amount}</h5>

                <h4>{menuChoices[item].price}</h4>
                <div className="menu__picContainer">
                  <img
                    className="menu__picture"
                    src={menuChoices[item].pic}
                    alt={menuChoices[item].name}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
