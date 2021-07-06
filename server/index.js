const express = require('express');
const app = express();
const PORT = 4500;
const db = require('../database/db.js');
const { addBook } = require('./controllers/book.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.get('/addBook', addBook);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

