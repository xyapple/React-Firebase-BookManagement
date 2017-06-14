import React from 'react';

const BookItem = (book) =>{
  return (
    <li>
      <img src={book.book.imageUrl} />
    </li>
  )
}
export default BookItem
