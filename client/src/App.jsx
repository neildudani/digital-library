import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Bookshelf from './components/Bookshelf.jsx';
import SearchResults from './components/SearchResults.jsx';
import SearchBar from './components/SearchBar.jsx';
import axios from 'axios';


const App = () => {

  const [bookResults, setBookResults] = useState([]);


  const searchBooks = (searchTerm) => {
    let options = {
      params: {
        searchTerm: searchTerm
      }
    }
    axios.get('/searchBooks', options)
      .then((books) => {
        console.log('books: ', books.data);
        setBookResults(books.data);
      })
  }

  return (
    <div>
      <SearchBar searchBooks={searchBooks}/>
      <SearchResults bookResults={bookResults}/>
      <Bookshelf />
    </div>
  )

};

ReactDOM.render(<App/>, document.getElementById('app'));