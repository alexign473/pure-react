import React, { useState } from 'react';
import './App.css';

import { Sidebar } from './Sidebar';
import { MessagesList } from './MessagesList';
import { MESSAGES } from './data';

const App = () => {
  const [activeChannel, setActive] = useState(null);

  return (
    <div className='app'>
      <Sidebar />
      <main className='main'>
        <MessagesList messages={MESSAGES} />
        <form className='user-input'>
          <input type='text' placeholder='Type your message...' />
        </form>
      </main>
    </div>
  );
};

export default App;
