import React, { useState } from 'react';

import './App.css';
import { Nav } from './Nav';
import { ItemPage } from './ItemPage';
import { CartPage } from './CartPage';
import { items } from './data';

/* Функция принимает массив cart, предметов, которые могут дублироваться.
Используется reduce, чтобы сгруппировать предметы по ID,
и добавить им счетчик count.
Результат reduce объект, который извлекается в массив через Object.values
*/

const groupCart = (cart) => {
  const groupedItems = cart.reduce((sum, item) => {
    sum[item.id] = sum[item.id] || { ...item, count: 0 };
    sum[item.id].count++;

    return sum;
  }, {});

  return Object.values(groupedItems);
};

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (item) => {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index < 0) return;

    setCart((cart) => {
      const copy = [...cart];
      copy.splice(index, 1);
      return copy;
    });
  };

  return (
    <div className='App'>
      <Nav activeTab={activeTab} onTabChange={setActiveTab} cart={cart} />
      <main className='App-content'>
        <Content
          tab={activeTab}
          onAddToCart={addToCart}
          onRemoveItem={removeItem}
          cart={groupCart(cart)}
        />
      </main>
    </div>
  );
};

const Content = ({ tab, onAddToCart, onRemoveItem, cart, total }) => {
  switch (tab) {
    default:
    case 'items':
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    case 'cart':
      return (
        <CartPage
          items={cart}
          onAddOne={onAddToCart}
          onRemoveOne={onRemoveItem}
        />
      );
  }
};

export default App;
