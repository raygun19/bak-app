// // TODO: create a component that displays a single bakery item

import React, { Component } from 'react';

// export class BakeryItem extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//     };
//   }

//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <img src={this.props.image} alt="bakery item" />
//         <p>{this.props.name}</p>
//         <p>{this.props.description}</p>
//         <p>{this.props.price}</p>
//         <button onClick={props.handleInput}>Add to Cart</button>
//         <button onClick={this.props.addToCart}>Add to Cart 2222</button>
//         <p>{this.state.counter}</p>
//       </div>
//     );
//   }
// }

// export default BakeryItem;

import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { FormControl, TextField, Button } from '@mui/material';

const BakeryItem = (props) => {
  return (
    <div>
      <img src={props.image} alt="bakery item" />
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>

      <button
        onClick={(e) => {
          props.addM(props.name, props.price);
          e.preventDefault();
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BakeryItem;
