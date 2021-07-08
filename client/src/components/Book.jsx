import React, { useState, useEffect } from 'react';
import BookModal from './BookModal.jsx';
import classNames from 'classnames';
import axios from 'axios';

const Book = ({book, fetchBooks}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  const setRating = (e) => {

    let rating = null;
    if (e.target.classList.contains('three-star')) {
      rating = 3;
    } else if (e.target.classList.contains('two-star')) {
      rating = 2;
    } else if (e.target.classList.contains('one-star')) {
      rating = 1;
    }

    let options = {
      title: book.title,
      author: book.author,
      rating: rating
    };

    axios.post('/setRating', options)
      .then(() => {
        fetchBooks();
      })

  };

  let classNamesObj = [];

  for (var i = 0; i <= 2; i++) {

    let colourYellow = false;

    if (i === 0 && book.rating === 3) {
      colourYellow = true;
    } else if (i === 1 && book.rating >= 2) {
      colourYellow = true;
    } else if (i === 2 && book.rating >= 1) {
      colourYellow = true;
    }

    let classes = classNames({
      'fas fa-star': true,
      'three-star': i === 0,
      'two-star': i === 1,
      'one-star': i === 2,
      'yellow-star': colourYellow,
      'gray-star': !colourYellow
    });
    classNamesObj.push(classes);
  }

  return (
    <div>
      <div className="book-container">
          <div className="stars">
            <i className={classNamesObj[0]} onClick={setRating}></i>
            <i className={classNamesObj[1]} onClick={setRating}></i>
            <i className={classNamesObj[2]} onClick={setRating}></i>
          </div>
        <div className="book" onClick={toggleModal} style={{background: book.colour}}>
          <h3>{book.title}</h3>
        </div>
      </div>
      {modalOpen && <BookModal book={book} toggleModal={toggleModal} fetchBooks={fetchBooks}/>}
    </div>
    )
  ;

};

export default Book;
