import React, { useState, useEffect } from 'react';
import comingSoonPhoto from './../images/image-coming-soon.jpeg';
import axios from 'axios';

const SearchResultBook = ({book, fetchBooks}) => {

  const [toggleAddToLibrary, setToggleAddToLibrary] = useState(false);

  let title = book.volumeInfo.title ? book.volumeInfo.title : 'Title unavailable';
  let author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Author unavailable';
  let src = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : comingSoonPhoto

  const addToLibrary = () => {
    let options = {
      title: title,
      author: author,
      photo_url: src
    };

    axios.post('/addBook', options)
      .then(() => {
          fetchBooks();
      })
  };


  return (
    <div className="search-result-book" onMouseEnter={() => setToggleAddToLibrary(true)} onMouseLeave={() => setToggleAddToLibrary(false)}>
      {toggleAddToLibrary && <button className="add-to-library-button" onClick={addToLibrary}>Add to Library</button>}
      <img className="search-result-book-image" src={src}></img>
      <p className="search-result-book-title">{title}</p>
      <p className="search-result-book-author">{author}</p>
    </div>
  )

};

export default SearchResultBook;

