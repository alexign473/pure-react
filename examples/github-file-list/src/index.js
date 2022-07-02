import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

import './index.css';
import { Time } from './Time';

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit',
    },
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit',
    },
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2016-07-18 21:24:00',
    latestCommit: {
      message: 'Added a readme',
    },
  },
];

const FileList = ({ files }) => (
  <table className='filelist'>
    <tbody>
      {files.map((file) => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);
FileList.propTypes = {
  files: PropTypes.array,
};

const FileListItem = ({ file }) => (
  <tr className='filelist-item' key={file.id}>
    {getFileName(file)}
    <td className='commit-message'>
      <CommitMessage commit={file.latestCommit} />
    </td>
    <td className='age'>
      <Time time={file.updated_at} />
    </td>
  </tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};

function FileIcon({ file }) {
  let icon = 'fa-file-text-o';
  if (file.type === 'folder') {
    icon = 'fa-folder';
  }

  return <i className={`fa ${icon}`}></i>;
}
FileIcon.propTypes = {
  file: PropTypes.object.isRequired,
};

function getFileName(file) {
  return [
    <td className='file-icon' key={0}>
      <FileIcon file={file} />
    </td>,
    <td className='file-name' key={1}>
      {file.name}
    </td>,
  ];
}

const CommitMessage = ({ commit }) => <span>{commit.message}</span>;
CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FileList files={testFiles} />
  </React.StrictMode>
);
