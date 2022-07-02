import React from 'react';
import ReactDOM from 'react-dom/client';

import { ShoppingList } from './ShoppingList';
import { Room } from './Room';
import { Keypad } from './Keypad';

const Demo = () => (
  <div>
    <ShoppingList />
    <Room />
    <Keypad />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Demo />);
