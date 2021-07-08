import React, { useState, useEffect } from 'react';
import SearchResultBook from './SearchResultBook.jsx';

const SearchResults = ({bookResults, fetchBooks, collapseSearchResults}) => {

  const [resultsExist, setResultsExist] = useState(false);

  useEffect(() => {
    bookResults.length > 0 ? setResultsExist(true) : setResultsExist(false);
  });

  return (
    <div>
      <div className="search-results">
        {resultsExist && <button className="collapse-search-results-button" onClick={collapseSearchResults}>Collapse Search Results</button>}
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