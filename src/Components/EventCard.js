import React from 'react'
import EventDetails from './EventDetails';
import {Link} from 'react-router-dom';

class EventCard extends React.Component {


  state ={
    display: false
  };

  showDetails = () => {
    return <EventDetails event={this.props.event} patchHandler={this.props.patchHandler}/>
  };

  render () {
    return (
      <div>
        <div className="event-cards">
          <h4>{this.props.event.name}</h4>
          <p>{this.props.event.event_date}</p>
          <p>{this.props.event.event_time}</p>
          <Link to={`/events/${this.props.event.id}`}>
            <button>See Details</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default EventCard;
