import React from 'react';

const getUrlSrc = (url) => {
  switch (url) {
    case 'default':
      return 'https://www.reddit.com/static/noimage.png';
    case 'self':
      return 'https://www.reddit.com/static/self_default2.png';
    default:
      return url;
  }
};

export const Thumbnail = ({ url }) => {
  return <img className='thumbnail' src={getUrlSrc(url)} alt='thumbnail' />;
};
