const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR (255),
    user VARCHAR (255),
    added DATE
);

INSERT INTO messages (text, user, added)
    VALUES
        ('Hi there!', 'Amando', 2024-11-10),
        ('Hello World!', 'Charles', 2024-11-10);
`;

async function main() {
  console.log('seeding...');
  const client = new Client();
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
