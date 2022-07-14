import React from 'react';

import { ChannelList } from './ChannelList';

const ChannelName = ({ channel, isSelected, onClick }) => {
  return (
    <div className={`sidebar-item ${isSelected ? 'selected' : ''}`}>
      <button onClick={onClick}># {channel.name}</button>
    </div>
  );
};
const PersonName = ({ channel, isSelected, onClick }) => {
  return (
    <div className={`sidebar-item ${isSelected ? 'selected' : ''}`}>
      <button onClick={onClick}>{channel.name}</button>
    </div>
  );
};

export const Sidebar = ({
  channels,
  people,
  selectedChannelId,
  onChannelSelected,
}) => {
  return (
    <div className='sidebar'>
      <ChannelList
        channels={channels}
        channelName={ChannelName}
        selectedId={selectedChannelId}
        onChannelSelected={onChannelSelected}
      >
        <h2>CHANNELS</h2>
      </ChannelList>
      <ChannelList
        channels={people}
        channelName={PersonName}
        selectedId={selectedChannelId}
        onChannelSelected={onChannelSelected}
      >
        <h2>PEOPLE</h2>
      </ChannelList>
    </div>
  );
};
