import React from 'react';
import PropTypes from 'prop-types';
import './CartPage.css';
import { Item } from './Item';

const EmptyCart = () => (
  <div className='CartPage-empty'>
    Your cart is empty.
    <br />
    Why not add some products to it?
  </div>
);

export const CartPage = ({ items, onAddOne, onRemoveOne }) => {
  if (items.length === 0) return <EmptyCart />;

  return (
    <ul className='CartPage-items'>
      {items.map((item) => (
        <li key={item.id} className='CartPage-item'>
          <Item item={item}>
            <div className='CartItem-controls'>
              <button
                className='CartItem-removeOne'
                onClick={() => onRemoveOne(item)}
              >
                &ndash;
              </button>
              <span className='CartItem-count'>{item.count}</span>
              <button
                className='CartItem-addOne'
                onClick={() => onAddOne(item)}
              >
                +
              </button>
            </div>
          </Item>
        </li>
      ))}
      <li>
        Total: $
        {items.reduce((total, item) => total + item.price * item.count, 0)}
      </li>
    </ul>
  );
};
CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
};
