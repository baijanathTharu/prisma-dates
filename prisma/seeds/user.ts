import { Prisma, PrismaClient } from '@prisma/client';
import * as casual from 'casual';

const users: Prisma.UserCreateManyInput[] = Array(1000)
  .fill(0)
  .map(() => ({
    name: casual.name,
    dateOfBirth: new Date(casual.date('YYYY-MM-DD')),
    passportIssuedDate: casual.date('YYYY-MM-DD'),
  }));

export async function createUsers(db: PrismaClient) {
  await db.user.createMany({
    data: users,
  });
}

export async function getUsers(db: PrismaClient) {
  const users = await db.user.findMany();
  console.log(JSON.stringify(users, null, 2));
}

export async function filterUsersByPassportIssuedDate(db: PrismaClient) {
  const users = await db.user.findMany({
    where: {
      passportIssuedDate: {
        gte: '1999-12-01',
        lte: '2000-01-01',
      },
    },
  });
  console.log(JSON.stringify(users, null, 2));
  console.log('data count', users.length);
}
