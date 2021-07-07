import React, { useState, useEffect } from 'react';

const Bookshelf = ({library}) => {

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
            <div className="book" key={index}>
              <h3>{book.title}</h3>
            </div>
          ))}
        </div>
      ))}
    </div>
    )
  ;

};

export default Bookshelf;

