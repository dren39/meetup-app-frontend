import React, {Component} from 'react'

class EditEventForm extends Component {
  state = {
    id: this.props.event.id,
    name: this.props.event.name,
    description: this.props.event.description,
    price: this.props.event.price,
    available: this.props.event.available,
    date: this.props.event.event_date,
    time: this.props.event.event_time,
    address: this.props.event.address
  };

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.patchHandler(this.state)
    this.setState({name:'', description:'', price: 0, available:0, date:'', time:'', address: ''})
  };

  render () {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler}/>
        <textarea placeholder="Description" name="description" value={this.state.description} onChange={this.changeHandler}></textarea>
        <input type="number" placeholder="Price" name="price" value={this.state.price} onChange={this.changeHandler}/>
        <input type="number" placeholder="Available Seats" name="available" value={this.state.available} onChange={this.changeHandler}/>
        <input type="date" name="date" onChange={this.changeHandler} value={this.state.date}/>
        <input type="text" placeholder="time" name="time" value={this.state.time} onChange={this.changeHandler}/>
        <input type="text" placeholder="address" name="address" value={this.state.address} onChange={this.changeHandler}/>
        <input type="submit" value="Edit event" />
      </form>
    )
  }
}

export default EditEventForm;
