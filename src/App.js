import React, { Component} from 'react';
import EventsContainer from './Container/EventsContainer';
import UserProfile from './UserComponents/UserProfile';
import Navbar from './Navbar';
import Welcome from './Components/Welcome';
import LoginUser from './UserComponents/LoginUser';
import CreateUser from './UserComponents/CreateUser'
import {Route, Switch, withRouter} from 'react-router-dom';

class App extends Component {

  state = {
    user: {}
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/get_user", {
        method: "GET",
        headers: {
          authorization: `${token}`
        }
      })
      .then(response => response.json())
      .then(data => this.setState({user:data.user}))
    } else {
      this.props.history.push('/welcome')
    }
  }

  // saveUser = (userObj) => {
  //   this.setState({user: userObj})
  // };

  // userContainerHandler = () => {
  //   return <UsersContainer saveUser={this.saveUser} user={this.state.user}/>
  // };

  eventsContainerHandler = () => {
   return <EventsContainer user={this.state.user}/>
  }

  renderCreateUserForm = () => {
    return <CreateUser submitUser={this.submitUser}/>
  };

  renderLoginUserForm = () => {
    return <LoginUser loginUser={this.loginUser} />
  };

  logout = () => {
    localStorage.removeItem("token")
    // console.log(this.props);
    this.props.history.push("/welcome")
  }

  submitUser = (userObj) => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user:  {
        username: userObj.username,
        password: userObj.password,
        fullname: userObj.fullname
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({user: data.user});
      // this.props.saveUser(data.user);
      localStorage.setItem("token", data.token)
    })
  };

  loginUser = (loginObj) => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
        username: loginObj.username,
        password: loginObj.password
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({user: data.user});
      localStorage.setItem("token", data.token)
    })
  };
  showProfile = () => {

    return <UserProfile user={this.state.user}/>

    // fetch(`http://localhost:3000/users/5`)
    // .then(response => response.json())
    // .then(userData => {
    //   console.log("THIS IS USER", this.state.user);
    //   return <h3>{this.state.user.fullname}</h3>
    // })
  };
  render() {
    return (
      <>
        <Navbar user={this.state.user} logout={this.logout}/>
        <Switch>
          <Route path='/profile' render={()=> this.state.user.username ? <UserProfile user={this.state.user}/> : this.props.history.push("/welcome") } />
          <Route path='/welcome' component={Welcome} />
          <Route path='/signup' component={this.renderCreateUserForm}/>
          <Route path='/login' component={this.renderLoginUserForm}/>
          <Route path='/events' render={this.eventsContainerHandler} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
