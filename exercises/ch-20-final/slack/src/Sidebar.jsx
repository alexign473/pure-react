import React from 'react';

const CHANNELS = ['general', 'help', 'react', 'redux'];
const PEOPLES = ['Dave', 'Sarah', 'Zack'];

export const Sidebar = ({ activeTab, onTabChange }) => {
  const itemClass = (tabName) =>
    `sidebar-item ${tabName === activeTab ? 'selected' : ''}`;

  return (
    <div className='sidebar'>
      active tab: {activeTab}
      <h2>CHANNELS</h2>
      <ul>
        {CHANNELS.map((channel, i) => (
          <li className={itemClass(channel)} key={i}>
            <button onClick={() => onTabChange(channel)}># {channel}</button>
          </li>
        ))}
      </ul>
      <h2>PEOPLE</h2>
      <ul>
        {PEOPLES.map((people, i) => (
          <li className={itemClass(people)} key={i}>
            <button onClick={() => onTabChange(people)}>{people}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
