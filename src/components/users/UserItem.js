import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// class UserItem extends Component {
// function component
// props passed in as argument
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // render() {

  return (
    <div className="card text-center ">
      <img
        src={avatar_url}
        className=" mx-auto img-fluid img-thumbnail rounded-circle w-25 h-25"
        alt=""
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
