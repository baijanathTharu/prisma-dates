import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const users = [
  {
    name: 'John Doe',
    dateOfBirth: '1990-01-01',
  },
  {
    name: 'Jane Doe',
    dateOfBirth: '1994-10-01',
  },
];

async function createUsers() {
  await db.user.createMany({
    data: users,
  });
}

async function getUsers() {
  const users = await db.user.findMany();
  console.log(JSON.stringify(users, null, 2));
}

function main() {
  try {
    createUsers();
  } catch (error) {
    console.log(error);
  }
}

main();
