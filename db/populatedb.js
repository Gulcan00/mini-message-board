const { argv } = require('node:process');
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR (255),
    username VARCHAR (255),
    added DATE
);

INSERT INTO messages (text, username, added)
    VALUES
        ('Hi there!', 'Amando', '2024-11-10'),
        ('Hello World!', 'Charles', '2024-11-10')
`;

async function main() {
  console.log('seeding...');
  const [node, script, url] = argv;

  const client = new Client({
    connectionString: url,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
