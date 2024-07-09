import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import clientPromise from "../../../lib/mongodb";
import { IUser } from "../../../models/User";
import validate from "../../../middleware/validate";
import rateLimit from "@/middleware/rateLimit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db();

  const rules = {
    email: "required|email",
    password: "required|string",
  };

  rateLimit(req, res, async () => {
    validate(rules)(req, res, async () => {
      const { email, password } = req.body;

      const user = (await db.collection("users").findOne({ email })) as IUser;
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { userId: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" }
      );

      res.status(200).json({ token });
    });
  });
}
