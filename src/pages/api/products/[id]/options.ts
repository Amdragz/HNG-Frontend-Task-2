import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db();
  const { id } = req.query;

  switch (req.method) {
    case "POST":
      const { name, values, required } = req.body;
      const option = { name, values, required };

      const result = await db
        .collection("products")
        .updateOne(
          { _id: new ObjectId(id as string) },
          { $addToSet: { options: option } }
        );

      if (result.matchedCount === 0) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(201).json(option);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
