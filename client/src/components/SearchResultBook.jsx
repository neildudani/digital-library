import React from 'react';
import comingSoonPhoto from './../images/image-coming-soon.jpeg';

const SearchResultBook = ({book}) => {

  let title = book.volumeInfo.title ? book.volumeInfo.title : 'Title unavailable';
  let author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Author unavailable';
  let src = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : comingSoonPhoto

  return (
    <div className="search-result-book">
      <img className="search-result-book-image" src={src}></img>
      <p className="search-result-book-title">{title}</p>
      <p className="search-result-book-author">{author}</p>
    </div>
  )

};

export default SearchResultBook;

