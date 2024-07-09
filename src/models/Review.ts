import { ObjectId } from "mongodb";

export interface IReview {
  _id?: ObjectId;
  productId: ObjectId;
  userId: ObjectId;
  stars: number;
  comment: string;
  createdAt: Date;
}
