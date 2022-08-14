import { Prisma, PrismaClient } from '@prisma/client';
import * as express from 'express';
import * as qs from 'qs';

const db = new PrismaClient();

const app = express();

app.get('/users', async (req: express.Request, res: express.Response) => {
  const filter = req.query?.filter as string;

  const where = qs.parse(filter) as Prisma.UserWhereInput;

  const users = await db.user.findMany({
    where: where,
  });
  res.json(users);
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
