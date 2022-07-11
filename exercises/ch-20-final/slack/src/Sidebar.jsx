import React from 'react';

const CHANNELS = ['general', 'help', 'react', 'redux'];
const PEOPLES = ['Dave', 'Sarah', 'Zack'];

export const Sidebar = ({ activeTab, onTabChange }) => {
  return (
    <div className='sidebar'>
      <h2>CHANNELS</h2>
      <ul>
        {CHANNELS.map((channel, i) => (
          <li key={i}>
            <button># {channel}</button>
          </li>
        ))}
      </ul>

      <h2>PEOPLE</h2>
      <ul>
        {PEOPLES.map((people, i) => (
          <li key={i}>
            <button>{people}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
