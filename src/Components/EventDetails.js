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
      return <div id="seats"key={index} className="seats" onClick={()=>this.chairClickHandler()}/>
    })
  }

  editHandler = () => {
    this.setState({render: !this.state.render})
  };

  renderEditForm = () => {
    return <EditEventForm event={this.props.event} patchHandler={this.props.patchHandler}/>
  }

  findAdmin = () => {
    const foundAppointment = this.props.event.appointments.find(appointment => appointment.admin === true)
    return foundAppointment.user_id;
  };

  render() {
    return (
      <>
        <h3 className="details">{this.props.event.name}</h3>
        <p className="details">Hosted by: {this.findAdmin()}</p>
        <p className="details" className="details">{this.props.event.description}</p>
        <p className="details">${this.props.event.price}</p>
        <p className="details">Date: {this.props.event.event_date}</p>
        <p className="details">Time: {this.props.event.event_time}</p>
        <p className="details">{this.props.event.address}</p>
        <p className="details">Available Spots: {this.state.seats}</p>
        <div className="details" id="seats-container">{this.renderSeats(this.state.seats)}</div>
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
