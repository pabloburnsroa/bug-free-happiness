import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      text: '',
    };
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    // Check for empty submit
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // Destructure this.props for better looking code below
    const { showClear, clearUsers } = this.props;
    return (
      <div className="mb-3">
        <form onSubmit={this.onSubmit} action="">
          <input
            className="form-control mb-3"
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
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
              {showClear && (
                <button
                  className="btn btn-dark form-control"
                  onClick={clearUsers}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
