import React from 'react';
import SearchResultBook from './SearchResultBook.jsx';

const SearchResults = ({bookResults, fetchBooks}) => {

  return (
    <div>
      <div className="search-results">
        {
          bookResults.map((book, index) => {
            return <SearchResultBook key={index} book={book} fetchBooks={fetchBooks}/>
          })
        }
      </div>
    </div>
  )

};

export default SearchResults;