import PropTypes from 'prop-types';
import './CreditCard.css';

/* Кредитная карта */
export const CreditCard = ({ card }) => {
  const { bankName, cardNumber, expDate, cardholderName } = card;
  return (
    <div className='card'>
      <BankName name={bankName} />
      <CardNumber number={cardNumber} />
      <ExpDate date={expDate} />
      <Cardholder name={cardholderName} />
    </div>
  );
};
CreditCard.propTypes = {
  card: PropTypes.shape({
    bankName: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    expDate: PropTypes.string.isRequired,
    cardholderName: PropTypes.string.isRequired,
  }).isRequired,
};

const BankName = ({ name }) => {
  return <span className='bank-name'>{name}</span>;
};

// пробелы в номере карты
const formatCardNumber = (number) => {
  return number
    .replace(/\D/g, '')
    .replace(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g, '$1 $2 $3 $4');
};

const CardNumber = ({ number }) => {
  return (
    <div className='numbers'>
      <span className='card-number'>{formatCardNumber(number)}</span>
      <span className='first-numbers'>{number.slice(0, 4)}</span>
    </div>
  );
};

const ExpDate = ({ date }) => {
  return <span className='exp-date'>{date}</span>;
};

const Cardholder = ({ name }) => {
  return <span className='holder-name'>{name.toUpperCase()}</span>;
};
