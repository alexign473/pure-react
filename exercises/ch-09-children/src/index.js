import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { ErrorBox } from './ErrorBox';
import { Ex2 } from './Ex2';
import { Modal } from './Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBox>The world is ending</ErrorBox>
    <Ex2 />
    <Modal />
  </React.StrictMode>
);
