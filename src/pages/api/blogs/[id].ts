import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
import auth from "../../../middleware/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const blog = await db
        .collection("blogs")
        .findOne({ _id: new ObjectId(id as string) });
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      const relatedBlogs = await db
        .collection("blogs")
        .find({ category: blog.category, _id: { $ne: blog._id } })
        .toArray();
      res.status(200).json({ blog, relatedBlogs });

      break;
    case "PUT":
      auth(async (req: any, res: any) => {
        const { title, content } = req.body;
        const updatedBlog = await db
          .collection("blogs")
          .findOneAndUpdate(
            { _id: new ObjectId(id as string) },
            { $set: { title, content, updatedAt: new Date() } },
            { returnDocument: "after" }
          );

        if (!updatedBlog?.value) {
          return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json(updatedBlog.value);
      }, "admin")(req, res);
      break;
    case "DELETE":
      auth(async (req: any, res: any) => {
        await db
          .collection("blogs")
          .deleteOne({ _id: new ObjectId(id as string) });
        res.status(204).end();
      }, "admin")(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
