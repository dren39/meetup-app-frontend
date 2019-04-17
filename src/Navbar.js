import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, Button, Link, Item} from 'react-bootstrap'


class Navbar extends React.Component {
  render () {
    return (
      <>


        <div className="navbar">
          <NavLink to='/welcome'>
            Home
          </NavLink>
        <br/>

        <NavLink to='/events'>
          Events
        </NavLink>
        <br/>

        <NavLink to='/login'>
          Login
        </NavLink>

        {this.props.user.username ? <button onClick={this.props.logout}>Logout</button> : null}

        {this.props.user.username ?
          <NavLink to='/profile'>
            My Profile
          </NavLink> : null }

        </div>
      </>
    )
  }
}

export default Navbar;
// const Navbar = (this.props) =>
//
//
// export default Navbar

// <NavLink to='/signup'>
//   Signup
// </NavLink>
