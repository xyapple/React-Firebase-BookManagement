import React, {Component} from 'react';
// import './App.css';
//import * as firebase from 'firebase';
// import SearchBar from '../components/SearchBar';
// import GifList from '../components/GifList';
// import GifModal from '../components/GifModal';

import GifsTemp from '../components/GifsTemp';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import SearchBar from '../components/SearchBar';

//AJAX and API library
// import request from 'superagent';
import './App.css'

//
// class App extends Component {
//   constructor(){
//     super();
//     this.state ={
//       gifs:[],
//       //after install the react-modal
//       selectedGif: null,
//       modalIsOpen: false
//     };
//
//     this.handleTermChange = this.handleTermChange.bind(this)
//   }
//   openModal(gif){
//     this.setState({
//       modalIsOpen: true,
//       selectedGif: gif
//     });
//   }
//   closeModal(){
//     this.setState({
//       modalIsOpen: false,
//       selectedGif: null
//     })
//   }
//
//     handleTermChange(term){
//       const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
//
//         request.get(url, (err, res) => {
//             this.setState({ gifs: res.body.data })
//         });
//       }

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
//   render() {
//     return (
//       <div className="App">
//         <div>
//           <SearchBar onTermChange={term => this.handleTermChange(term)}/>
//           <GifList gifs={this.state.gifs}
//                   onGifSelect={selectedGif => this.openModal(selectedGif)}/>
//           <GifModal modalIsOpen={this.state.modalIsOpen}
//                     selectedGif={this.state.selectedGif}
//                     onRequestClose={()=>this.closeModal()}/>
//         </div>
//
//       </div>
//     );
//   }
// }
//
// export default App;
class App extends React.Component {

  render() {
    return (
      <div>
      <SearchBar onTermChange={this.props.actions.requestGifs} />
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    gifs: state.gifs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
