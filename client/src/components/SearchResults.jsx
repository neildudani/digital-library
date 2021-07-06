import React from 'react';
import SearchResultBook from './SearchResultBook.jsx';

const SearchResults = ({bookResults}) => {

  return (
    <div>
      <div className="search-results">
        {
          bookResults.map((book, index) => {
            return <SearchResultBook key={index} book={book}/>
          })
        }
      </div>
    </div>
  )

};

export default SearchResults;