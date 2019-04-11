import React from 'react'

class EventCard extends React.Component {
  render () {
    return (
      <div>
        <h3>{this.props.event.name}</h3>
        <p>{this.props.event.event_date}</p>
        <p>{this.props.event.event_time}</p>
      </div>
    )
  }
}

export default EventCard;
