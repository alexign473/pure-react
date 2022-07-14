import React, { useState, useEffect, useRef } from 'react';

export const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    onSendMessage(input);
    setInput('');
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className='chat-input' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Type your message...'
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};
