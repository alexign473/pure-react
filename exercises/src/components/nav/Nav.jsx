import React from 'react';

export const Nav = ({ children }) => {
  let items = React.Children.toArray(children);
  for (let i = items.length - 1; i >= 1; i--) {
    items.splice(
      i,
      0,
      <span key={i} className='separator'>
        |
      </span>
    );
  }
  return <div>{items}</div>;
};

export const NavItem = ({ url, children }) => {
  return (
    <a className='px-2' href={url}>
      {children}
    </a>
  );
};
