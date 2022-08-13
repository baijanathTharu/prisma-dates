import { PrismaClient } from '@prisma/client';
import { filterUsersByPassportIssuedDate } from './seeds/user';

const db = new PrismaClient();

async function main() {
  try {
    filterUsersByPassportIssuedDate(db);
  } catch (error) {
    console.log(error);
  }
}

main();
