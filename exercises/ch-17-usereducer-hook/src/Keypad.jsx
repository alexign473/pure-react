import React, { useReducer } from 'react';
import { useRef } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'keypress':
      if (state.status === 'unlocked') {
        return state;
      }
      // match pressed key with one in sequence
      if (action.value === +state.combo[state.nextKeyIndex]) {
        // delete 1st combo number
        const nextKeyIndex = state.nextKeyIndex + 1;
        return {
          ...state,
          nextKeyIndex,
          status: nextKeyIndex === state.combo.length ? 'unlocked' : 'locked',
        };
      } else {
        // reset
        return {
          ...state,
          nextKeyIndex: 0,
        };
      }

    default:
      return state;
  }
};

export const Keypad = () => {
  const combo = '4453';

  const [lock, dispatch] = useReducer(reducer, {
    combo,
    status: 'locked',
    nextKeyIndex: 0,
  });

  return (
    <div>
      <h1>Keypad</h1>
      <p>Enter the correct combination:</p>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <button
          key={i}
          onClick={() => dispatch({ type: 'keypress', value: i })}
        >
          {i}
        </button>
      ))}
      <p>The lock is {lock.status}</p>
      <p>You've gotten {lock.nextKeyIndex} keys correct.</p>
    </div>
  );
};

/* Первый вариант
const order = [2, 3, 1];

const reducer = (state, action) => {
  switch (action.type) {
    case 'advance':
      return action.i === state[0] ? state.slice(1) : order;

    default:
      return state;
  }
};

export const Keypad = () => {
  const [lock, dispatch] = useReducer(reducer, order);

  return (
    <div>
      <h1>Keypad</h1>
      {[1, 2, 3].map((i) => (
        <button key={i} onClick={() => dispatch({ type: 'advance', i })}>
          {i}
        </button>
      ))}
      {lock}
      {!lock.length && 'Unlocked'}
    </div>
  );
};
*/
