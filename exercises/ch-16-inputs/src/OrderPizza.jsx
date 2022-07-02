import React from 'react';
import { useState } from 'react';

export const OrderPizza = () => {
  const [size, setSize] = useState('');
  const [topping, setTopping] = useState('');
  const [glutenFree, setGlutenFree] = useState(false);
  const [instructions, setInstructions] = useState('');
  const [order, setOrder] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({ size, topping, glutenFree, instructions });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Order Your Pizza</h2>
      <h4>Size</h4>
      <label>
        <input
          type='radio'
          value='small'
          checked={size === 'small'}
          onChange={(e) => setSize(e.target.value)}
        />
        Small
      </label>{' '}
      <label>
        <input
          type='radio'
          value='medium'
          checked={size === 'medium'}
          onChange={(e) => setSize(e.target.value)}
        />
        Medium
      </label>{' '}
      <label>
        <input
          type='radio'
          value='large'
          checked={size === 'large'}
          onChange={(e) => setSize(e.target.value)}
        />
        Large
      </label>
      <br />
      <label>
        Topping
        <select
          name='topping'
          id='topping'
          value={topping}
          onChange={(e) => setTopping(e.target.value)}
        >
          <option value=''>- Pick a topping -</option>
          <option value='pepperoni'>Pepperoni</option>
          <option value='cheese'>Cheese</option>
        </select>
      </label>
      <br />
      <label>
        <input
          type='checkbox'
          checked={glutenFree}
          onChange={(e) => setGlutenFree(e.target.checked)}
        />
        Gluten free
      </label>
      <br />
      <label>
        Special instructions
        <br />
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </label>
      <br />
      <button type='submit'>Send order</button>
      <br />
      {order && `Your Order: ${JSON.stringify(order)}`}
    </form>
  );
};
