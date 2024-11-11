require('dotenv').config();
const express = require('express');
const PORT = 3000;
const app = express();

const indexRouter = require('./routes/indexRouter');

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
