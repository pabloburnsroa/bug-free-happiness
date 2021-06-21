import React, { Fragment, useEffect, useContext } from 'react';

import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

// useEffect hook
const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link
        to="/"
        className="btn btn-dark m-3
        "
      >
        Back To Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className="fas fa-check" />
      ) : (
        <i className="fas fa-times-circle" />
      )}
      <div className="card text-center m-auto" style={{ width: '25rem' }}>
        <img src={avatar_url} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Location: {location}</p>
          <div className="card-text">
            {bio && (
              <Fragment>
                <h5>Bio</h5>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li className="list-group-item">
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li className="list-group-item">
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body text-center m-auto">
        <div className="badge text-dark bg-danger m-1">
          Followers: {followers}
        </div>
        <div className="badge text-light bg-success m-1">
          Following: {following}
        </div>
        <div className="badge text-dark bg-light m-1">
          Public Repos: {public_repos}
        </div>
        <div className="badge text-light bg-dark m-1">
          Public Gists: {public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
