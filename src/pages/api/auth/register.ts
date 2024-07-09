import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import clientPromise from "../../../lib/mongodb";
import { IUser } from "../../../models/User";
import validate from "../../../middleware/validate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db();

  const rules = {
    name: "required|string",
    email: "required|email",
    password: "required|string|minLength:6",
  };

  validate(rules)(req, res, async () => {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: IUser = {
      name,
      email,
      password: hashedPassword,
      role: "user",
    };

    const result = await db.collection("users").insertOne(newUser);
    const user = await db.collection("users").findOne({ email});

    if(!user){
      return res.status(500).json({ message: "We encountered an error creating your account" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    res.status(201).json({ token });
  });
}
