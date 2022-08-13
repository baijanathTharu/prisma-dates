import { PrismaClient } from '@prisma/client';
import { createUsers, getUsers } from './seeds/user';

const db = new PrismaClient();

function main() {
  try {
    createUsers(db);
    getUsers(db);
  } catch (error) {
    console.log(error);
  }
}

main();
