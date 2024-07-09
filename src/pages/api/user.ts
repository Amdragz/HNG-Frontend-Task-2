import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import jwt from 'jsonwebtoken';
import auth from '@/middleware/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  auth(async (req: any, res: any) => {
    const client = await clientPromise;
    const db = client.db();

    switch (req.method) {
      case "GET":
        const user = await db
          .collection("users")
          .find({ email: req.user?.email })
          .project({ password: 0 })
          .toArray();
        res.status(200).json(user);
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }, "all")(req, res);
}
