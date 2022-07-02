import './TrelloList.css';

export const TrelloList = ({ list }) => {
  return (
    <div className='trellolist'>
      <div className='trello-heading'>
        <h2>Phone Features</h2>
        <i className='fa fa-ellipsis-h' />
      </div>
      {list.map((item, i) => (
        <TrelloListItem text={item.text} key={i} />
      ))}
      <span>Add a card...</span>
    </div>
  );
};

const TrelloListItem = ({ text }) => (
  <div className='trellolist-item'>{text}</div>
);
