import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

class App extends Component {

  constructor(){
    super();
    this.state ={
      books:[{
              "bookId": 1,
              "bookTitle": "Forget English!: Orientalisms And World Literatures ",
              "language": "English",
              "author": "Aamir Mufti",
              "ISBN": 9780674734777,
              "datePublished": "2016/01",
              "publisher": "Harvard University Press ",
              "publishedPlace": "Cambridge MA",
              "price": 35.00,
              "starRating": 4.0,
              "imageUrl": "http://ec1.images-amazon.com/images/P/0674734777.01._SX220_SCLZZZZZZZ_.jpg"
          },
          {
              "bookId": 2,
              "bookTitle": "Secrecy And Disclosure In Victorian Fiction by Leila Silvana May",
              "language": "English",
              "author": "Leila Silvana May",
              "ISBN": 9781472484390,
              "datePublished": "2017/01",
              "publisher": "Routledge",
              "publishedPlace": "New York",
              "price": 142.50,
              "starRating": 4.0,
              "imageUrl": "http://ec1.images-amazon.com/images/P/1472484398.01._SX220_SCLZZZZZZZ_.jpg"
          },
          {
              "bookId": 3,
              "bookTitle": "The Afterlives Of Rape In Medieval English Literature",
              "language": "English",
              "author": "Suzanne M. Edwards",
              "ISBN": 9781137364814,
              "datePublished": "2016/09",
              "publisher": "Palgrave Macmillan",
              "publishedPlace": "New York",
              "price": 95.99,
              "starRating": 4.8,
              "imageUrl": "http://ec1.images-amazon.com/images/P/1137364815.01._SX220_SCLZZZZZZZ_.jpg"
          },
          {
              "bookId": 4,
              "bookTitle": "French Style: L'accent Francais De La Prose Anglaise ",
              "language": "Frenchh",
              "author": "Gilles Philippe",
              "ISBN": 9782874493249,
              "datePublished": "2016/01",
              "publisher": "Les Impressions Nouvelles",
              "publishedPlace": "Bruxelles",
              "price": 51.25,
              "starRating": 4.0,
              "imageUrl": "http://ec1.images-amazon.com/images/P/2874493244.01._SX220_SCLZZZZZZZ_.jpg"
          },
          {
              "bookId": 5,
              "bookTitle": "Medieval English Literature edited By Beatrice Fannon",
              "language": "English",
              "author": "Beatrice Fannon",
              "ISBN": 9781137469588,
              "datePublished": "2016/10",
              "publisher": "Palgrave",
              "publishedPlace": "New York",
              "price": 28.51,
              "starRating": 3.1,
              "imageUrl": "http://ec1.images-amazon.com/images/P/1137469587.01._SX220_SCLZZZZZZZ_.jpg"
          }]
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
          <SearchBar onTermChange={this.handleBookChange}/>
          <BookList books={this.state.books}/>
        </div>

      </div>
    );
  }
}

export default App;
