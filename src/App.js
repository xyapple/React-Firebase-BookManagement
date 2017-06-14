import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
class App extends Component {

  constructor(){
    super();
    this.state ={
      speed:10
    }
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
          <h2>Welcome to React</h2>
          <h1>{this.state.speed}</h1>
        </div>

      </div>
    );
  }
}

export default App;
