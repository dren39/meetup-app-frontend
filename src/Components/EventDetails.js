import React, {Component} from 'react'
import EditEventForm from './EditEventForm';
// import AppointmentsContainer from '../AppointmentsContainer/AppointmentsContainer'

// import {Route, Link} from 'react-router-dom';


class EventDetails extends Component {

  state = {
    render: false,
    admin: false,
    seats: this.props.event.available
  };

  chairClickHandler = () => {
    if (!this.props.reserveChairArray.includes(this.props.event)) {
      this.setState({seats: this.state.seats - 1})
      return this.props.reserveChair(this.state.admin, this.props.user, this.props.event)
    }
  };

  renderSeats = (seats) => {
    return [...Array(seats)].map((seat,index) => {
      return <div key={index} className="seats" onClick={()=>this.chairClickHandler()}/>
    })
  }

  editHandler = () => {
    this.setState({render: !this.state.render})
  };

  renderEditForm = () => {
    return <EditEventForm event={this.props.event} patchHandler={this.props.patchHandler}/>
  }

  render() {
    console.log(this.props.event.event_date);
    return (
      <>
        <h3>{this.props.event.name}</h3>
        <p>{this.props.event.description}</p>
        <p>${this.props.event.price}</p>
        <p>Date: {this.props.event.event_date}</p>
        <p>Time: {this.props.event.event_time}</p>
        <p>{this.props.event.address}</p>
        <div>Available:{this.renderSeats(this.state.seats)}</div>
        <button onClick={() => this.props.deleteHandler(this.props.event)}>Delete this meetup</button>
        <button onClick={this.editHandler}>Edit this meetup</button>

        <div>
          {this.state.render ? this.renderEditForm() : null}
        </div>
      </>
    )
  }
}

export default EventDetails
