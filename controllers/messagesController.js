const db = require('../db/queries');

async function getMessages(req, res) {
  const messages = await db.getMessages();
  res.render('index', { title: 'Mini Messageboard', messages });
}

async function createMessageGet(req, res) {
  res.render('form', { title: 'New Message' });
}

async function createMessagePost(req, res) {
  const { messageText, messageUser } = req.body;
  await db.createMessage({ messageText, messageUser });
  res.redirect('/');
}

async function getMessage(req, res) {
  const id = !isNaN(req.params.id) ? Number(req.params.id) : -1;
  const message = await db.getMessage(id);
  if (message) {
    res.render('detail', { title: 'Message Detail', message });
  } else {
    res.redirect('/');
  }
}

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
  getMessage,
};
