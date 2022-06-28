import React from 'react';
import ReactDOM from 'react-dom/client';

function MyThing() {
  return (
    <div className='book'>
      <div className='title'>The Title </div>
      <div className='author'>The Author</div>
      <ul className='stats'>
        <li className='rating'>5 stars</li>
        <li className='isbn'>12-345678-910</li>
      </ul>
      <div>&nbsp;Non-breaking &nbsp;Spaces&nbsp;</div>
    </div>
  );
}

function MyThingCreateElement() {
  return React.createElement(
    // element
    'div',
    // props
    {
      className: 'book',
    },
    // children
    React.createElement(
      'div',
      {
        className: 'title',
      },
      'The TItle'
    ),
    // another children
    React.createElement(
      'div',
      {
        className: 'author',
      },
      'The Author'
    ),
    React.createElement(
      'ul',
      {
        className: 'rating',
      },
      React.createElement(
        'li',
        {
          className: 'rating',
        },
        '5 stars'
      ),
      React.createElement(
        'li',
        {
          className: 'isbn',
        },
        '12-345678-910'
      )
    )
  );
}

function Greeting() {
  let username = 'root';
  // let username = undefined;
  // let username = null;
  // let username = false;

  return <div>{username ? `Hello ${username}` : `Not logged in`}</div>;
}

// function testComponent() {
//   return <div>test</div>;
// }

function Test() {
  const x = 2;
  return <div>{alert('hi')}</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyThing />
    <MyThingCreateElement />
    <Greeting />
  </React.StrictMode>
);
