import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { TweetsList } from './TweetsList';
import { TrelloList } from './TrelloList';
import { HackerNews } from './HackerNews';
import { MusicGenres } from './MusicGenres';

const tweets = [
  {
    message: 'Something about cats.',
    gravatar: 'xyz',
    author: {
      handle: 'catperson',
      name: 'IAMA Cat Person',
    },
    likes: 2,
    retweets: 1,
    timestamp: '2022-03-30 21:24:37',
  },
  {
    message: 'Cats are better than doge.',
    gravatar: 'xyz',
    author: {
      handle: 'catperson',
      name: 'IAMA Cat Person',
    },
    likes: 999,
    retweets: 999,
    timestamp: '2022-04-22 21:24:37',
  },
  {
    message: 'lol jk',
    gravatar: 'xyz',
    author: {
      handle: 'catperson',
      name: 'IAMA Cat Person',
    },
    likes: 6,
    retweets: 6,
    timestamp: '2022-04-22 21:24:37',
  },
];

const trellolist = [
  {
    text: 'Subwoofer',
  },
  {
    text: 'Non-porous, washable',
  },
  {
    text: 'Wings',
  },
  {
    text: 'Beveled Bezel',
  },
  {
    text: 'Beveled Bezel',
  },
  {
    text: 'Seedless',
  },
];

const hackerNews = [
  {
    title: "Why I'm Suing the US Governmnent",
    source: 'bunniestudios.com',
    score: 1346,
    author: 'Ivank',
    timestamp: '2022-06-21 12:24:37',
    comments: 247,
  },
  {
    title: 'Zenzizenzi',
    source: 'wikipedia.org',
    score: 140,
    author: 'vinchuco',
    timestamp: '2022-06-21 11:24:37',
    comments: 40,
  },
  {
    title: 'A practical security guide for web developers',
    source: 'github.com',
    score: 72,
    author: 'zianwar',
    timestamp: '2022-06-21 10:24:37',
    comments: 6,
  },
  {
    title: 'I got arrested in Khazahstan and represented myself on court',
    source: 'medium.com',
    score: 370,
    author: 'drpp7',
    timestamp: '2022-06-21 9:24:37',
    comments: 79,
  },
  {
    title: 'Sculpture of housing prices ripping San Francisco apart',
    source: 'dougmuccune.com',
    score: 254,
    author: 'dougmuccune',
    timestamp: '2022-06-21 9:24:37',
    comments: 149,
  },
];

const musicGenres = [
  'Jazz',
  'Top 40',
  'Country',
  'Dance',
  'Ambient',
  'Trance',
  'Americana',
  'Jungle',
  'Phonk',
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TweetsList tweets={tweets} />
    <TrelloList list={trellolist} />
    <HackerNews news={hackerNews} />
    <MusicGenres genres={musicGenres} />
  </React.StrictMode>
);
