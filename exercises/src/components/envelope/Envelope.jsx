import './Envelope.css';

/* Конверт с отправителем, получателем и маркой */
export const Envelope = ({ envelope }) => {
  return (
    <div className='envelope'>
      <AddressLabel person={envelope.sender} />
      <AddressLabel person={envelope.receiver} />
      <Stamp hash={envelope.stamp} />
    </div>
  );
};

// компонент адрес отправителя / получателя
const AddressLabel = ({ person }) => {
  return (
    <div className='label'>
      <span>{person.name}</span>
      <span>{person.address}</span>
      <span>
        {person.city},<span>{person.index}</span>
      </span>
    </div>
  );
};

// компонент марка
const Stamp = ({ hash }) => {
  const url = `https://upload.wikimedia.org/wikipedia/commons/${hash}.svg`;
  return (
    <div className='stamp-image'>
      <img src={url} alt='stamp' />
    </div>
  );
};
