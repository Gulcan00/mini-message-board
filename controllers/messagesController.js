const db = require('../db/queries');

async function getMessages(req, res) {
  const messages = db.getMessages();
  res.render('index', { title: 'Mini Messageboard', messages });
}

async function createMessageGet(req, res) {
  res.render('form', { title: 'New Message' });
}

async function createMessagePost(req, res) {
  const { messageText, messageUser } = req.body;
  db.createMessage({ messageText, messageUser });
  res.redirect('/');
}

async function getMessage(req, res) {
  const id = !isNaN(req.params.id) ? Number(req.params.id) : -1;
  const message = db.getMessage(id);
  if (message) {
    res.render('detail', { title: 'Message Detail', message });
  } else {
    res.redirect('/');
    console.log('invalid index');
  }
}

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
  getMessage,
};
