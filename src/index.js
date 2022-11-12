import React from 'react';
import { createRoot } from 'react-dom';

import { Toolbar } from '@mui/material';

import Topbar from './Topbar';
import AddM from './AddM';
import MList from './MList';

import { useState } from 'react';

import bakeryData from './bakery-data.json';
import BakeryItem from './BakeryItem';

bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + '/' + item.image;
});

const App = () => {
  const [m, setM] = React.useState([]);
  const [currentM, setCurrentM] = React.useState({ text: '', key: '' });

  const [cart, setCart] = useState([]);

  const addM = (txt) => {
    event.preventDefault();

    if (m.indexOf(currentM) !== -1) return;

    setM([
      ...m,
      {
        text: txt,
        key: Date.now(),
      },
    ]);
  };

  const removeM = (key) => {
    setM(m.filter((m) => key != m.key));
  };

  return (
    <div>
      <Topbar />
      <Toolbar />
      <AddM addM={addM} />
      <MList m={m} remove={removeM} />

      <div id="left">
        <h1>My Bakery</h1>

        <div id="items">
          {bakeryData.map(
            (
              item,
              index // TODO: map bakeryData to BakeryItem components
            ) => (
              <BakeryItem
                addToCart={() => {
                  setCart([...cart, item.name]);
                }}
                addM={addM}
                key={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                index={index}
              ></BakeryItem>
            )
          )}
        </div>

        <div id="right">
          <h2>Cart</h2>
          {/* TODO: render a list of items in the cart */}
          <p>Cart Items:{cart}</p>
        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
