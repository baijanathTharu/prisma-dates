import fetch from 'node-fetch';
import { exec } from 'node:child_process';

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    return {
      message: 'FETCH_ERROR',
      status: res.status,
    };
  }
  const data = await res.json();

  return data;
}

const dbs = [
  {
    url: 'mysql://root:admin@localhost:3307/prisma_dates_db?schema=public',
    name: 'one',
  },
  {
    url: 'mysql://root:admin@localhost:3307/prisma_dates_two_db?schema=public',
    name: 'two',
  },
];

async function myScript() {
  // const d = await fetchUsers();
  // console.log('users', d);

  for (let db of dbs) {
    exec(
      `export DATABASE_URL=${db.url} && npx prisma migrate deploy`,
      (err, output) => {
        // once the command has completed, the callback function is called
        if (err) {
          // log and return if we encounter an error
          console.error('could not execute command: ', err);
          throw new Error('Migration error');
        }
        // log the output received from the command
        console.log(`Ran migration for: ${db.name} \n`, output);
      }
    );
  }
}

myScript()
  .then(() => console.log('done'))
  .catch((e) => console.error(e));
