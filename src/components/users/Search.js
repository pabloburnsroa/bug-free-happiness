import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

// Function Component
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  // Using context and hooks
  // Declare new state variable "text" and then we pass setText which is a function that updates text. The only argument to useState() Hook is the initial state. For text it will be an empty value.
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // Check for empty submit
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="mb-3">
      <form onSubmit={onSubmit} action="">
        <input
          className="form-control mb-3"
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <div className="row">
          <div className="col">
            <input
              type="submit"
              value="Search"
              className="btn btn-dark form-control"
            />
          </div>
          <div className="col">
            {/* If showClear is true then we can show the clear button */}
            {githubContext.users.length > 0 && (
              <button
                className="btn btn-dark form-control"
                onClick={githubContext.clearUsers}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
