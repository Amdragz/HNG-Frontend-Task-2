import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import auth from "../../../middleware/auth";
import validate from "@/middleware/validate";
import { ObjectId } from "mongodb";
import { ICart } from "../../../models/Cart";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db();

  switch (req.method) {
    case "GET":
      auth(async (req: any, res: any) => {
        let cart = await db
          .collection("carts")
          .findOne({ userId: req.user.userId });
        if (!cart) {
          // Create an empty cart if none is found
          const newCart: ICart = {
            userId: req.user.userId,
            items: [],
            totalAmount: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          const createdCart = await db.collection("carts").insertOne(newCart);
          cart = await db
            .collection("carts")
            .findOne({ _id: createdCart.insertedId });
        }
        res.status(200).json(cart);
      })(req, res);
      break;

    case "PUT":
      const rules = {
        productId: "required|string",
        quantity: "required|numeric|min:1",
        options: "array",
        "options.*.name": "required|string",
        "options.*.value": "required|string",
      };

      validate(rules)(req, res, async () => {
        auth(async (req: any, res: any) => {
          const { productId, quantity, options } = req.body;

          try {
            const product = await db
              .collection("products")
              .findOne({ _id: new ObjectId(productId) });
            if (!product) {
              return res
                .status(404)
                .json({ message: `Product with ID ${productId} not found` });
            }

            let productPrice = product.price;

            if (product.options) {
              for (const option of product.options) {
                if (option.required) {
                  const selectedValue = options.find(
                    (opt: any) => opt.name === option.name
                  )?.value;
                  if (!selectedValue) {
                    return res
                      .status(400)
                      .json({ message: `Option ${option.name} is required` });
                  }

                  const optionValue = option.values.find(
                    (value: any) => value.name === selectedValue
                  );
                  if (optionValue?.additionalPrice) {
                    productPrice += optionValue.additionalPrice;
                  }
                }
              }
            }

            const itemTotal = productPrice * quantity;

            const cart = await db
              .collection("carts")
              .findOne({ userId: req.user.userId });
            if (!cart) {
              return res.status(404).json({ message: "Cart not found" });
            }

            const existingItemIndex = cart.items.findIndex(
              (i: any) => i.productId === productId
            );

            if (existingItemIndex !== -1) {
              cart.items[existingItemIndex] = { productId, quantity, options };
            } else {
              cart.items.push({ productId, quantity, options });
            }

            let totalAmount = 0;
            for (const cartItem of cart.items) {
              const itemProduct = await db
                .collection("products")
                .findOne({ _id: new ObjectId(cartItem.productId) });
              if (!itemProduct) continue;

              let itemProductPrice = itemProduct.price;

              if (itemProduct.options) {
                for (const option of itemProduct.options) {
                  if (option.required) {
                    const selectedValue = cartItem.options.find(
                      (opt: any) => opt.name === option.name
                    )?.value;
                    const optionValue = option.values.find(
                      (value: any) => value.name === selectedValue
                    );
                    if (optionValue?.additionalPrice) {
                      itemProductPrice += optionValue.additionalPrice;
                    }
                  }
                }
              }

              totalAmount += itemProductPrice * cartItem.quantity;
            }

            const updatedCart = await db.collection("carts").findOneAndUpdate(
              { userId: req.user.userId },
              {
                $set: { items: cart.items, totalAmount, updatedAt: new Date() },
              },
              { returnDocument: "after", upsert: true }
            );

            const finalCart = await db.collection("carts").findOne({
              _id: updatedCart?._id,
            });

            res.status(200).json(finalCart);
          } catch (error) {
            return res
              .status(404)
              .json({ message: `Product with ID ${productId} not found` });
          }
        })(req, res);
      });
      break;

    case "DELETE":
      auth(async (req: any, res: any) => {
        const { productId } = req.body;

        const cart = await db
          .collection("carts")
          .findOne({ userId: req.user.userId });
        if (!cart) {
          return res.status(404).json({ message: "Cart not found" });
        }

        const updatedItems = cart.items.filter(
          (item: any) => item.productId !== productId
        );
        let totalAmount = 0;

        for (const item of updatedItems) {
          const product = await db
            .collection("products")
            .findOne({ _id: new ObjectId(item.productId) });

          let productPrice = product?.price;

          if (product?.options) {
            for (const option of product.options) {
              if (option.required) {
                const selectedValue = item.options[option.name];
                const optionValue = option.values.find(
                  (value: any) => value.name === selectedValue
                );
                if (optionValue?.additionalPrice) {
                  productPrice += optionValue.additionalPrice;
                }
              }
            }
          }

          totalAmount += productPrice * item.quantity;
        }

        const updatedCart = await db.collection("carts").findOneAndUpdate(
          { userId: req.user.userId },
          {
            $set: { items: updatedItems, totalAmount, updatedAt: new Date() },
          },
          { returnDocument: "after" }
        );
        const finalCart = await db.collection("carts").findOne({
          _id: updatedCart?._id,
        });

        res.status(200).json(finalCart);
      })(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
