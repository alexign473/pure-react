import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';
import { Sidebar } from './Sidebar';
import { ChatPane } from './ChatPane';

import { channels, people, createFakeActivity } from './static-data';

const App = () => {
  const [selectedChannelId, setSelectedChannelId] = useState(null);
  const [messagesByChannelId, setMessagesByChannelId] = useState(
    createFakeActivity([...channels, ...people], 30)
  );
  const messages = selectedChannelId
    ? messagesByChannelId[selectedChannelId]
    : [];

  const handleChannelSelected = (channelId) => {
    setSelectedChannelId(channelId);
  };

  const handleSentMessage = (text) => {
    if (!selectedChannelId) return;

    setMessagesByChannelId((messagesByChannelId) => ({
      ...messagesByChannelId,
      [selectedChannelId]: [
        ...messagesByChannelId[selectedChannelId],
        { id: nanoid(), userName: 'Me', text, timestamp: new Date() },
      ],
    }));
  };

  return (
    <div className='app'>
      <Sidebar
        channels={channels}
        people={people}
        selectedChannelId={selectedChannelId}
        onChannelSelected={handleChannelSelected}
      />
      <main className='main-layout'>
        {selectedChannelId ? (
          <ChatPane messages={messages} onSendMessage={handleSentMessage} />
        ) : (
          <div className='chat chat-empty'>Select channel</div>
        )}
      </main>
    </div>
  );
};

export default App;
