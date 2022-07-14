import React from 'react';
import dayjs from 'dayjs';

export const Message = ({ message }) => {
  return (
    <div className='message'>
      <div className='message-avatar' />
      <div className='message-content'>
        <div>
          <span className='message-author'>{message.userName}</span>{' '}
          <span className='message-time'>
            {dayjs(message.date).format('h:mm A ddd D-MMM-YYYY')}
          </span>
        </div>
        <div className='message-text'>{message.text}</div>
      </div>
    </div>
  );
};
