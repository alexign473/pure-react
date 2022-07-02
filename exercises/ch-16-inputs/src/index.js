import React from 'react';
import ReactDOM from 'react-dom/client';

import { Inputs, Inputs2 } from './Inputs';
import { OrderPizza } from './OrderPizza';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Inputs />
    <Inputs2 />
    <OrderPizza />
  </React.StrictMode>
);
