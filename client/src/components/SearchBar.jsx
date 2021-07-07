import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({searchBooks, updateSearchTerm}) => {

  return (
    <div className="search-component">
      <input type="text" className="search-bar" placeholder="Search for books.." onChange={updateSearchTerm}></input>
      <button onClick={searchBooks}>Search</button>
    </div>
  )

};

export default SearchBar;