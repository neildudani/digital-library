const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  photo_url: String,
  rating: Number,
  lesson: String,
  summary: String,
  colour: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;