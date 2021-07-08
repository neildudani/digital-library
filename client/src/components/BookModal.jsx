import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookModal = ({book, toggleModal, fetchBooks}) => {

  const [tempLesson, setTempLesson] = useState(book.lesson);
  const [tempSummary, setTempSummary] = useState(book.summary);

  const updateLesson = (e) => {
    setTempLesson(e.target.value);
  }

  const updateSummary = (e) => {
    setTempSummary(e.target.value);
  }

  const postReview = () => {

    let options = {
      title: book.title,
      lesson: tempLesson,
      summary: tempSummary
    };

    axios.post('/addReview', options)
      .then(() => {
        fetchBooks();
      })
      .then(() => {
        var successMessage = document.createElement('div');
        successMessage.innerHTML = 'Saved your changes!';
        successMessage.id = 'save-changes-message';
        document.getElementById('modal-save-changes-container').append(successMessage);
        setTimeout(() => {
          if (document.getElementById('save-changes-message')) {
            document.getElementById('save-changes-message').remove();
          }
      }, 2000)
  })
};

  return (
    <div className="modal-overlay">
      <div className="modal">
          <button className="modal-close-button" onClick={toggleModal}>Close</button>
          <h2 className="modal-book-title">{book.title}</h2>
          <h5 className="modal-book-author">{book.author}</h5>
          <img src={book.photo_url} className="modal-image"></img>
          <div>
            <label htmlFor="lesson">Lesson</label>
            <textarea id="lesson" value={tempLesson} onChange={updateLesson}/>
          </div>
          <div>
            <label htmlFor="summary">Summary</label>
            <textarea id="summary" value={tempSummary} onChange={updateSummary}></textarea>
          </div>
          <div id="modal-save-changes-container">
            <button className="modal-save-changes-button" id="save-changes-button" onClick={postReview}>Save Changes</button>
          </div>
      </div>
    </div>
    )
  ;

};

export default BookModal;
