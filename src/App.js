import React, { Component} from 'react';
import EventsContainer from './Container/EventsContainer';
import UsersContainer from './UsersContainer/UsersContainer';
import Navbar from './Navbar';
import Welcome from './Components/Welcome';
import {Route, Switch} from 'react-router-dom';



class App extends Component {

  state = {
    user: ''
  };

  saveUser = (userObj) => {
    this.setState({user: userObj})
  };

  userContainerHandler = () => {
    return <UsersContainer saveUser={this.saveUser}/>
  };

  eventsContainerHandler = () => {
    return <EventsContainer user={this.state.user}/>
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path='/users' render={this.userContainerHandler} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/events' render={this.eventsContainerHandler} />
        </Switch>
      </>
    );
  }
}

export default App;
