import React from 'react';

export const Message = ({ message }) => {
  return (
    <div className='message'>
      <div className='message-avatar' />
      <div className='message-content'>
        <div>
          <span className='message-author'>{message.author}</span>{' '}
          <span className='message-time'>WED JUL 27 2022</span>
        </div>
        <div className='message-text'>{message.text}</div>
      </div>
    </div>
  );
};
