import React, { useState, useEffect } from 'react';
import './Menu.scss';
import { menuPics } from './MenuItemPics';
import { ReactComponent as LeftArrow } from '../../media/icons/leftArrow.svg';
import { ReactComponent as RightArrow } from '../../media/icons/rightArrow.svg';

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
    1: { name: 'Miso Soup', price: 3, amount: 'Cup/Bowl', pic: menuPics.miso },
    2: {
      name: 'Wonton Soup',
      price: 4,
      amount: 'Cup/Bowl',
      pic: menuPics.wonton,
    },
    3: {
      name: 'Mini Pho Soup',
      price: 5,
      amount: 'Cup/Bowl',
      pic: menuPics.pho,
    },
    4: {
      name: 'Mini Ramen Soup',
      price: 5,
      amount: 'Cup/Bowl',
      pic: menuPics.ramen,
    },
    5: {
      name: 'House Salad',
      price: 3,
      amount: 'Cup/Bowl',
      pic: menuPics.houseSalad,
    },
    6: {
      name: 'Seaweed Salad',
      price: 4,
      amount: 'Cup/Bowl',
      pic: menuPics.seaweedSalad,
    },
  },
  Sushi: {
    1: {
      name: 'AAC Roll',
      price: 5,
      amount: '6 Pieces',
      pic: menuPics.sushi_3,
    },
    2: {
      name: 'C Roll',
      price: 5.5,
      amount: '6 Pieces',
      pic: menuPics.sushi_4,
    },
    3: {
      name: 'California',
      price: 5.25,
      amount: '6 Pieces',
      pic: menuPics.sushi_1,
    },
    4: {
      name: 'Crunch Crab',
      price: 5.5,
      amount: '6 Pieces',
      pic: menuPics.sushi_6,
    },
    5: {
      name: 'Eel Avocado Roll',
      price: 5.5,
      amount: '5 Pieces',
      pic: menuPics.sushi_8,
    },
    6: {
      name: 'Spicy Salmon',
      price: 5.95,
      amount: '6 Pieces',
      pic: menuPics.sushi_3,
    },
    7: {
      name: 'Spicy Tuna',
      price: 5.95,
      amount: '6 Pieces',
      pic: menuPics.sushi_2,
    },
    8: {
      name: 'Japan Roll',
      price: 7.25,
      amount: '4 Pieces',
      pic: menuPics.sushi_7,
    },
    9: {
      name: 'Moon Roll',
      price: 6.25,
      amount: '6 Pieces',
      pic: menuPics.sushi_5,
    },
    10: {
      name: 'Pearl Roll',
      price: 5.5,
      amount: '6 Pieces',
      pic: menuPics.sushi_9,
    },
    11: {
      name: 'Oshinko Roll',
      price: 4,
      amount: '6 Pieces',
      pic: menuPics.sushi_11,
    },
  },
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
    4: { name: 'Pad See Ew', price: 8, amount: 'Entree', pic: 'pic' },
  },
};

const menuPagination = (obj) => {
  let paginatedMenu = [];

  for (let item of Object.entries(obj)) {
    const last = paginatedMenu[paginatedMenu.length - 1];

    if (!last || last.length === 4) {
      paginatedMenu.push([item[1]]);
    } else {
      last.push(item[1]);
    }
  }

  return paginatedMenu;
};

const Menu = () => {
  const [menu, setMenu] = useState('Appetizers');
  const [menuChoices, setMenuChoices] = useState(
    menuPagination(foodMenu[menu])
  );
  const [page, setPage] = useState(0);
  const [menuAnimation, setMenuAnimation] = useState('fadeIn 1s ease-in-out');

  useEffect(() => {
    // Create Arrays for Pagination and set to Menu Choices State
    setMenuChoices(menuPagination(foodMenu[menu]));

    // Reset Page for Pagination to 0
    setPage(0);

    //Set Menu Animation to Fade In
    setMenuAnimation('fadeIn 1s ease-in-out');
  }, [menu]);

  // Set Limits to Pagination. 0 at lowest and menuChoices length at highest
  // Creating a menu carousel effect controlled by arrows at the bottom
  useEffect(() => {
    if (page < 0) {
      return setPage(menuChoices.length - 1);
    }

    if (page >= menuChoices.length) {
      return setPage(0);
    }
  }, [page]);

  const MenuItems = (props) => {
    const itemStyle = () => {
      if (props.item === menu) {
        return 'menu__listItem menu__listItem--selected';
      }

      return 'menu__listItem';
    };

    return (
      <li className={itemStyle()} onClick={() => setMenu(props.item)}>
        {props.item}
      </li>
    );
  };

  const currentMenu = () => {
    if (!menuChoices[page]) {
      return <div>No Items Currently </div>;
    }
    return menuChoices[page].map((item) => {
      if (!item) {
        return <div>No Items Currently </div>;
      }

      return (
        <div
          className="menu__item"
          key={item.name}
          style={{ animation: menuAnimation }}
        >
          <div className="menu__itemDescription">
            <h3>{item.name}</h3>
            <h5>{item.amount}</h5>
            <h4>{item.price.toFixed(2)}</h4>
          </div>

          <div className="menu__picContainer">
            <img className="menu__picture" src={item.pic} alt={item.name} />
          </div>
        </div>
      );
    });
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

        <div className="menu__gallery">{currentMenu()}</div>

        <div className="menu__arrows">
          <LeftArrow
            className="menu__arrow"
            onClick={() => {
              setPage(page - 1);
              setMenuAnimation('moveInLeft 1s ease-in-out');
            }}
          />
          <RightArrow
            className="menu__arrow"
            onClick={() => {
              setPage(page + 1);
              setMenuAnimation('moveInRight 1s ease-in-out');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
