import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";
import validate from "@/middleware/validate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db();
  const { id } = req.query;

  switch (req.method) {
    case "POST":
      const rules = {
        stars: "required|numeric|min:1|max:5",
        comment: "required|string",
      };
      validate(rules)(req, res, async () => {
      const { userId, stars, comment } = req.body;
      const review = {
        productId: new ObjectId(id as string),
        userId: new ObjectId(userId),
        stars,
        comment,
        createdAt: new Date(),
      };

      await db.collection("reviews").insertOne(review);
      res.status(201).json(review);
    });
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
