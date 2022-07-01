import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {
  ErrorBox,
  Nav,
  NavItem,
  Envelope,
  Card,
  Poster,
  EmailLine,
  TrelloList,
  HackerNews,
  HackerNavBar,
  ImageCardList,
  MusicGenres,
  Room,
  RandomList,
  AudioControls,
  AudioControls2,
  Inputs,
  Inputs2,
  OrderPizza,
} from './components';
import {
  envelope,
  card,
  poster,
  email,
  trellolist,
  hackerNews,
  pins,
  musicGenres,
} from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ErrorBox>The world is ending</ErrorBox>
    <Nav>
      <NavItem url='/'>Home</NavItem>
      <NavItem url='/about'>About</NavItem>
      <NavItem url='/contact'>Contact</NavItem>
    </Nav>
    <Envelope envelope={envelope} />
    <Card card={card} />
    <Poster poster={poster} />
    <EmailLine email={email} />
    <TrelloList list={trellolist} />
    <HackerNavBar />
    <HackerNews news={hackerNews} />
    <ImageCardList cards={pins} />
    <MusicGenres genres={musicGenres} />
    <Room />
    <RandomList />
    <AudioControls />
    <AudioControls2 /> */}
    {/* <Inputs />
    <Inputs2 /> */}
    <OrderPizza />
  </React.StrictMode>
);
