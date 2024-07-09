import { ObjectId } from "mongodb";
import { IOption, IProduct } from "./Product";

export interface ICart {
  _id?: ObjectId;
  userId: ObjectId;
  items: IProduct[];
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
};

export interface ICartProduct {
  _id?: ObjectId;
  name: string;
  shortDescription: string;
  htmlContent: string;
  price: number;
  category: string;
  images: string[];
  options?: IOption[];
  quantity: number;
  createdAt: Date;
}