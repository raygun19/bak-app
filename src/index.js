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
  const [total, setTotal] = React.useState(0);

  const addM = (txt, price) => {
    event.preventDefault();

    let number = 1;

    if (m.some((item) => item.text === txt)) {
      let mm = [...m];
      const a = mm.find((a) => a.text === txt);
      a.num = a.num + 1;
      setM(mm);
    } else {
      //if (m.indexOf(currentM) !== -1) return; //check if already exist

      setM([
        ...m,
        {
          num: number,
          text: txt,
          key: Date.now(),
        },
      ]);
    }

    let t = Math.round((total + price) * 100) / 100;
    setTotal(t);
  };

  const removeM = (key) => {
    // setM(m.filter((m) => key != m.key));
  };

  return (
    <div>
      <div id="right">
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <MList m={m} remove={removeM} />
        <p>Price: {total}</p>
      </div>

      <div id="left">
        <h1>My Bakery</h1>

        <div id="items">
          {bakeryData.map(
            (
              item,
              index // TODO: map bakeryData to BakeryItem components
            ) => (
              <BakeryItem
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
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
