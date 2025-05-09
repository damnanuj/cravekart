import mongoose from "mongoose";
import dotenv from "dotenv";
import MenuItem from "../models/mongo/MenuItem.js";

dotenv.config();

const mongoURI = process.env.MONGO_URI;

const seedData = [
  {
    category: "Pizza",
    categoryImage: "https://res.cloudinary.com/dpc1rowz8/image/upload/v1745139055/pizza_pomkeu.png",
    items: [
      {
        item_name: "Margherita Pizza",
        price: 299,
        description: "A classic pizza made with fresh tomatoes, mozzarella cheese, basil, and extra virgin olive oil for a delicious traditional taste.",
        calories: 250,
        rating: 4.5,
        ratingCount: 120,
        itemImages: ["https://example.com/images/items/margherita.jpg"],
      },
      {
        item_name: "Farmhouse Pizza",
        price: 349,
        description: "A pizza topped with a mix of bell peppers, onions, mushrooms, and fresh cheese, giving you a hearty and savory flavor experience.",
        calories: 320,
        rating: 4.7,
        ratingCount: 95,
        itemImages: ["https://example.com/images/items/farmhouse.jpg"],
      },
      {
        item_name: "Pepperoni Pizza",
        price: 399,
        description: "Deliciously topped with spicy pepperoni, mozzarella cheese, and a rich tomato sauce that brings out the bold flavors.",
        calories: 360,
        rating: 4.8,
        ratingCount: 150,
        itemImages: ["https://example.com/images/items/pepperoni.jpg"],
      },
      {
        item_name: "BBQ Chicken Pizza",
        price: 419,
        description: "Grilled chicken pieces with smoky BBQ sauce, red onions, and a mix of cheese, creating a tasty and smoky pizza experience.",
        calories: 400,
        rating: 4.6,
        ratingCount: 110,
        itemImages: ["https://example.com/images/items/bbqchicken.jpg"],
      },
    ],
  },
  {
    category: "Burger",
    categoryImage: "https://res.cloudinary.com/dpc1rowz8/image/upload/v1745139055/burger_st2v8e.png",
    items: [
      {
        item_name: "Chicken Burger",
        price: 199,
        description: "Juicy chicken patty with fresh veggies, crispy lettuce, and a delicious mayo sauce served in a soft bun.",
        calories: 220,
        rating: 4.3,
        ratingCount: 80,
        itemImages: ["https://res.cloudinary.com/dpc1rowz8/image/upload/v1745139052/chicken-burger_z3w9k8.png"],
      },
      {
        item_name: "Cheese Burst Burger",
        price: 249,
        description: "A cheesy delight with melty cheese-filled patty, topped with crispy lettuce, tomatoes, and special sauce for extra flavor.",
        calories: 270,
        rating: 4.6,
        ratingCount: 102,
        itemImages: ["https://res.cloudinary.com/dpc1rowz8/image/upload/v1745139052/cheese-burger_ufpyd0.png"],
      },
      {
        item_name: "Beef Burger",
        price: 299,
        description: "Grilled beef patty with cheddar cheese, pickles, onions, and a tangy special sauce that adds a flavorful kick.",
        calories: 300,
        rating: 4.7,
        ratingCount: 90,
        itemImages: ["https://res.cloudinary.com/dpc1rowz8/image/upload/v1745139052/Beef-burger_yrwhb1.png"],
      },
      {
        item_name: "Black Burger",
        price: 239,
        description: "A unique black bun with spicy chicken patty, creamy sauce, and a mix of fresh vegetables for a special taste.",
        calories: 260,
        rating: 4.4,
        ratingCount: 60,
        itemImages: ["https://res.cloudinary.com/dpc1rowz8/image/upload/v1745139052/black-Burger_vnyl3z.png"],
      },
    ],
  },
  {
    category: "Drinks",
    categoryImage: "https://res.cloudinary.com/dpc1rowz8/image/upload/v1745139053/sparkling-water_pwc1ko.png",
    items: [
      {
        item_name: "Cold Coffee",
        price: 149,
        description: "Icy cold brew coffee blended with chocolate and a touch of sweetness, perfect for a refreshing boost any time of day.",
        calories: 180,
        rating: 4.8,
        ratingCount: 210,
        itemImages: ["https://example.com/images/items/coldcoffee.jpg"],
      },
      {
        item_name: "Lemonade",
        price: 99,
        description: "A zesty, refreshing drink made with fresh lemon juice, sweetened to perfection for a tangy and sweet experience.",
        calories: 80,
        rating: 4.1,
        ratingCount: 60,
        itemImages: ["https://example.com/images/items/lemonade.jpg"],
      },
      {
        item_name: "Iced Tea",
        price: 129,
        description: "Chilled black tea served with a hint of lemon, creating a light and crisp beverage to quench your thirst on a hot day.",
        calories: 100,
        rating: 4.5,
        ratingCount: 75,
        itemImages: ["https://example.com/images/items/icedtea.jpg"],
      },
      {
        item_name: "Oreo Shake",
        price: 179,
        description: "Rich, creamy shake blended with crushed Oreo cookies, offering a decadent dessert-like treat in every sip.",
        calories: 230,
        rating: 4.6,
        ratingCount: 95,
        itemImages: ["https://example.com/images/items/oreoshake.jpg"],
      },
    ],
  },
  {
    category: "Snacks",
    categoryImage: "https://res.cloudinary.com/dpc1rowz8/image/upload/v1745139053/popcorn_u2vheh.png",
    items: [
      {
        item_name: "French Fries",
        price: 99,
        description: "Golden and crispy fries seasoned with a pinch of salt, making them the perfect snack to accompany any meal.",
        calories: 300,
        rating: 4.2,
        ratingCount: 130,
        itemImages: ["https://example.com/images/items/fries.jpg"],
      },
      {
        item_name: "Garlic Bread",
        price: 129,
        description: "Crunchy toasted bread slathered with garlic butter and herbs for a flavorful side dish or snack.",
        calories: 250,
        rating: 4.3,
        ratingCount: 100,
        itemImages: ["https://example.com/images/items/garlicbread.jpg"],
      },
      {
        item_name: "Cheese Sticks",
        price: 149,
        description: "Fried cheese sticks that are golden and crispy on the outside with gooey, melty cheese inside.",
        calories: 270,
        rating: 4.5,
        ratingCount: 85,
        itemImages: ["https://example.com/images/items/cheesesticks.jpg"],
      },
      {
        item_name: "Nachos with Salsa",
        price: 139,
        description: "Crispy tortilla chips paired with fresh, spicy salsa for a perfect balance of crunch and flavor.",
        calories: 220,
        rating: 4.4,
        ratingCount: 70,
        itemImages: ["https://example.com/images/items/nachos.jpg"],
      },
    ],
  },
  {
    category: "Ice Cream",
    categoryImage: "https://res.cloudinary.com/dpc1rowz8/image/upload/v1745139054/ice-cream-cone_nsvszk.png",
    items: [
      {
        item_name: "Vanilla Scoop",
        price: 79,
        description: "A smooth and creamy scoop of vanilla ice cream made with real vanilla beans for an authentic taste.",
        calories: 150,
        rating: 4.0,
        ratingCount: 55,
        itemImages: ["https://example.com/images/items/vanilla.jpg"],
      },
      {
        item_name: "Chocolate Sundae",
        price: 129,
        description: "Rich chocolate ice cream topped with hot fudge, whipped cream, and a cherry for a classic sundae experience.",
        calories: 200,
        rating: 4.6,
        ratingCount: 88,
        itemImages: ["https://example.com/images/items/chocolatesundae.jpg"],
      },
      {
        item_name: "Strawberry Swirl",
        price: 119,
        description: "A refreshing swirl of strawberry ice cream mixed with ribbons of strawberry sauce for a fruity and indulgent treat.",
        calories: 180,
        rating: 4.3,
        ratingCount: 72,
        itemImages: ["https://example.com/images/items/strawberry.jpg"],
      },
      {
        item_name: "Butterscotch Bliss",
        price: 139,
        description: "A creamy butterscotch-flavored ice cream that is rich, smooth, and irresistibly sweet.",
        calories: 190,
        rating: 4.5,
        ratingCount: 60,
        itemImages: ["https://example.com/images/items/butterscotch.jpg"],
      },
    ],
  },
];


const seedMenuItems = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await MenuItem.deleteMany();

    const allItems = [];

    seedData.forEach(({ category, categoryImage, items }) => {
      items.forEach((item) => {
        allItems.push({
          ...item,
          category,
          categoryImage,
        });
      });
    });

    await MenuItem.insertMany(allItems);
    console.log("✅ Seeded menu items with full categories.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error while seeding:", err.message);
    process.exit(1);
  }
};

seedMenuItems();
