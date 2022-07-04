import React, { useEffect } from 'react';

export const Ex2 = () => {
  useEffect(() => {
    const onClick = (e) => console.log('clicked', e.clientX, e.clientY);
    document.addEventListener('click', onClick);

    return () => document.removeEventListener('click', onClick);
  }, []);

  return <div>Ex2</div>;
};
