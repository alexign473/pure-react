import React, { useState } from 'react';

export const RandomList = () => {
  const [numbers, setNumbers] = useState([]);

  const addRandom = () => {
    setNumbers((nums) => [...nums, Math.random()]);
  };

  return (
    <div>
      <h2>RandomList</h2>
      <button onClick={addRandom}>Add random number</button>
      <br />
      {numbers.join(', ')}
    </div>
  );
};
