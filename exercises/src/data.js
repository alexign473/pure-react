const envelope = {
  stamp:
    '3/3a/Pahonia_red_%2825_Groschen%29%2C_Stamp_of_Belarusian_People%27s_Republic',
  // stamp: '2/24/Coat_of_arms_of_Belarus_%281991–1995%29',
  sender: {
    name: 'Mr. Sender',
    address: '123 Fake St',
    city: 'Boston',
    index: 'MA 02118',
  },
  receiver: {
    name: 'Mr. Receiver',
    address: 'ul. Pushkina, KL',
    city: 'Minsk',
    index: 'BL 77777',
  },
};

const card = {
  bankName: 'Big Bank, Inc.',
  number: '1234567887654321',
  expDate: '08/09',
  cardholderName: 'Cardholder name',
};

const poster = {
  imageUrl:
    'https://www.nicepng.com/png/full/31-315310_react-hexagon-react-js-transparent-background.png',
  title: 'React',
  text: 'The best thing since jQuery, probably',
};

const email = {
  sender: 'React Newsletter',
  subject: 'React Newsletter - Issue 36',
  timestamp: '2022-03-30 21:24:37',
  // timestamp: '2018-04-04T16:00:00.000Z',
  message: 'Read this issue on the web',
};

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

const pins = [
  {
    title: 'Title',
    subtitle: 'Aviation Explorer',
    imageList: [
      {
        url: 'https://imageio.forbes.com/specials-images/imageserve/5feb3ee6f87b77880244f345/Passenger-airplane-landing-at-sunset/960x0.jpg?format=jpg&width=960',
      },
      {
        url: 'https://uploads-ssl.webflow.com/6103b3b88cbc6b43f117502c/626ff084ec3742d37ec94662_Union-Aviation-Bombardier-Global-Express-exterior.jpg',
      },
      {
        url: 'https://www.dc-aviation.com/de-wAssets/img/Gallerien/gallery_management_en/weblication/wThumbnails/5_Discretion-cbae8a5814cc6e3g4bd950d84b806ae4.jpg',
      },
      {
        url: 'https://www.politico.eu/cdn-cgi/image/width=1200,height=675,fit=crop,quality=80,onerror=redirect,format=auto/wp-content/uploads/2022/03/08/GettyImages-1238945278-scaled.jpg',
      },
    ],
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

export {
  envelope,
  card,
  poster,
  email,
  trellolist,
  hackerNews,
  pins,
  musicGenres,
};
