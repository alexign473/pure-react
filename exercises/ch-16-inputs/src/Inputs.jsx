import React, { useState, useRef } from 'react';

// Controlled input
export const Inputs = () => {
  const [{ firstName, lastName }, setName] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    setName((name) => ({
      ...name,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h2>Inputs</h2>
      <label>
        First name:
        <input name='firstName' value={firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Last name:
        <input name='lastName' value={lastName} onChange={handleChange} />
      </label>
      <br />

      <span>
        Hello, {firstName} {lastName}!
      </span>
    </div>
  );
};

// Uncontrolled input
export const Inputs2 = () => {
  const [{ firstName, lastName }, setName] = useState({
    firstName: '',
    lastName: '',
  });

  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const handleSubmit = () => {
    setName({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
    });
  };

  return (
    <div>
      <h2>Inputs 2</h2>
      <label>
        First name:
        <input name='firstName' ref={firstNameRef} />
      </label>
      <br />
      <label>
        Last name:
        <input name='lastName' ref={lastNameRef} />
      </label>
      <br />
      <button type='button' onClick={handleSubmit}>
        Submit
      </button>

      <span>
        Hello, {firstName} {lastName}!
      </span>
    </div>
  );
};
