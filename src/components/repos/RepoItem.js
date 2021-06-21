import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className="card m-1" style={{ width: '25rem' }}>
      <div className="card-body">
        <a className="card-link" href={repo.html_url}>
          {repo.name}
        </a>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
