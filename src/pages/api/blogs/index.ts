import { IBlog } from './../../../models/Blog';
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import auth from "../../../middleware/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db();

  switch (req.method) {
    case "GET":
      const blogs = await db.collection("blogs").find({}).toArray();
      res.status(200).json(blogs);
      break;
    case "POST":
      auth(async (req: any, res: any) => {
        const { title, content, category } = req.body;
        const newBlog: IBlog = {
          title,
          content,
          category,
          author: req.user.userId,
          createdAt: new Date(),
        };

        await db.collection("blogs").insertOne(newBlog);
        res.status(201).json(newBlog);
      }, "admin")(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
