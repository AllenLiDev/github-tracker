import React from 'react';

const RepoList = ({ data }) => {
  const listItems = data.map((number) =>
    <div className="item">{number.name}</div>
  );
  return (
      <div className="ui ordered celled list">{listItems}</div>
  )
}

export default RepoList;