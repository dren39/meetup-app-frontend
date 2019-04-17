import React, {Component} from 'react'

class CreateUser extends Component {

  state ={
    username: '',
    password: '',
    fullname: ''
  };

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({name: '', password:'', fullname:''})
    this.props.submitUser(this.state)
  };

  render () {
    return (
        <form onSubmit={this.submitHandler} id="signup-form">
          <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.changeHandler} />
          <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.changeHandler} />
          <input type="text" placeholder="Full name" name="fullname" value={this.state.fullname} onChange={this.changeHandler} />
          <input type="submit" value="Signup" />
        </form>
    )
  }
}

export default CreateUser;
