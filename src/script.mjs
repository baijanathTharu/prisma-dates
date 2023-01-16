import { execa } from 'execa';
import fetch from 'node-fetch';

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

async function myScript() {
  const { stdout } = await execa('echo', ['from the script file']);
  console.log(stdout);

  const d = await fetchUsers();
  console.log('users', d);
}

myScript()
  .then(() => console.log('done'))
  .catch((e) => console.error(e));
