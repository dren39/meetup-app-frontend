import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = (props) =>
<div>
  <NavLink to='/welcome'>
    Welcome
  </NavLink>
<br/>

  {props.user.username ?
    <NavLink to='/profile'>
      My Profile
    </NavLink> : null }

  <br/>

  <NavLink to='/events'>
    Events
  </NavLink>
  <br/>

  <NavLink to='/login'>
    Login
  </NavLink>

  {props.user.username ? <button onClick={props.logout}>Logout</button> : null}

</div>

export default Navbar

// <NavLink to='/signup'>
//   Signup
// </NavLink>
