import React from 'react';

export const Nav = ({ activeTab, onTabChange }) => (
  <div className='App-nav'>
    <ul>
      <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
        <NavLink index={0} onClick={onTabChange}>
          Items
        </NavLink>
      </li>
      <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
        <a href='/'>Cart</a>
      </li>
    </ul>
  </div>
);

const NavLink = ({ onClick }) => {
  const handleClick = () => {
    onClick(index);
  };

  return <a onClick={handleClick}></a>;
};
