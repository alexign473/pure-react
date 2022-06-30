import React, { useState } from 'react';

export const Room = () => {
  const [light, setLight] = useState(true);

  const toggleLight = () => {
    setLight((light) => !light);
  };

  return (
    <div>
      <h2>The room is {light ? 'light' : 'dark'}</h2>
      <button onClick={toggleLight}>toggle light</button>
    </div>
  );
};
