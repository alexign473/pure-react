import PropTypes from 'prop-types';

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
Envelope.propTypes = {
  envelope: PropTypes.shape({
    sender: PropTypes.object.isRequired,
    receiver: PropTypes.object.isRequired,
  }).isRequired,
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
AddressLabel.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
  }).isRequired,
};

// компонент марка
const Stamp = ({ hash }) => {
  const url = `https://upload.wikimedia.org/wikipedia/commons/${hash}.svg`;
  return (
    <div className='stamp'>
      <img src={url} alt='stamp' />
    </div>
  );
};
Stamp.propTypes = {
  hash: PropTypes.string.isRequired,
};
