// Every fact on the page comes from here. Sources are recorded in PROJECT.md.
// Concept build: nothing below is owner-confirmed yet (docs/project/open-questions.md).

export const place = {
  name: "Malab",
  cuisine: "Somali cuisine",
  street: "157 Uxbridge Road",
  road: "Uxbridge Road",
  area: "West Ealing",
  city: "London",
  postcode: "W13 9AU",
  phoneDisplay: "020 8922 3277",
  phoneHref: "tel:+442089223277",
  // Google Maps URL API; place_id from the Google Business Profile.
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Malab%20Somali%20Restaurant%2C%20157%20Uxbridge%20Road&query_place_id=ChIJNafWf84NdkgRGmnFqU0jc4c",
  justEatHref: "https://www.just-eat.co.uk/restaurants-malab-restaurant-westealing-w13/menu",
  // Google hours. Closing time conflicts with a delivery listing (Q3).
  hours: "Every day, 8am – 11pm",
  opens: "8am",
  rating: { score: "4.8", count: 105, source: "Google" },
} as const;

export type Dish = {
  name: string;
  note?: string;
  // Prices from Malab's own Uber Eats listing (Sep 2026). To confirm with the owner (Q9).
  price?: string;
  description?: string;
  image?: string;
  badge?: "Featured" | "Most liked";
};

export type MenuCategory = { title: string; dishes: Dish[]; compact?: boolean };

// Dish names and descriptions as published on Malab's Uber Eats and Just Eat listings.
// Platter description is from the supplied video ([Observed]), not a listing.
const dish = {
  hanid: {
    name: "Lamb Hanid",
    note: "Lamb shank",
    price: "£14.99",
    description: "Traditional slow-steamed lamb shank cooked with tomatoes and herbs.",
    badge: "Featured",
  },
  suqaar: {
    name: "Beef Suqaar",
    price: "£12.99",
    description: "Cubes of beef sautéed with onions and mixed peppers.",
    image: "/media/dish-suqaar.jpg",
  },
  sweetSour: {
    name: "Sweet and Sour Chicken",
    price: "£15.99",
    description:
      "Tender chicken cubes in a tangy sweet and sour sauce with pineapple, mango chutney and ginger.",
    badge: "Most liked",
  },
  platter: {
    name: "Family platter",
    description: "Rice and pasta topped with meat, made for sharing.",
    image: "/media/dish-platter.jpg",
  },
  soor: {
    name: "Soor",
    note: "Corn maize",
    price: "£3.99",
    description: "Served with creamy spinach sauce.",
  },
  sambus: {
    name: "Sambus",
    price: "£5.99",
    description: "Meat or fish, 3 per portion.",
  },
} satisfies Record<string, Dish>;

export const signatures: Dish[] = [
  dish.hanid,
  dish.suqaar,
  dish.sweetSour,
  dish.platter,
  dish.sambus,
  dish.soor,
];

export const menu: MenuCategory[] = [
  {
    title: "Starters",
    dishes: [
      dish.sambus,
      { name: "Sweet and Sour Chicken Wings", note: "6 pieces", price: "£7.99" },
      { name: "Chicken Pineapple Salad", price: "£8.99" },
      { name: "Greek Salad", price: "£5.99" },
    ],
  },
  {
    title: "Meat",
    dishes: [
      dish.hanid,
      dish.suqaar,
      {
        name: "Beef Steak",
        price: "£12.99",
        description: "Pan-fried marinated beef with onions and peppers.",
      },
    ],
  },
  {
    title: "Chicken",
    dishes: [
      dish.sweetSour,
      {
        name: "Chicken Parmesan",
        price: "£14.99",
        description: "Breaded chicken breast with Italian herbs and marinara sauce.",
      },
      {
        name: "Chicken Steak",
        price: "£14.99",
        description: "Flat and tender chicken breast marinated with a blend of spices.",
      },
      {
        name: "Chicken Pancake",
        price: "£14.99",
        description: "Homemade pancake filled with marinated chicken and melted cheese.",
      },
    ],
  },
  {
    title: "Fish",
    dishes: [
      { name: "Salmon", price: "£14.99" },
      { name: "Pan-Fried Sea Bass", price: "£13.99" },
    ],
  },
  { title: "Platters", dishes: [dish.platter] },
  {
    title: "Sides",
    compact: true,
    dishes: [
      { name: "Rice", price: "£3.99" },
      { name: "Pasta", price: "£3.99" },
      dish.soor,
      { name: "Chapati", price: "£1.99" },
      { name: "Chips", price: "£2.99" },
      { name: "Mash Potato", price: "£3.99" },
      { name: "Mixed Vegetables", price: "£3.99" },
      { name: "Mac and Cheese", price: "£6.99" },
    ],
  },
  {
    title: "Kids",
    compact: true,
    dishes: [{ name: "Chicken Burger", price: "£5.99", description: "Served with fries and drink." }],
  },
  {
    title: "Drinks",
    compact: true,
    dishes: [
      { name: "Mojitos" },
      { name: "Smoothies" },
      { name: "Milkshakes" },
      { name: "Fresh juices" },
      { name: "Hot drinks" },
    ],
  },
];

// Tall "story" cards. Labels are categories we can see in the footage, not dish claims.
export const cards = [
  { label: "Suqaar", image: "/media/card-suqaar.jpg" },
  { label: "Breakfast", image: "/media/card-brunch.jpg" },
  { label: "Sharing platters", image: "/media/card-platter.jpg" },
  { label: "Burgers", image: "/media/card-burger.jpg" },
  { label: "Desserts", image: "/media/card-dessert.jpg" },
  { label: "Mojitos", image: "/media/card-mojito.jpg" },
] as const;

// Verbatim excerpts from public Google reviews. Owner to approve use (Q8).
export const reviews = [
  "The lamb shank was full of flavour and falling off the bone.",
  "I’ve been to many Somali restaurants but this one is by far the best.",
  "Very nice and cosy. The owner was super friendly and even offered free tea.",
] as const;
