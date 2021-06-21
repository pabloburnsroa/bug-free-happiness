import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/gitHubContext'
import AlertContext from '../../context/alert/alertContext'
import { searchUsers } from '../../context/github/actions'
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS } from '../../context/types'

const Search = () => {
  const { dispatch, users } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const [text, setText] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please enter something', 'light')
    } else {
      dispatch({ type: SET_LOADING })
      searchUsers(text).then(users => {
        dispatch({ type: SEARCH_USERS, payload: users })
        setText('')
      })
    }
  }

  const onChange = e => setText(e.target.value)


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
            {users.length > 0 && (
              <button
                className="btn btn-dark form-control"
                onClick={() => dispatch({ type: CLEAR_USERS })}
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
