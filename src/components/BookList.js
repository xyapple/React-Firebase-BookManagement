import React from 'react';
import BookItem from './BookItem';

const BookList = (props) => {
  const bookItems = props.books.map((book) =>{
    return <BookItem key={book.id} book = {book} />
  });

   return (
     <ul>{bookItems}</ul>
   );
};

export default BookList;
