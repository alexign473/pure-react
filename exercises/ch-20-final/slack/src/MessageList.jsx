import React from 'react';

import { Message } from './Message';

export const MessageList = ({ messages, scrollTo }) => {
  return (
    <div className='message-list'>
      <ul>
        {messages?.map((message, i) => (
          <li key={i}>
            <Message message={message} />
          </li>
        ))}
      </ul>
      <div ref={scrollTo}></div>
    </div>
  );
};
