import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import SearchBar from './components/SearchBar';


class App extends Component {

  constructor(){
    super();
    this.state ={
      speed:10
    }
  }

handleBookChange(book){
    console.log(book)
  }

 componentDidMount(){
   const rootRef = firebase.database().ref().child('react');
   const speedRef = rootRef.child('speed');
   speedRef.on('value', snap =>{
            this.setState({
              speed: snap.val()
            });
   });

 }
  render() {
    return (
      <div className="App">
        <div>
          <SearchBar onBookChange={this.handleBookChange}/>
          <h1>{this.state.speed}</h1>
        </div>

      </div>
    );
  }
}

export default App;
