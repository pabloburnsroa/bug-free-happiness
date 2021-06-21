import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      // Use variable to add styles
      <div className="mb-3" style={userStyle}>
        {/* Loop through each user in users array */}
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};



// Variable for styling
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
