import React, { useReducer, useRef } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: state.length,
          name: action.name,
        },
      ];
    case 'remove':
      return state.filter((_, index) => index !== action.index);
    case 'clear':
      return [];

    default:
      return state;
  }
};

export const ShoppingList = () => {
  const inputRef = useRef();
  const [items, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      name: inputRef.current.value,
    });
    inputRef.current.value = '';
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <button onClick={() => dispatch({ type: 'clear' })}>Clear</button>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch({ type: 'remove', index })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
