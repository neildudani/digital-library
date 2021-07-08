import React, { useState, useEffect } from 'react';

const BookModal = ({book, toggleModal}) => {

  return (
    <div className="modal-overlay">
      <div className="modal">
          <button className="modal-close-button" onClick={toggleModal}>Close</button>
          <h1 className="modal-book-title">{book.title}</h1>
          <img src={book.photo_url} className="modal-image"></img>
      </div>
    </div>
    )
  ;

};

export default BookModal;
