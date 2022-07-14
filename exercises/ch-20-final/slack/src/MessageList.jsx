import React, { useEffect, useRef } from 'react';

import { Message } from './Message';

export const MessageList = ({ messages }) => {
  const scrollTo = useRef();
  useEffect(() => {
    scrollTo.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='message-list'>
      <ul>
        {messages?.map((message) => (
          <li key={message.id}>
            <Message message={message} />
          </li>
        ))}
      </ul>
      <div ref={scrollTo}></div>
    </div>
  );
};
