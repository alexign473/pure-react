import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Envelope } from './Envelope';
import { CreditCard } from './CreditCard';
import { Poster } from './Poster';
import { EmailLine } from './EmailLine';

const envelope = {
  stamp:
    '3/3a/Pahonia_red_%2825_Groschen%29%2C_Stamp_of_Belarusian_People%27s_Republic',
  // stamp: '2/24/Coat_of_arms_of_Belarus_%281991–1995%29',
  sender: {
    name: 'Mr. Sender',
    address: '123 Fake St',
    city: 'Boston',
    index: 'MA 02118',
  },
  receiver: {
    name: 'Mr. Receiver',
    address: 'ul. Pushkina, KL',
    city: 'Minsk',
    index: 'BL 77777',
  },
};

const card = {
  bankName: 'Big Bank, Inc.',
  cardNumber: '1234567887654321',
  expDate: '08/09',
  cardholderName: 'Cardholder name',
};

const poster = {
  imageUrl:
    'https://www.nicepng.com/png/full/31-315310_react-hexagon-react-js-transparent-background.png',
  title: 'React',
  text: 'The best thing since jQuery, probably',
};

const email = {
  sender: 'React Newsletter',
  subject: 'React Newsletter - Issue 36',
  timestamp: '2022-03-30 21:24:37',
  // timestamp: '2018-04-04T16:00:00.000Z',
  message: 'Read this issue on the web',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Envelope envelope={envelope} />
    <CreditCard card={card} />
    <Poster poster={poster} />
    <EmailLine email={email} />
  </React.StrictMode>
);
