import React, {Component, Fragment} from 'react';
import EventCard from '../Components/EventCard';

class EventsContainer extends Component {

  renderEvent = () => {
    return this.props.events.map(event => <EventCard key={event.id} event={event}/>)
  }

  render () {
    return(
      <Fragment>
        {this.renderEvent()}
      </Fragment>
    )
  }
}

export default EventsContainer;
