import React, { useState } from 'react';

const Control = ({ value, children, onIncrease, onDecrease }) => (
  <div className='d-flex mb-2 gap-1'>
    <button onClick={onDecrease} className='btn btn-outline-dark'>
      &ndash;
    </button>
    <div className='d-flex flex-column' style={{ width: '100px' }}>
      <span>{value}</span>
      <span>{children}</span>
    </div>
    <button onClick={onIncrease} className='btn btn-outline-dark'>
      +
    </button>
  </div>
);

export const AudioControls = () => {
  const [volume, setVolume] = useState(1);
  const [tremble, setTremble] = useState(50);
  const [mid, setMid] = useState(50);
  const [bass, setBass] = useState(50);

  return (
    <div>
      <h2>AudioControls</h2>
      <Control
        value={volume}
        onIncrease={() => setVolume(volume + 1)}
        onDecrease={() => setVolume(volume - 1)}
      >
        VOLUME
      </Control>

      <Control
        value={mid}
        onIncrease={() => setMid(mid + 1)}
        onDecrease={() => setMid(mid - 1)}
      >
        MID
      </Control>

      <Control
        value={bass}
        onIncrease={() => setBass(bass + 1)}
        onDecrease={() => setBass(bass - 1)}
      >
        BASS
      </Control>

      <Control
        value={tremble}
        onIncrease={() => setTremble(tremble + 1)}
        onDecrease={() => setTremble(tremble - 1)}
      >
        TREMBLE
      </Control>
    </div>
  );
};

export const AudioControls2 = () => {
  const [values, setValues] = useState({
    volume: 2,
    bass: 50,
    mid: 50,
    tremble: 50,
  });
  const { volume, bass, mid, tremble } = values;

  const increase = (key) => () => {
    setValues((values) => ({
      ...values,
      [key]: values[key] + 1,
    }));
  };

  const decrease = (key) => () => {
    setValues((values) => ({
      ...values,
      [key]: values[key] - 1,
    }));
  };

  return (
    <div>
      <h2>Autio Controls 2</h2>
      <Control
        value={volume}
        onIncrease={increase('volume')}
        onDecrease={decrease('volume')}
      >
        VOLUME
      </Control>
      <Control
        value={bass}
        onIncrease={increase('bass')}
        onDecrease={decrease('bass')}
      >
        BASS
      </Control>
      <Control
        value={mid}
        onIncrease={increase('mid')}
        onDecrease={decrease('mid')}
      >
        MID
      </Control>
      <Control
        value={tremble}
        onIncrease={increase('tremble')}
        onDecrease={decrease('tremble')}
      >
        TREMBLE
      </Control>
    </div>
  );
};
