import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import { IBlog } from "@/models/Blog";
import { finalProducts, IProduct } from "@/models/Product";
import { faker } from "@faker-js/faker";
import { IUser } from "../../models/User";
import generateRandomHTML from "@/lib/generateRandomHTML";
import { NextApiRequest, NextApiResponse } from "next/types";

const publicImages = [
  "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5717985/pexels-photo-5717985.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600",
  
];

export default async function seed(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const key = req.body.key;
  if(key != process.env.SEEDER_KEY){
    res.status(403).json({ message: "Seeding unsuccessful" });
    return;
  }
  const client = await clientPromise;
  const db = client.db();

  // Clear existing data
  await db.collection("users").deleteMany({});
  await db.collection("blogs").deleteMany({});
  await db.collection("products").deleteMany({});
  await db.collection("carts").deleteMany({});

  // Seed users
  const adminPassword = await bcrypt.hash("admin", 10);
  const users: IUser[] = [
    {
      name: "admin",
      email: "admin@example.com",
      password: adminPassword,
      role: "admin",
    },
  ];
  const insertedUsers = await db.collection("users").insertMany(users);
  const adminUserId = insertedUsers.insertedIds[0];

  // Seed blogs
  const blogs: IBlog[] = Array.from({ length: 100 }, () => ({
    title: faker.lorem.sentence(),
    content: generateRandomHTML(5000), // Generate 5000 characters of HTML content
    author: adminUserId.toString(),
    category: faker.lorem.word(),
    createdAt: new Date(),
  }));
  await db.collection("blogs").insertMany(blogs);

  // Seed products
  // const products: IProduct[] = Array.from({ length: 100 }, () => {
  //   const randomImages = [
  //     publicImages[Math.floor(Math.random() * publicImages.length)],
  //     publicImages[Math.floor(Math.random() * publicImages.length)],
  //   ];
  //   return {
  //     name: faker.commerce.productName(),
  //     shortDescription: faker.commerce.productDescription(),
  //     price: parseFloat(faker.commerce.price(1000, 10000)),
  //     category: faker.commerce.department(),
  //     images: randomImages,
  //     htmlContent: generateRandomHTML(1000), // Generate 1000 characters of HTML content
  //     options: [],
  //     createdAt: new Date(),
  //   };
  // });
  const products = finalProducts.map((product) => {
    return {
      name: product.name,
      shortDescription: product.shortDescription,
      htmlContent: product.htmlContent,
      price: product.price,
      category: product.category,
      images: product.images,
      options: [],
      createdAt: new Date(),
    }
  });
  await db.collection("products").insertMany(products);

  console.log("Database seeded successfully");
  res.status(200).json({ message: "Seeding successful" });
}

// seed().catch((error) => {
//   console.error("Error seeding database:", error);
//   process.exit(1);
// });
