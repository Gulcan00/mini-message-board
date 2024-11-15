const pool = require('./pool.js');

async function getMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ]);
  return rows[0];
}

async function createMessage({ messageText, messageUser }) {
  await pool.query(
    'INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)',
    [messageText, messageUser, new Date()]
  );
}

module.exports = {
  getMessages,
  getMessage,
  createMessage,
};
