import React, {Component} from 'react';
import EventCard from '../Components/EventCard';
import {Route, Switch, Link, withRouter} from 'react-router-dom';
import EventDetails from '../Components/EventDetails';
import CreateEventForm from '../Components/CreateEventForm';
import SearchBar from '../Components/SearchBar';
import Welcome from '../Components/Welcome';


class EventsContainer extends Component {
  state = {
    eventsArray: null,
    reserveChairArray: [],
    filteredArray: [],
    searchTerm: ''
  }

  componentDidMount() {
    let token = localStorage.getItem("token")
    fetch('http://localhost:3000/events', {
      method: 'GET',
      headers: {
        Authorization: `${token}`
      }
    })
    .then(response => response.json())
    .then(events => {
      console.log('THIS IS EVENTS', events);
      this.setState({eventsArray: events, filteredArray: events})
    })
  }

  renderEventCards = () => {
    if (this.state.eventsArray) {
      return (
        <div className="card-container">
          {this.state.filteredArray.map(event => <EventCard key={event.id} event={event} />)}
          <Link to='/events/new'>
            <button>Add new event</button>
          </Link>
        </div>
      )
    } else {
      return <Welcome />
    }

  }

  renderEventDetail = (routerProps) => {
    if (this.state.eventsArray) {
      const id = parseInt(routerProps.match.params.id)
      const event =  this.state.eventsArray.find(eventObj => eventObj.id === id);
      return <EventDetails event={event} reserveChair={this.reserveChair} reserveChairArray={this.state.reserveChairArray} deleteHandler={this.deleteHandler} patchHandler={this.patchHandler} user={this.props.user}/>
    } else {
      return <Welcome />
    }
  }

  reserveChair = (admin, userObj, eventObj) => {
    fetch('http://localhost:3000/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({
        admin: admin,
        user_id: userObj.id,
        event_id: eventObj.id
      })
    })
      const newArray = [...this.state.eventsArray]
      const foundEvent = newArray.find(meetUpObj => meetUpObj.id === eventObj.id)
      foundEvent.available -= 1;
      const newReserveArray = [...this.state.reserveChairArray, eventObj];
      this.setState({eventsArray: newArray, reserveChairArray: newReserveArray})
    // const newArray = [...this.state.reserveChairArray, index]
    // this.setState({reserveChairArray: newArray}, console.log(this.state.reserveChairArray))
  };

  submitEventHandler = (eventObj) => {
    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: eventObj.name,
        event_date: eventObj.date,
        event_time: eventObj.time,
        address: eventObj.address,
        description: eventObj.description,
        available: eventObj.available,
        price: eventObj.price,
      })
    })
      .then(response => response.json())
      .then(eventObj => {
        const newArray = [...this.state.eventsArray, eventObj]
        this.setState({eventsArray: newArray})
    })
  };

  deleteHandler = (eventObj) => {
    fetch(`http://localhost:3000/events/${eventObj.id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })//end of fetch
    .then(response => response.json())
    .then(obj => {
      const newArray = [...this.state.eventsArray].filter(meetingObj => meetingObj.id !== obj.id)
      this.setState({eventsArray: newArray})
    })
    this.props.history.push('/events')
  };

  renderCreateForm = () => {
    return <CreateEventForm submitEventHandler={this.submitEventHandler}/>
  };

  patchHandler = (eventObj) => {
    fetch(`http://localhost:3000/events/${eventObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: eventObj.name,
        event_date: eventObj.date,
        event_time: eventObj.time,
        address: eventObj.address,
        description: eventObj.description,
        available: eventObj.available,
        price: eventObj.price,
      })
    })
    .then(response => response.json())
    .then(obj => {
      const newArray = [...this.state.eventsArray, obj]
      this.setState({eventsArray: newArray})
    })
  };

  searchHandler = (event) => {
    this.setState({searchTerm: event.target.value}, this.filterHandler())
  };

  filterHandler = () => {
    const filter = this.state.eventsArray.filter(event => {
      return event.address.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    this.setState({filteredArray: filter})
  };

  render () {
    return(
      <>
        <SearchBar searchHandler={this.searchHandler} searchTerm={this.state.searchTerm}/><br/>
        <Switch>
          <Route path='/events/new' component={this.renderCreateForm}/>
          <Route path='/events/:id' render={this.renderEventDetail} />
          <Route path='/events' component={this.renderEventCards}/>
        </Switch>

      </>
    )
  }
}

export default withRouter(EventsContainer);
