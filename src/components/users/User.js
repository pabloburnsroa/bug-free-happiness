import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import GithubContext from '../../context/github/gitHubContext';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { getUserAndRepos } from '../../context/github/actions';
import { GET_USER_AND_REPOS, SET_LOADING } from '../../context/types';

const User = ({ match: { params } }) => {
  const {
    user: {
      name,
      avatar_url,
      location,
      bio,
      login,
      html_url,
      followers,
      following,
      public_gists,
      public_repos,
      hireable,
      blog,
      company,
    },
    loading,
    dispatch,
    repos,
  } = useContext(GithubContext);

  useEffect(() => {
    dispatch({ type: SET_LOADING });
    getUserAndRepos(params.login).then((res) =>
      dispatch({ type: GET_USER_AND_REPOS, payload: res })
    );
  }, [dispatch, params.login]);
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
