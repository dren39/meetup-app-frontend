import React from 'react';
import {Link} from 'react-router-dom';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div id="welcome">
          <h1 id="welcome-header">Welcome to D.E.ze Meetups </h1>
          <Link to="/signup">
            Signup
          </Link>
        </div>
      </div>
    )
  }
}

export default Welcome
