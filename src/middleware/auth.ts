import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb";

interface UserPayload {
  userId: ObjectId;
  role: string;
}

export default function auth(
  handler: Function,
  role: "admin" | "user" | "all" = "user"
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
      req.user = payload;

      if (role === "admin" && !(req.user.role === "admin" || req.user.role === "all")) {
        return res.status(403).json({ message: "Forbidden" });
      }

      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  };
}
