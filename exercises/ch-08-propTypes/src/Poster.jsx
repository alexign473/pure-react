import PropTypes from 'prop-types';

import './Poster.css';

/* Демотиватор */
export const Poster = ({ poster }) => {
  const { imageUrl, title, text } = poster;
  return (
    <div className='poster'>
      <div className='poster-image'>
        <img src={imageUrl} alt='poster' />
      </div>
      <h2 className='poster-title'>{title}</h2>
      <p className='poster-text'>{text}</p>
    </div>
  );
};
Poster.propTypes = {
  poster: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
