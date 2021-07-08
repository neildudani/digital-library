import React, { useState, useEffect } from 'react';
import Book from './Book.jsx';

const Bookshelf = ({library, fetchBooks}) => {

  //refactor library into shelves
  let shelves = [];
  for (var i = 0; i < library.length; i+=15) {
    let shelf = [];
    for (var j = i; j < i + 15; j++) {
      if (j < library.length) {
        shelf.push(library[j]);
      }
    }
    shelves.push(shelf);
  }

  return (
    <div>
      {shelves.map((shelf, index) => (
        <div className="bookshelf" key={index}>
          {shelf.map((book, index) => (
            <Book key={index} book={book} fetchBooks={fetchBooks} colourIndex={index % 4}/>
          ))}
        </div>
      ))}
    </div>
    )
  ;

};

export default Bookshelf;

