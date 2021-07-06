import React from 'react';
import comingSoonPhoto from './../images/image-coming-soon.jpeg';

const SearchResultBook = ({book}) => {

  let src = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : comingSoonPhoto

  return (
    <div className="search-result-book">
      <img className="search-result-book-image" src={src}></img>
      <p className="search-result-book-title">{book.volumeInfo.title}</p>
      <p className="search-result-book-author">{book.volumeInfo.authors[0]}</p>
    </div>
  )

};

export default SearchResultBook;

