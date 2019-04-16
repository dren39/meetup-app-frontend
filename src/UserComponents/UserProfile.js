import React from 'react'

class UserProfile extends React.Component {

  // listAppointments = () => {
  //   this.props.user.appointments.map(appointment => {
  //   return ;
  //   })
  // };

  render () {
    console.log("WHAt AM I?", typeof this.props.user.events);
    const events = []
    if (this.props.user.events) {
      this.props.user.events.forEach((app,index) => {
      return events.push(<li key={index}>{app.name}</li>)
      })
    } else {
      return "Loading"
    }

    return (
      <>
        <h3>Username: {this.props.user.username}</h3>
        <h3>Fullname: {this.props.user.fullname}</h3>
        <ul>
          {events}
        </ul>
      </>
    )
  }
}

export default UserProfile;
