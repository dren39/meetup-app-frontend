import React from 'react'

class SearchBar extends React.Component {

  // changeHandler = (event) => {
  //   this.props.searchHandler(event.target.value)
  // };

  render () {
    return (
      <input type="text" value={this.props.searchTerm} onChange={this.props.searchHandler} placeholder="Search by location"/>
    )
  }
}

export default SearchBar;
