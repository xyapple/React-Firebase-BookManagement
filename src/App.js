import React, { Component } from 'react';
import './App.css';
//import * as firebase from 'firebase';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';

//AJAX and API library
import request from 'superagent';

class App extends Component {

  constructor(){
    super();
    this.state ={
      gifs:[]
    };

    this.handleTermChange = this.handleTermChange.bind(this)
  }

handleTermChange(term){
  const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    request.get(url, (err, res) => {
        this.setState({ gifs: res.body.data })
    });
  }

// componentDidMount(){
//   const rootRef = firebase.database().ref().child('react');
//   const speedRef = rootRef.child('speed');
//   speedRef.on('value', snap =>{
//           this.setState({
//             speed: snap.val()
//           });
//   });
//
// }
  render() {
    return (
      <div className="App">
        <div>
          <SearchBar onTermChange={term => this.handleTermChange(term)}/>
          <GifList gifs={this.state.gifs}/>
        </div>

      </div>
    );
  }
}

export default App;
