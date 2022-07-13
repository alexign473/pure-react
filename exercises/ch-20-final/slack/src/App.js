import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import { Sidebar } from './Sidebar';
import { MessagesList } from './MessagesList';

const App = () => {
  const scrollTo = useRef();
  const [activeTab, setActiveTab] = useState('general');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages((messages) => [...messages, { author: 'Me', text: input }]);
    setInput('');
  };

  useEffect(() => {
    scrollTo.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    setError('');
    fetch(`channels/${activeTab}.json`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error('Could not fetch messages.');
      })
      // .then((json) => console.log(json));
      .then((json) => setMessages(json.messages || []))
      .catch((err) => setError(err.message));
  }, [activeTab, setMessages]);

  return (
    <div className='app'>
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className='main'>
        {error ? (
          error
        ) : (
          <MessagesList messages={messages} scrollTo={scrollTo} />
        )}
        <form className='user-input' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Type your message...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </main>
    </div>
  );
};

export default App;
