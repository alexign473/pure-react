import React from 'react';
import './MusicGenres.css';

export const MusicGenres = ({ genres }) => {
  return (
    <div className='music-genres'>
      <div className='music-genres__heading'>
        <i className='fa fa-free-code-camp' />
        <span>Popular genres</span>
      </div>
      <div className='music-genres__buttons'>
        {genres?.map((genre, i) => {
          const size =
            i < 3 ? 'button-large' : i < 6 ? 'button-medium' : 'button-small';

          return <Button text={genre} size={size} key={i} />;
        })}
      </div>
    </div>
  );
};

const Button = ({ text, size }) => {
  return <button className={`music-genres__button ${size}`}>{text}</button>;
};
