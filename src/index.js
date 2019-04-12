import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home'
import Welcome from './Components/Welcome';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const Navbar = () =>
<div>
  <NavLink to='/welcome'>
    Welcome
  </NavLink>

  <NavLink to='/app'>
    Events
  </NavLink>
</div>

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route path='/welcome' component={Welcome} />
      <Route path='/app' component={App} />
    </React.Fragment>
  </Router>),
// <App />

document.getElementById('root')
);
