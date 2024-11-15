require('dotenv').config();
const express = require('express');
const PORT = 3000;
const app = express();

const messagesRouter = require('./routes/messagesRouter');

app.use(express.urlencoded({ extended: true }));

app.use('/', messagesRouter);

app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
