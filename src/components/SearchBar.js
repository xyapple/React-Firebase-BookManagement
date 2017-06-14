import React from 'react';

class SearchBar extends React.Component {
  
  constructor(){
    super();
    this.state = {book:''}
  }
  onInputChange(book){

    this.setState({book});

    this.props.onBookChange(book);

  }

  render(){
    return (
      <div className='search'>
        <input type='text' onChange={even => this.onInputChange(even.target.value)}/>
      </div>
    )
  }
}

export default SearchBar;
