import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import auth from "@/middleware/auth";
import validate from "@/middleware/validate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      try {
        const product = await db
          .collection("products")
          .findOne({ _id: new ObjectId(id as string) });
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
        const relatedProducts = await db
          .collection("products")
          .find({ category: product.category, _id: { $ne: product._id } })
          .toArray();
        res.status(200).json({ product, relatedProducts });
      } catch (error) {
        return res.status(404).json({ message: "Product not found" });
      }
      break;

    case "PUT":
      const rules = {
        name: "required|string",
        shortDescription: "required|string",
        price: "required|numeric",
        category: "required|string",
        htmlContent: "required|string",
        images: "required|array",
        options: "nullable|array",
      };

      validate(rules)(req, res, async () => {
        auth(async (req: any, res: any) => {
          const { name, shortDescription, price, category, htmlContent, images, options } =
            req.body;
          try {
            // Validate options if provided
            if (options && options.length > 0) {
              const isValidOptions = options.every((option: any) => {
                return (
                  option.name &&
                  option.values &&
                  option.values.every(
                    (value: any) =>
                      value.name && typeof value.additionalPrice === "number"
                  ) &&
                  typeof option.required === "boolean"
                );
              });

              if (!isValidOptions) {
                res.status(400).json({ error: "Invalid options" });
                return;
              }
            }

            const updatedProduct = await db
              .collection("products")
              .findOneAndUpdate(
                { _id: new ObjectId(id as string) },
                {
                  $set: {
                    name,
                    shortDescription,
                    price,
                    category,
                    htmlContent,
                    images,
                    options: options || [],
                    updatedAt: new Date(),
                  },
                },
                { returnDocument: "after" }
              );

            const product = await db
              .collection("products")
              .findOne({ _id: updatedProduct?._id });

            if (!product) {
              return res.status(404).json({ message: "Product not found" });
            }

            res.status(200).json(product);
          } catch (error) {
            return res.status(404).json({ message: "Product not found" });
          }
        }, "admin")(req, res);
      });
      break;

    case "DELETE":
      auth(async (req: any, res: any) => {
        try {
          await db
            .collection("products")
            .deleteOne({ _id: new ObjectId(id as string) });
          res.status(204).end();
        } catch (error) {
          res.status(404).json({ message: "Product not found" });
        }
      }, "admin")(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
