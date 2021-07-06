import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({searchBooks}) => {

  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  return (
    <div className="search-component">
      <input type="text" className="search-bar" placeholder="Search for books.." onChange={updateSearchTerm}></input>
      <button onClick={() => searchBooks(searchTerm)}>Search</button>
    </div>
  )

};

export default SearchBar;