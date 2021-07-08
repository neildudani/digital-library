import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Bookshelf from './components/Bookshelf.jsx';
import SearchResults from './components/SearchResults.jsx';
import SearchBar from './components/SearchBar.jsx';
import axios from 'axios';


const App = () => {

  const [bookResults, setBookResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [library, setLibrary] = useState([]);

  const fetchBooks = () => {
    axios.get('/fetchBooks')
      .then((books) => {
        setLibrary(books.data);
      })
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const updateSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const searchBooks = () => {
    let options = {params: {searchTerm: searchTerm}};
    if (searchTerm === '') {return;}
    axios.get('/searchBooks', options)
      .then((books) => {
        setBookResults(books.data);
      })
      .then(() => {
        setSearchTerm('');
      })
  };

  const collapseSearchResults = () => {
    setBookResults([]);
  }

  return (
    <div>
      <SearchBar searchBooks={searchBooks} updateSearchTerm={updateSearchTerm} searchTerm={searchTerm}/>
      <SearchResults bookResults={bookResults} fetchBooks={fetchBooks} collapseSearchResults={collapseSearchResults}/>
      <Bookshelf library={library} fetchBooks={fetchBooks}/>
    </div>
  )

};

ReactDOM.render(<App/>, document.getElementById('app'));