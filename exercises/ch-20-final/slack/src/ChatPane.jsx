import React from 'react';

import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';

export const ChatPane = ({ messages, onSendMessage }) => {
  return (
    <div className='chat'>
      {messages.length > 0 ? (
        <MessageList messages={messages} />
      ) : (
        <div className='chat-empty'>Empty messages</div>
      )}
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};
