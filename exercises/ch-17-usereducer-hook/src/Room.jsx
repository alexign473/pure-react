import React, { useReducer, useRef } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'up':
      return (state + 1) % 4;

    case 'off':
      return 0;
    default:
      return state;
  }
};

const describeLight = (level) => {
  switch (level) {
    case 0:
      return 'off';
    case 1:
      return 'low';
    case 2:
      return 'medium';
    case 3:
      return 'high';
    default:
      return 'broken';
  }
};

export const Room = () => {
  const [level, dispatch] = useReducer(reducer, 0);
  // 0 1 2 3
  return (
    <div>
      <h1>Room</h1>
      {describeLight(level)}
      <br />
      <button onClick={() => dispatch({ type: 'up' })}>Switch Lights</button>
      <button onClick={() => dispatch({ type: 'off' })}>Lights Off</button>
    </div>
  );
};
