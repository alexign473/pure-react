import React from 'react';

import { Message } from './Message';

export const MessagesList = ({ messages }) => {
  return (
    <div className='messages'>
      <ul>
        {messages.map((message, i) => (
          <li key={i}>
            <Message message={message} />
          </li>
        ))}
      </ul>
    </div>
  );
};
