const Book = require('../../database/models.js');

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