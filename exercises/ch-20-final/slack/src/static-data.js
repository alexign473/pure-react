const channels = [
  { id: 1, name: 'react' },
  { id: 2, name: 'redux', hasUnreads: true },
  { id: 3, name: 'mobx' },
  { id: 4, name: 'react-router' },
];

const people = [
  { id: 11, name: 'Dave' },
  { id: 12, name: 'Sarah' },
  { id: 13, name: 'Zack' },
  { id: 14, name: 'Pam' },
  { id: 15, name: 'Erin' },
  { id: 16, name: 'Joe' },
];

function generateFakeMessages(count) {
  return Array.from(Array(count).keys()).map((i) => {
    const userName = randomUser();
    return {
      id: i,
      userName,
      text: `A message from ${userName}`,
      timestamp: new Date(),
    };
  });
}

function randomUser() {
  return people.map((p) => p.name)[
    Math.floor(Math.random() * 1000) % people.length
  ];
}

function createFakeActivity(channels, maxMessages) {
  return channels.reduce((result, channel) => {
    const rndNum = Math.floor(Math.random() * maxMessages);
    result[channel.id] = generateFakeMessages(rndNum);
    return result;
  }, {});
}

export { channels, people, createFakeActivity };
