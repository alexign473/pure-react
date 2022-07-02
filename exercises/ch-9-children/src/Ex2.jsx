import React from 'react';
import ReactDOM from 'react-dom';

const FirstChildOnly = ({ children }) => (
  <div>First child: {React.Children.toArray(children).slice(0, 1)}</div>
);

const LastChildOnly = ({ children }) => (
  <div>Last child: {React.Children.toArray(children).slice(-1)[0] || null}</div>
);

const Tail = ({ number, children }) => (
  <div>
    Last {number} children: {React.Children.toArray(children).slice(-number)}
  </div>
);

const Head = ({ number, children }) => (
  <div>
    First {number} children: {React.Children.toArray(children).slice(0, number)}
  </div>
);

export const Ex2 = () => (
  <div>
    <FirstChildOnly>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </FirstChildOnly>
    <br />
    <LastChildOnly>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </LastChildOnly>
    <br />
    <Head number={2}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Head>
    <br />
    <Tail number={2}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Tail>
  </div>
);
