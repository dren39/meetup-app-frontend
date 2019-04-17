import React from 'react';
import {Link} from 'react-router-dom';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to D.E.ze Meetups </h1>
        <Link to="/login">
          Login
        </Link>
        <Link to="/signup">
          Signup
        </Link>
      </div>
    )
  }
}

export default Welcome
