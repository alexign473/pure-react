import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Ex1 } from './Ex1';
import { Ex2 } from './Ex2';
import { App } from './App';

const Demo = () => (
  <div>
    <Ex1 />
    <Ex2 />
    <App />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Demo />);
