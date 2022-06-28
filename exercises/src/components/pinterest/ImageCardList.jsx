import React from 'react';
import { card } from '../../data';
import './imageCardList.css';

export const ImageCardList = ({ cards }) => {
  return (
    <div className='imagecard-list'>
      {cards.map((card, i) => (
        <ImageCardListItem card={card} key={i} />
      ))}
    </div>
  );
};

const ImageCardListItem = ({ card }) => (
  <div className='imagecard-list__item'>
    <span>{card.title}</span>
    <span>{card.subtitle}</span>
    <div>
      {card.imageList.map((img, i) => (
        <img src={img.url} alt='poster' key={i} />
      ))}
    </div>
    <button type='button'>Follow</button>
  </div>
);
