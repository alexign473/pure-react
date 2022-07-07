import React from 'react';

export const Nav = ({ activeTab, onTabChange, cart }) => {
  const itemClass = (tabName) =>
    `App-nav-item ${activeTab === tabName ? 'selected' : ''}`;

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <nav className='App-nav'>
      <ul>
        <li className={itemClass('items')}>
          <button onClick={() => onTabChange('items')}>Items</button>
        </li>
        <li className={itemClass('cart')}>
          <button onClick={() => onTabChange('cart')}>Cart</button>
        </li>
      </ul>

      <button onClick={() => onTabChange('cart')}>
        <div className='App-nav-total'>
          <i className='fa fa-shopping-cart' />{' '}
          <span>
            {cart.length} {cart.length === 1 ? 'item' : 'items'}
          </span>{' '}
          {cart.length > 0 && <span>(${total.toFixed(2)})</span>}
        </div>
      </button>
    </nav>
  );
};
