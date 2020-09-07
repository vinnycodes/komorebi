import React from 'react';
import './Menu.scss';
import { menuPics } from './MenuItemPics';
// { name: , price: , amount:, pic: 'pic' }

const menuItems = {
  appetizers: {
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
  soupsSalads: {
    1: { name: 'Miso Soup', price: 3, amount: 'Cup/Bowl', pic: 'pic' },
    2: { name: 'Wonton Soup', price: 4, amount: 'Cup/Bowl', pic: 'pic' },
    3: { name: 'Mini Pho Soup', price: 5, amount: 'Cup/Bowl', pic: 'pic' },
    4: { name: 'Mini Ramen Soup', price: 5, amount: 'Cup/Bowl', pic: 'pic' },
    5: { name: 'House Salad', price: 3, amount: 'Cup/Bowl', pic: 'pic' },
    6: { name: 'Seaweed Salad', price: 4, amount: 'Cup/Bowl', pic: 'pic' },
  },
  sushi: {},
  specialtyRolls: {
    1: { name: 'Alaskan', price: 14.95, amount: '8 Pieces', pic: 'pic' },
    2: { name: 'Bagel', price: 15.95, amount: '8 Pieces', pic: 'pic' },
    3: { name: 'Crazy', price: 13.95, amount: '8 Pieces', pic: 'pic' },
    4: { name: 'Crunchy', price: 13.95, amount: '8 Pieces', pic: 'pic' },
    5: { name: 'Dynamite', price: 13.95, amount: '8 Pieces', pic: 'pic' },
    6: { name: 'Kiss Bye', price: 9.95, amount: '8 Pieces', pic: 'pic' },
    7: { name: 'Lobster', price: 14.95, amount: '8 Pieces', pic: 'pic' },
    8: { name: 'Philadelphia', price: 11.95, amount: '8 Pieces', pic: 'pic' },
    9: { name: 'Rainbow', price: 15.95, amount: '8 Pieces', pic: 'pic' },
    10: { name: 'Rock n Roll', price: 16.95, amount: '8 Pieces', pic: 'pic' },
    11: {
      name: 'Shrimp Tempura',
      price: 11.95,
      amount: '8 Pieces',
      pic: 'pic',
    },
    12: { name: 'White River', price: 15.95, amount: '8 Pieces', pic: 'pic' },
    13: { name: 'Wild Crab', price: 17.95, amount: '8 Pieces', pic: 'pic' },
    14: { name: 'Yellow Tail', price: 15.95, amount: '8 Pieces', pic: 'pic' },
  },
  riceNoodles: {
    1: { name: 'House Fried Rice', price: 7, amount: 'Entree', pic: 'pic' },
    2: { name: 'House Lo Mein', price: 6.5, amount: 'Entree', pic: 'pic' },
    3: { name: 'Pad Thai', price: 8.25, amount: 'Entree', pic: 'pic' },
    4: { name: 'Pad See Eew', price: 8, amount: 'Entree', pic: 'pic' },
  },
  drinks: {},
  dessert: {},
};

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__container">
        <ul>
          <h1>Menu</h1>
          <li>Appetizers</li>
          <li>Soup & Salads</li>
          <li>Sushi</li>
          <li>Specialty Rolls</li>
          <li>Rice & Noodles</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
