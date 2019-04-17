import React from 'react'

class SearchBar extends React.Component {

  // changeHandler = (event) => {
  //   this.props.searchHandler(event.target.value)
  // };

  render () {
    return (
      <div id="searchbar">
      <input type="text" value={this.props.searchTerm} onChange={this.props.searchHandler} placeholder="Search by location"/>
      </div>
    )
  }
}

export default SearchBar;
