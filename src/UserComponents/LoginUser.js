import React, {Component} from 'react'

class LoginUser extends Component {

  state ={
    username: '',
    password: ''
  };

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({name: '', password:''})
    this.props.loginUser(this.state)
  };

  render () {
    return (
        <form onSubmit={this.submitHandler} id="login-form">
          <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.changeHandler} />
          <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.changeHandler} />
          <input type="submit" value="Login" />
        </form>
    )
  }
}

export default LoginUser;
