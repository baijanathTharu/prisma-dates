import { PrismaClient } from '@prisma/client';
import * as express from 'express';

const db = new PrismaClient();

const app = express();

app.get('/users', async (req, res) => {
  const users = await db.user.findMany();
  res.json(users);
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
