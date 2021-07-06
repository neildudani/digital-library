const express = require('express');
const app = express();
const PORT = 4500;

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
