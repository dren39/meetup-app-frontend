import React, {Component, Fragment} from 'react';
import EventsContainer from '../Container/EventsContainer'


class Home extends Component {

  state = {
    eventsArray: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/events')
    .then(response => response.json())
    .then(events => this.setState({eventsArray: events}))
  }
  render () {
    console.log(this.state.eventsArray)
    return (
      <Fragment>
        Hello!
        <EventsContainer events={this.state.eventsArray}/>
      </Fragment>
    )
  }
}

export default Home;
