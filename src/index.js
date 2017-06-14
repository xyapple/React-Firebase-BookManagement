import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import SearchBar from './components/SearchBar'

import registerServiceWorker from './registerServiceWorker';
import './index.css';

//import * as firebase from 'firebase';

//Copy and pased this from Firebase as soon as I create a project
// Initialize Firebase
/** var config = {
   apiKey: "AIzaSyBjY0irAZPCthbtdGNyntX8vwYXwRRO0oE",
   authDomain: "fir-react-test-afd75.firebaseapp.com",
   databaseURL: "https://fir-react-test-afd75.firebaseio.com",
   projectId: "fir-react-test-afd75",
   storageBucket: "fir-react-test-afd75.appspot.com",
   messagingSenderId: "883869264096"
 };
 firebase.initializeApp(config);
*/

 ReactDOM.render(
   <App />,
   document.getElementById('root'));

registerServiceWorker();
