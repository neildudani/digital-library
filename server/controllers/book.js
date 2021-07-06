const Book = require('../../database/models.js');
const { token } = require('../config.js');
const axios = require('axios');

exports.addBook = (req, res) => {

  let doc = {
    title: 'Thinking Fast And Slow',
    author: 'Daniel Kahneman',
    rating: 5,
    lesson: 'Important to activate system 2 thinking',
    summary: 'Test summary blah blah blah'
   };

  let newBook = new Book(doc);

  newBook.save(function(err, doc) {
    if (err) {
      return console.error(err)
    } else {
      res.send('add!');
    }
  });

};

exports.searchBooks = async (req, res) => {

  let searchTerm = req.query.searchTerm;
  let refactoredSearchTerm = searchTerm.replaceAll(' ', '+');
  let url = `https://www.googleapis.com/books/v1/volumes?q=${refactoredSearchTerm}&maxResults=10&printType=books&projection=lite`;
  let options = {
    headers: {
      key: token
    }
  }
  let books = await axios.get(url, options);
  res.send(books.data.items);
};