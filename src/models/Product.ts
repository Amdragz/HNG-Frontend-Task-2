import { ObjectId } from "mongodb";

export interface IOptionValue {
  name: string;
  additionalPrice?: number;
}

export interface IOption {
  name: string;
  values: IOptionValue[];
  required: boolean;
}

export interface IProduct {
  _id?: ObjectId;
  name: string;
  shortDescription: string;
  htmlContent: string;
  price: number;
  category: string;
  images: string[];
  options?: IOption[];
  createdAt: Date;
}

export const ProductMock: IProduct = {
  _id: new ObjectId(),
  name: "Mock Product",
  shortDescription: "This is a Mock Product For testing Purposes",
  htmlContent: "<h1>Product</h1>",
  price: 5549.99,
  category: "Mock",
  images: [
    "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5717985/pexels-photo-5717985.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
  createdAt: new Date(),
};

export const finalProducts: IProduct[] = [
  {
    _id: new ObjectId(),
    name: "Wildflower Totebag",
    shortDescription:
      "Carry a touch of summer with you everywhere with this charming floral canvas tote bag! Featuring a vibrant blue and yellow daisy design, this eco-friendly bag is perfect for daily errands, beach outings, or simply adding a splash of color to your outfit. Made from durable, lightweight fabric, it’s as functional as it is fashionable. 🌻✨",
    htmlContent: ` <h2 className="text-gray-900 text-[24px] font-medium">Introducing the Blooming Delight Tote Bag: A Burst of Joy and Practicality
  </h2>
  <p className="text-gray-700 font-normal">
    Embrace the vibrant essence of nature with the Blooming Delight Tote Bag, an eye-catching tribute to the beauty and cheerfulness of a flower garden in full bloom. This tote is a must-have for lovers of floral designs and those who value the perfect blend of style and functionality, combining daily utility with a splash of joyful artistry.
  </p>
  <p className="text-gray-700 font-normal">
    Crafted with durability and aesthetics in mind, the tote features a striking floral pattern in bold blue and yellow, meticulously designed to evoke the happiness and energy of a sunny day among flowers. The spacious interior and robust construction make it the perfect companion for a variety of activities, whether you’re carrying books, groceries, or beach essentials.
  </p>
  <p className="text-gray-700 font-normal">
    More than just a useful accessory, the Blooming Delight Tote Bag is a celebration of life’s simple pleasures and the beauty that surrounds us. It’s an accessory that adds a touch of joy to your daily routine, making it an excellent gift or a personal treat for anyone who delights in the charm of floral designs and the vibrancy they bring. Carry the essence of a blooming garden with you, wherever your adventures may take you.
  </p>
  <ul className="flex flex-col font-normal text-gray-700">
    <li className="text-gray-900 font-semibold">Eco-Friendly Blooming Delight Tote Bag</li>
    <li><span className="text-gray-900 font-semibold">Dimensions:</span> 15 x 14 inches  </li>
    <li><span className="text-gray-900 font-semibold">Handle Length:</span> 12 inches </li>
    <li><span className="text-gray-900 font-semibold">Color:</span> White with Blue and Yellow Floral Pattern</li>
    <li><span className="text-gray-900 font-semibold">Material:</span> Canvas Tote, 100% Cotton</li>
    <li><span className="text-gray-900 font-semibold">Order Processing Time:</span> 24-48 hours </li>
    <li><span className="text-gray-900 font-semibold">Overall Delivery Period:</span> 7-10 Days </li>
    <li><span className="text-gray-900 font-semibold">Tracking Link:</span> A tracking link will be provided via email and SMS after the product is dispatched.</li>
  </ul> `,
    price: 4800,
    category: "Tote Bags",
    images: [
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    name: "Delight Tote Bag",
    shortDescription:
      "Carry a touch of summer with you everywhere with this charming floral canvas tote bag! Featuring a vibrant blue and yellow daisy design, this eco-friendly bag is perfect for daily errands, beach outings, or simply adding a splash of color to your outfit. Made from durable, lightweight fabric, it’s as functional as it is fashionable. 🌻✨",
    htmlContent: ` <h2 className="text-gray-900 text-[24px] font-medium">Introducing the Blooming Delight Tote Bag: A Burst of Joy and Practicality
  </h2>
  <p className="text-gray-700 font-normal">
    Embrace the vibrant essence of nature with the Blooming Delight Tote Bag, an eye-catching tribute to the beauty and cheerfulness of a flower garden in full bloom. This tote is a must-have for lovers of floral designs and those who value the perfect blend of style and functionality, combining daily utility with a splash of joyful artistry.
  </p>
  <p className="text-gray-700 font-normal">
    Crafted with durability and aesthetics in mind, the tote features a striking floral pattern in bold blue and yellow, meticulously designed to evoke the happiness and energy of a sunny day among flowers. The spacious interior and robust construction make it the perfect companion for a variety of activities, whether you’re carrying books, groceries, or beach essentials.
  </p>
  <p className="text-gray-700 font-normal">
    More than just a useful accessory, the Blooming Delight Tote Bag is a celebration of life’s simple pleasures and the beauty that surrounds us. It’s an accessory that adds a touch of joy to your daily routine, making it an excellent gift or a personal treat for anyone who delights in the charm of floral designs and the vibrancy they bring. Carry the essence of a blooming garden with you, wherever your adventures may take you.
  </p>
  <ul className="flex flex-col font-normal text-gray-700">
    <li className="text-gray-900 font-semibold">Eco-Friendly Blooming Delight Tote Bag</li>
    <li><span className="text-gray-900 font-semibold">Dimensions:</span> 15 x 14 inches  </li>
    <li><span className="text-gray-900 font-semibold">Handle Length:</span> 12 inches </li>
    <li><span className="text-gray-900 font-semibold">Color:</span> White with Blue and Yellow Floral Pattern</li>
    <li><span className="text-gray-900 font-semibold">Material:</span> Canvas Tote, 100% Cotton</li>
    <li><span className="text-gray-900 font-semibold">Order Processing Time:</span> 24-48 hours </li>
    <li><span className="text-gray-900 font-semibold">Overall Delivery Period:</span> 7-10 Days </li>
    <li><span className="text-gray-900 font-semibold">Tracking Link:</span> A tracking link will be provided via email and SMS after the product is dispatched.</li>
  </ul> `,
    price: 4800,
    category: "Tote Bags",
    images: [
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    name: "Artsy Tote Bag",
    shortDescription:
      "Carry a touch of summer with you everywhere with this charming floral canvas tote bag! Featuring a vibrant blue and yellow daisy design, this eco-friendly bag is perfect for daily errands, beach outings, or simply adding a splash of color to your outfit. Made from durable, lightweight fabric, it’s as functional as it is fashionable. 🌻✨",
    htmlContent: ` <h2 className="text-gray-900 text-[24px] font-medium">Introducing the Blooming Delight Tote Bag: A Burst of Joy and Practicality
  </h2>
  <p className="text-gray-700 font-normal">
    Embrace the vibrant essence of nature with the Blooming Delight Tote Bag, an eye-catching tribute to the beauty and cheerfulness of a flower garden in full bloom. This tote is a must-have for lovers of floral designs and those who value the perfect blend of style and functionality, combining daily utility with a splash of joyful artistry.
  </p>
  <p className="text-gray-700 font-normal">
    Crafted with durability and aesthetics in mind, the tote features a striking floral pattern in bold blue and yellow, meticulously designed to evoke the happiness and energy of a sunny day among flowers. The spacious interior and robust construction make it the perfect companion for a variety of activities, whether you’re carrying books, groceries, or beach essentials.
  </p>
  <p className="text-gray-700 font-normal">
    More than just a useful accessory, the Blooming Delight Tote Bag is a celebration of life’s simple pleasures and the beauty that surrounds us. It’s an accessory that adds a touch of joy to your daily routine, making it an excellent gift or a personal treat for anyone who delights in the charm of floral designs and the vibrancy they bring. Carry the essence of a blooming garden with you, wherever your adventures may take you.
  </p>
  <ul className="flex flex-col font-normal text-gray-700">
    <li className="text-gray-900 font-semibold">Eco-Friendly Blooming Delight Tote Bag</li>
    <li><span className="text-gray-900 font-semibold">Dimensions:</span> 15 x 14 inches  </li>
    <li><span className="text-gray-900 font-semibold">Handle Length:</span> 12 inches </li>
    <li><span className="text-gray-900 font-semibold">Color:</span> White with Blue and Yellow Floral Pattern</li>
    <li><span className="text-gray-900 font-semibold">Material:</span> Canvas Tote, 100% Cotton</li>
    <li><span className="text-gray-900 font-semibold">Order Processing Time:</span> 24-48 hours </li>
    <li><span className="text-gray-900 font-semibold">Overall Delivery Period:</span> 7-10 Days </li>
    <li><span className="text-gray-900 font-semibold">Tracking Link:</span> A tracking link will be provided via email and SMS after the product is dispatched.</li>
  </ul> `,
    price: 5800,
    category: "Tote Bags",
    images: [
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    name: "Paint Tote Bag",
    shortDescription:
      "Carry a touch of summer with you everywhere with this charming floral canvas tote bag! Featuring a vibrant blue and yellow daisy design, this eco-friendly bag is perfect for daily errands, beach outings, or simply adding a splash of color to your outfit. Made from durable, lightweight fabric, it’s as functional as it is fashionable. 🌻✨",
    htmlContent: ` <h2 className="text-gray-900 text-[24px] font-medium">Introducing the Blooming Delight Tote Bag: A Burst of Joy and Practicality
  </h2>
  <p className="text-gray-700 font-normal">
    Embrace the vibrant essence of nature with the Blooming Delight Tote Bag, an eye-catching tribute to the beauty and cheerfulness of a flower garden in full bloom. This tote is a must-have for lovers of floral designs and those who value the perfect blend of style and functionality, combining daily utility with a splash of joyful artistry.
  </p>
  <p className="text-gray-700 font-normal">
    Crafted with durability and aesthetics in mind, the tote features a striking floral pattern in bold blue and yellow, meticulously designed to evoke the happiness and energy of a sunny day among flowers. The spacious interior and robust construction make it the perfect companion for a variety of activities, whether you’re carrying books, groceries, or beach essentials.
  </p>
  <p className="text-gray-700 font-normal">
    More than just a useful accessory, the Blooming Delight Tote Bag is a celebration of life’s simple pleasures and the beauty that surrounds us. It’s an accessory that adds a touch of joy to your daily routine, making it an excellent gift or a personal treat for anyone who delights in the charm of floral designs and the vibrancy they bring. Carry the essence of a blooming garden with you, wherever your adventures may take you.
  </p>
  <ul className="flex flex-col font-normal text-gray-700">
    <li className="text-gray-900 font-semibold">Eco-Friendly Blooming Delight Tote Bag</li>
    <li><span className="text-gray-900 font-semibold">Dimensions:</span> 15 x 14 inches  </li>
    <li><span className="text-gray-900 font-semibold">Handle Length:</span> 12 inches </li>
    <li><span className="text-gray-900 font-semibold">Color:</span> White with Blue and Yellow Floral Pattern</li>
    <li><span className="text-gray-900 font-semibold">Material:</span> Canvas Tote, 100% Cotton</li>
    <li><span className="text-gray-900 font-semibold">Order Processing Time:</span> 24-48 hours </li>
    <li><span className="text-gray-900 font-semibold">Overall Delivery Period:</span> 7-10 Days </li>
    <li><span className="text-gray-900 font-semibold">Tracking Link:</span> A tracking link will be provided via email and SMS after the product is dispatched.</li>
  </ul> `,
    price: 4800,
    category: "Tote Bags",
    images: [
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    createdAt: new Date(),
  },

  {
    _id: new ObjectId(),
    name: "Carton pattern T-Shirt",
    shortDescription:
      "The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨",
    htmlContent: ` <h2 className="text-gray-900 text-[24px] font-medium">Embrace Your Boldness with the Fear None Graphic T-Shirt
  </h2>
  <p className="text-gray-700 font-normal">
    
Carry a statement of courage and creativity with you wherever you go with this Fear None Graphic T-Shirt. Featuring a striking design and powerful message, this t-shirt is perfect for anyone looking to make a bold statement in their daily life. Whether you're hitting the streets, heading to a creative meet-up, or simply adding an edgy touch to your casual wear, this tee is your go-to choice for fearless style.
  </p>
  <p className="text-gray-700 font-normal">
    Crafted from soft, breathable fabric, it ensures comfort while keeping you cool and confident all day long. The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨
  </p>
  <ul className="flex flex-col font-normal text-gray-700">
    <li><span className="text-gray-900 font-semibold">Material:</span> 100% Cotton </li>
    <li><span className="text-gray-900 font-semibold">Color:</span> Cream </li>
    <li><span className="text-gray-900 font-semibold">Sizes:</span> S, M, L, XL, XXL</li>
    <li><span className="text-gray-900 font-semibold">Care Instructions:</span> Machine wash cold, tumble dry low</li>
    <li><span className="text-gray-900 font-semibold">Order Processing Time:</span> 24-48 hours </li>
    <li><span className="text-gray-900 font-semibold">Overall Delivery Period:</span> 5-7 Days </li>
    <li><span className="text-gray-900 font-semibold">Unique Feature:</span> Empowering message and eye-catching design.</li>
    <li><span className="text-gray-900 font-semibold">Style Tip:</span> Pair with jeans or joggers for a relaxed yet bold look.</li>
  </ul> `,
    price: 4800,
    category: "Tote Bags",
    images: [
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    name: "Men's smile T-Shirt",
    shortDescription:
      "The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨",
    htmlContent: ` <h2 className="text-gray-900 text-[24px] font-medium">Embrace Your Boldness with the Fear None Graphic T-Shirt
  </h2>
  <p className="text-gray-700 font-normal">
    
Carry a statement of courage and creativity with you wherever you go with this Fear None Graphic T-Shirt. Featuring a striking design and powerful message, this t-shirt is perfect for anyone looking to make a bold statement in their daily life. Whether you're hitting the streets, heading to a creative meet-up, or simply adding an edgy touch to your casual wear, this tee is your go-to choice for fearless style.
  </p>
  <p className="text-gray-700 font-normal">
    Crafted from soft, breathable fabric, it ensures comfort while keeping you cool and confident all day long. The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨
  </p>
  <ul className="flex flex-col font-normal text-gray-700">
    <li><span className="text-gray-900 font-semibold">Material:</span> 100% Cotton </li>
    <li><span className="text-gray-900 font-semibold">Color:</span> Cream </li>
    <li><span className="text-gray-900 font-semibold">Sizes:</span> S, M, L, XL, XXL</li>
    <li><span className="text-gray-900 font-semibold">Care Instructions:</span> Machine wash cold, tumble dry low</li>
    <li><span className="text-gray-900 font-semibold">Order Processing Time:</span> 24-48 hours </li>
    <li><span className="text-gray-900 font-semibold">Overall Delivery Period:</span> 5-7 Days </li>
    <li><span className="text-gray-900 font-semibold">Unique Feature:</span> Empowering message and eye-catching design.</li>
    <li><span className="text-gray-900 font-semibold">Style Tip:</span> Pair with jeans or joggers for a relaxed yet bold look.</li>
  </ul> `,
    price: 4800,
    category: "Tote Bags",
    images: [
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    name: "Colorful Planet T-Shirt",
    shortDescription:
      "The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨",
    htmlContent: ` <h2 className="text-gray-900 text-[24px] font-medium">Embrace Your Boldness with the Fear None Graphic T-Shirt
  </h2>
  <p className="text-gray-700 font-normal">
    
Carry a statement of courage and creativity with you wherever you go with this Fear None Graphic T-Shirt. Featuring a striking design and powerful message, this t-shirt is perfect for anyone looking to make a bold statement in their daily life. Whether you're hitting the streets, heading to a creative meet-up, or simply adding an edgy touch to your casual wear, this tee is your go-to choice for fearless style.
  </p>
  <p className="text-gray-700 font-normal">
    Crafted from soft, breathable fabric, it ensures comfort while keeping you cool and confident all day long. The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨
  </p>
  <ul className="flex flex-col font-normal text-gray-700">
    <li><span className="text-gray-900 font-semibold">Material:</span> 100% Cotton </li>
    <li><span className="text-gray-900 font-semibold">Color:</span> Cream </li>
    <li><span className="text-gray-900 font-semibold">Sizes:</span> S, M, L, XL, XXL</li>
    <li><span className="text-gray-900 font-semibold">Care Instructions:</span> Machine wash cold, tumble dry low</li>
    <li><span className="text-gray-900 font-semibold">Order Processing Time:</span> 24-48 hours </li>
    <li><span className="text-gray-900 font-semibold">Overall Delivery Period:</span> 5-7 Days </li>
    <li><span className="text-gray-900 font-semibold">Unique Feature:</span> Empowering message and eye-catching design.</li>
    <li><span className="text-gray-900 font-semibold">Style Tip:</span> Pair with jeans or joggers for a relaxed yet bold look.</li>
  </ul> `,
    price: 4800,
    category: "Tote Bags",
    images: [
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    name: "Oversized Wash T-Shirt",
    shortDescription:
      "The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨",
    htmlContent: ` <h2 className="text-gray-900 text-[24px] font-medium">Embrace Your Boldness with the Fear None Graphic T-Shirt
  </h2>
  <p className="text-gray-700 font-normal">
    
Carry a statement of courage and creativity with you wherever you go with this Fear None Graphic T-Shirt. Featuring a striking design and powerful message, this t-shirt is perfect for anyone looking to make a bold statement in their daily life. Whether you're hitting the streets, heading to a creative meet-up, or simply adding an edgy touch to your casual wear, this tee is your go-to choice for fearless style.
  </p>
  <p className="text-gray-700 font-normal">
    Crafted from soft, breathable fabric, it ensures comfort while keeping you cool and confident all day long. The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨
  </p>
  <ul className="flex flex-col font-normal text-gray-700">
    <li><span className="text-gray-900 font-semibold">Material:</span> 100% Cotton </li>
    <li><span className="text-gray-900 font-semibold">Color:</span> Cream </li>
    <li><span className="text-gray-900 font-semibold">Sizes:</span> S, M, L, XL, XXL</li>
    <li><span className="text-gray-900 font-semibold">Care Instructions:</span> Machine wash cold, tumble dry low</li>
    <li><span className="text-gray-900 font-semibold">Order Processing Time:</span> 24-48 hours </li>
    <li><span className="text-gray-900 font-semibold">Overall Delivery Period:</span> 5-7 Days </li>
    <li><span className="text-gray-900 font-semibold">Unique Feature:</span> Empowering message and eye-catching design.</li>
    <li><span className="text-gray-900 font-semibold">Style Tip:</span> Pair with jeans or joggers for a relaxed yet bold look.</li>
  </ul> `,
    price: 4800,
    category: "Tote Bags",
    images: [
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    name: "Fearless T-Shirt",
    shortDescription:
      "The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨",
    htmlContent: ` <h2 className="text-gray-900 text-[24px] font-medium">Embrace Your Boldness with the Fear None Graphic T-Shirt
  </h2>
  <p className="text-gray-700 font-normal">
    
Carry a statement of courage and creativity with you wherever you go with this Fear None Graphic T-Shirt. Featuring a striking design and powerful message, this t-shirt is perfect for anyone looking to make a bold statement in their daily life. Whether you're hitting the streets, heading to a creative meet-up, or simply adding an edgy touch to your casual wear, this tee is your go-to choice for fearless style.
  </p>
  <p className="text-gray-700 font-normal">
    Crafted from soft, breathable fabric, it ensures comfort while keeping you cool and confident all day long. The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨
  </p>
  <ul className="flex flex-col font-normal text-gray-700">
    <li><span className="text-gray-900 font-semibold">Material:</span> 100% Cotton </li>
    <li><span className="text-gray-900 font-semibold">Color:</span> Cream </li>
    <li><span className="text-gray-900 font-semibold">Sizes:</span> S, M, L, XL, XXL</li>
    <li><span className="text-gray-900 font-semibold">Care Instructions:</span> Machine wash cold, tumble dry low</li>
    <li><span className="text-gray-900 font-semibold">Order Processing Time:</span> 24-48 hours </li>
    <li><span className="text-gray-900 font-semibold">Overall Delivery Period:</span> 5-7 Days </li>
    <li><span className="text-gray-900 font-semibold">Unique Feature:</span> Empowering message and eye-catching design.</li>
    <li><span className="text-gray-900 font-semibold">Style Tip:</span> Pair with jeans or joggers for a relaxed yet bold look.</li>
  </ul> `,
    price: 4800,
    category: "Tote Bags",
    images: [
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    name: "Nature Adventure T-Shirt",
    shortDescription:
      "The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨",
    htmlContent: ` <h2 className="text-gray-900 text-[24px] font-medium">Embrace Your Boldness with the Fear None Graphic T-Shirt
  </h2>
  <p className="text-gray-700 font-normal">
    
Carry a statement of courage and creativity with you wherever you go with this Fear None Graphic T-Shirt. Featuring a striking design and powerful message, this t-shirt is perfect for anyone looking to make a bold statement in their daily life. Whether you're hitting the streets, heading to a creative meet-up, or simply adding an edgy touch to your casual wear, this tee is your go-to choice for fearless style.
  </p>
  <p className="text-gray-700 font-normal">
    Crafted from soft, breathable fabric, it ensures comfort while keeping you cool and confident all day long. The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨
  </p>
  <ul className="flex flex-col font-normal text-gray-700">
    <li><span className="text-gray-900 font-semibold">Material:</span> 100% Cotton </li>
    <li><span className="text-gray-900 font-semibold">Color:</span> Cream </li>
    <li><span className="text-gray-900 font-semibold">Sizes:</span> S, M, L, XL, XXL</li>
    <li><span className="text-gray-900 font-semibold">Care Instructions:</span> Machine wash cold, tumble dry low</li>
    <li><span className="text-gray-900 font-semibold">Order Processing Time:</span> 24-48 hours </li>
    <li><span className="text-gray-900 font-semibold">Overall Delivery Period:</span> 5-7 Days </li>
    <li><span className="text-gray-900 font-semibold">Unique Feature:</span> Empowering message and eye-catching design.</li>
    <li><span className="text-gray-900 font-semibold">Style Tip:</span> Pair with jeans or joggers for a relaxed yet bold look.</li>
  </ul> `,
    price: 4800,
    category: "Tote Bags",
    images: [
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    name: "Men's 100% Cotton T-Shirt",
    shortDescription:
      "The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨",
    htmlContent: ` <h2 className="text-gray-900 text-[24px] font-medium">Embrace Your Boldness with the Fear None Graphic T-Shirt
  </h2>
  <p className="text-gray-700 font-normal">
    
Carry a statement of courage and creativity with you wherever you go with this Fear None Graphic T-Shirt. Featuring a striking design and powerful message, this t-shirt is perfect for anyone looking to make a bold statement in their daily life. Whether you're hitting the streets, heading to a creative meet-up, or simply adding an edgy touch to your casual wear, this tee is your go-to choice for fearless style.
  </p>
  <p className="text-gray-700 font-normal">
    Crafted from soft, breathable fabric, it ensures comfort while keeping you cool and confident all day long. The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨
  </p>
  <ul className="flex flex-col font-normal text-gray-700">
    <li><span className="text-gray-900 font-semibold">Material:</span> 100% Cotton </li>
    <li><span className="text-gray-900 font-semibold">Color:</span> Cream </li>
    <li><span className="text-gray-900 font-semibold">Sizes:</span> S, M, L, XL, XXL</li>
    <li><span className="text-gray-900 font-semibold">Care Instructions:</span> Machine wash cold, tumble dry low</li>
    <li><span className="text-gray-900 font-semibold">Order Processing Time:</span> 24-48 hours </li>
    <li><span className="text-gray-900 font-semibold">Overall Delivery Period:</span> 5-7 Days </li>
    <li><span className="text-gray-900 font-semibold">Unique Feature:</span> Empowering message and eye-catching design.</li>
    <li><span className="text-gray-900 font-semibold">Style Tip:</span> Pair with jeans or joggers for a relaxed yet bold look.</li>
  </ul> `,
    price: 4800,
    category: "Tote Bags",
    images: [
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    name: "Light Blue Baller T-Shirt",
    shortDescription:
      "The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨",
    htmlContent: ` <h2 className="text-gray-900 text-[24px] font-medium">Embrace Your Boldness with the Fear None Graphic T-Shirt
  </h2>
  <p className="text-gray-700 font-normal">
    
Carry a statement of courage and creativity with you wherever you go with this Fear None Graphic T-Shirt. Featuring a striking design and powerful message, this t-shirt is perfect for anyone looking to make a bold statement in their daily life. Whether you're hitting the streets, heading to a creative meet-up, or simply adding an edgy touch to your casual wear, this tee is your go-to choice for fearless style.
  </p>
  <p className="text-gray-700 font-normal">
    Crafted from soft, breathable fabric, it ensures comfort while keeping you cool and confident all day long. The bold typography and retro graphic on the back add a unique flair, making it a standout piece in any wardrobe. This shirt is more than just a piece of clothing; it’s a call to action for those ready to take on the world and carve their own path to greatness. 💪✨
  </p>
  <ul className="flex flex-col font-normal text-gray-700">
    <li><span className="text-gray-900 font-semibold">Material:</span> 100% Cotton </li>
    <li><span className="text-gray-900 font-semibold">Color:</span> Cream </li>
    <li><span className="text-gray-900 font-semibold">Sizes:</span> S, M, L, XL, XXL</li>
    <li><span className="text-gray-900 font-semibold">Care Instructions:</span> Machine wash cold, tumble dry low</li>
    <li><span className="text-gray-900 font-semibold">Order Processing Time:</span> 24-48 hours </li>
    <li><span className="text-gray-900 font-semibold">Overall Delivery Period:</span> 5-7 Days </li>
    <li><span className="text-gray-900 font-semibold">Unique Feature:</span> Empowering message and eye-catching design.</li>
    <li><span className="text-gray-900 font-semibold">Style Tip:</span> Pair with jeans or joggers for a relaxed yet bold look.</li>
  </ul> `,
    price: 4800,
    category: "Tote Bags",
    images: [
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    createdAt: new Date(),
  },
];
