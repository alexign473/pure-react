import React from 'react';

export const ChannelList = ({
  channels,
  children,
  channelName: ChannelName,
  selectedId,
  onChannelSelected,
}) => {
  return (
    <>
      {children}
      <ul>
        {channels.map((channel) => (
          <li key={channel.id}>
            <ChannelName
              channel={channel}
              isSelected={channel.id === selectedId}
              onClick={() => onChannelSelected(channel.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
