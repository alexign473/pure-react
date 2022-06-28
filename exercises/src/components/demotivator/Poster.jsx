import './Poster.css';

/* Демотиватор */
export const Poster = ({ poster }) => {
  return (
    <div className='poster'>
      <Image url={poster.imageUrl} />
      <Title title={poster.title} />
      <Text text={poster.text} />
    </div>
  );
};

const Image = ({ url }) => {
  return (
    <div className='poster-image'>
      <img src={url} alt='poster' />
    </div>
  );
};

const Title = ({ title }) => <h2 className='poster-title'>{title}</h2>;

const Text = ({ text }) => <p className='poster-text'>{text}</p>;
