import { ObjectId } from "mongodb";

export interface IBlog {
  _id?: ObjectId;
  title: string;
  content: string;
  category: string;
  author: string;
  createdAt: Date;
}
