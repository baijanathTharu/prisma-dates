import { PrismaClient } from '@prisma/client';
import { createUsers, filterUsersByPassportIssuedDate } from './seeds/user';

const db = new PrismaClient();

async function main() {
  try {
    // filterUsersByPassportIssuedDate(db);
    createUsers(db);
  } catch (error) {
    console.log(error);
  }
}

main();
