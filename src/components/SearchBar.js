import React from 'react';

class SearchBar extends React.Component {

  constructor(){
    super();
    this.state = {term:''}
  }
  onInputChange(term){

    this.setState({term});
    this.props.onTermChange(term);

  }

  render(){
    return (
      <div className='search'>
        <input type='text' placeholder="Enter text to search for gifs!" onChange={even => this.onInputChange(even.target.value)}/>
      </div>
    )
  }
}

export default SearchBar;
