import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () =>
<div>
  <NavLink to='/welcome'>
    Welcome
  </NavLink>

  <NavLink to='/events'>
    Events
  </NavLink>

  <NavLink to='/users/signup'>
    Signup
  </NavLink>

</div>

export default Navbar

// <NavLink to='/signup'>
//   Signup
// </NavLink>
