import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import { IOption, IProduct } from "../../../models/Product";
import auth from "../../../middleware/auth";
import validate from "../../../middleware/validate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db();

  switch (req.method) {
    case "GET":
      try {
        const products = await db.collection("products").find({}).toArray();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
      }
      break;

    case "POST":
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
          const {
            name,
            shortDescription,
            price,
            category,
            htmlContent,
            images,
            options,
          } = req.body;
          const newProduct: IProduct = {
            name,
            shortDescription,
            price,
            category,
            htmlContent,
            images,
            createdAt: new Date(),
          };

          try {
            if (options && options.length > 0) {
              const isValidOptions = options.every((option: IOption) => {
                return (
                  option.name &&
                  option.values &&
                  option.values.every(
                    (value) =>
                      value.name && typeof value.additionalPrice === "number"
                  ) &&
                  typeof option.required === "boolean"
                );
              });

              if (isValidOptions) {
                const addedProduct = await db
                  .collection("products")
                  .insertOne(newProduct);
                await db
                  .collection("products")
                  .updateOne(
                    { _id: addedProduct.insertedId },
                    { $set: { options } }
                  );
                res.status(201).json({
                  ...newProduct,
                  _id: addedProduct.insertedId,
                  options,
                });
              } else {
                res.status(400).json({ error: "Invalid options" });
                return;
              }
            } else {
              const addedProduct = await db
                .collection("products")
                .insertOne(newProduct);
              res
                .status(201)
                .json({ ...newProduct, _id: addedProduct.insertedId, options });
            }
          } catch (error) {
            res.status(500).json({ error: "Failed to create product" });
          }
        }, "admin")(req, res);
      });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
