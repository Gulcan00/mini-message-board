const { Router } = require('express');
const indexRouter = Router();

const messages = [
  {
    text: '',
    user: '',
    added: new Date(),
  },
  {
    text: '',
    user: '',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

indexRouter.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

indexRouter.post('/new', (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

indexRouter.get('/:index', (req, res) => {
  const index = !isNaN(req.params.index) ? Number(req.params.index) : -1;
  if (index >= 0 && index < messages.length) {
    res.render('detail', { title: 'Message Detail', message: messages[index] });
  } else {
    res.redirect('/');
    console.log('invalid index');
  }
});

module.exports = indexRouter;
