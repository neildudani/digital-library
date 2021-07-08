import React, { useState, useEffect } from 'react';
import Book from './Book.jsx';

const Bookshelf = ({library, fetchBooks}) => {

  //refactor library into shelves
  let shelves = [];
  for (var i = 0; i < library.length; i+=20) {
    let shelf = [];
    for (var j = i; j < i + 20; j++) {
      if (j < library.length) {
        shelf.push(library[j]);
      }
    }
    shelves.push(shelf);
  }


  return (
    <div>
      <hr className="bookshelf-line-break"></hr>
      {shelves.map((shelf, index) => (
        <div className="bookshelf" key={index}>
          {shelf.map((book, index) => (
            <Book key={index} book={book} fetchBooks={fetchBooks}/>
          ))}
        </div>
      ))}
    </div>
    )
  ;

};

export default Bookshelf;

