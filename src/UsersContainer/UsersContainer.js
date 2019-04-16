import React, {Component} from 'react';
import CreateUser from '../UserComponents/CreateUser'
import LoginUser from '../UserComponents/LoginUser'
import UserProfile from '../UserComponents/UserProfile'
import {Route, Switch} from 'react-router-dom';


class UsersContainer extends Component {

  // componentDidMount() {
  //   let token = localStorage.getItem("token");
  //   fetch("http://localhost:3000/users", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       accepts: "application/json",
  //       authorization: `${token}`
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => this.setState({user: data.user}))
  // }



  render() {
    console.log("TEST", this.fetchUser());
    return (
      <>
      <Switch>

      </Switch>
      </>
    )
  }
}

export default UsersContainer
