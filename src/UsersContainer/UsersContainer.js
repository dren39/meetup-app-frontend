import React, {Component} from 'react';
import CreateUser from '../UserComponents/CreateUser'
import LoginUser from '../UserComponents/LoginUser'
import {Route, Switch} from 'react-router-dom';


class UsersContainer extends Component {

  componentDidMount() {
    let token = localStorage.getItem("token");
    fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json",
        authorization: `${token}`
      }
    })
    .then(response => response.json())
    .then(data => this.setState({user: data.user}))
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
      this.setState({user: data.user})
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
      this.props.saveUser(data.user);
      localStorage.setItem("token", data.token)
    })
  };

  renderCreateUserForm = () => {
    return <CreateUser submitUser={this.submitUser}/>
  };

  renderLoginUserForm = () => {
    return <LoginUser loginUser={this.loginUser} />
  };

  render() {
    return (
      <>
      <Switch>
        <Route path='/users/signup' component={this.renderCreateUserForm}/>
        <Route path='/users/login' component={this.renderLoginUserForm}/>
      </Switch>
      </>
    )
  }
}

export default UsersContainer
