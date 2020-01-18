import React from 'react';

const RepoList = ({ data }) => {
  const listItems = data.map((number, i) =>
    <a key={i} href={'https://github.com/' + number.name} className="item">
      <i className="github icon" />
      <div className="content">
        <div className="header">{number.name}</div>
      </div>
    </a>
  );
  return (
    <div className="ui ordered selection list">{listItems}</div>
  )
}

export default RepoList;