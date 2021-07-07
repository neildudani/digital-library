const Book = require('../../database/models.js');
const { token } = require('../config.js');
const axios = require('axios');

exports.addBook = (req, res) => {

  let doc = {
    title: req.body.title,
    author: req.body.author,
    rating: null,
    lesson: '',
    summary: ''
  };

  Book.find({title: req.body.title}).exec((error, book) => {

    if (error) {
      console.log('error: ', error);
      res.send('Please try again');
    } else {
      if (book.length > 0) {
        res.send('You already have a copy of this book in your library');
      } else {
        let newBook = new Book(doc);
        newBook.save(function(error, doc) {
          if (error) {
            console.log('error: ', error);
            res.send('Please try again');
          } else {
            res.send('Successfully added book to library!');
          }
        });
      }
    }
  })

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

exports.fetchBooks = (req, res) => {

  Book.find({}).exec((error, books) => {
    if (error) {
      console.log('error: ', error);
      res.send('Unable to fetch books!');
    } else {
      console.log('books: ', books);
      res.send(books);
    }
  })

};