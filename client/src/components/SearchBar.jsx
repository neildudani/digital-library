import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({searchBooks, updateSearchTerm, searchTerm}) => {

  return (
    <div className="search-component">
      <input type="text" className="search-bar" placeholder="Search for books..." onChange={updateSearchTerm} value={searchTerm}></input>
      <button className="search-button" onClick={searchBooks}>Search</button>
    </div>
  )

};

export default SearchBar;