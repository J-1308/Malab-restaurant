// Every fact on the page comes from here. Sources are recorded in PROJECT.md.
// Concept build: nothing below is owner-confirmed yet (docs/project/open-questions.md).
// Copy is a draft for the owner to approve; dish names, descriptions and prices marked
// "to confirm" in assets.csv / PROJECT.md.

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
  imagePosition?: string;
  badge?: "Featured" | "Most liked" | "Guest favourite";
};

export type MenuCategory = { id: string; title: string; intro?: string; dishes: Dish[]; compact?: boolean };

// Photos: the studio's AI-edited versions of Malab's own dishes (assets.csv A12).
const img = (name: string) => `/media/menu/${name}.jpg`;

const dish = {
  brunch: {
    name: "Brunch",
    badge: "Featured",
    description:
      "Scrambled eggs on toast, two sausages, a crisp hash brown, grilled tomato, beans and fresh berries, finished with a little jar of honey. From 8am, every day.",
    image: img("brunch"),
    imagePosition: "50% 60%",
  },
  burgerMeal: {
    name: "Burger Meal",
    badge: "Featured",
    description:
      "A grilled chicken burger stacked with melted cheese, tomato, red onion, crisp lettuce and creamy sauce in a soft toasted bun, with our spiced fries and a drink.",
    image: img("burger-meal"),
  },
  hanid: {
    name: "Lamb Hanid",
    note: "Lamb shank",
    price: "£14.99",
    badge: "Guest favourite",
    description:
      "A whole lamb shank, slow-steamed with tomatoes and herbs until it falls off the bone. The dish our reviews talk about most.",
  },
  suqaar: {
    name: "Beef Suqaar",
    price: "£12.99",
    description:
      "A Somali classic: tender cubes of beef sautéed with onions and mixed peppers, served with fresh lemon and a zesty tomato salsa.",
    image: img("suqaar"),
  },
  pasta: {
    name: "Somali Pasta",
    description:
      "Spaghetti tossed in a rich, spiced tomato and meat sauce, finished with fresh herbs and grated cheese. Somali comfort food.",
    image: img("pasta"),
  },
  sweetSour: {
    name: "Sweet and Sour Chicken",
    price: "£15.99",
    badge: "Most liked",
    description:
      "Tender chicken cubes in a tangy sweet and sour sauce with pineapple, mango chutney and ginger.",
  },
  platter: {
    name: "Family Platter",
    description:
      "Rice and pasta piled high and topped with meat, made for the middle of the table. Ask us about sizes for your group.",
  },
  sambus: {
    name: "Sambus",
    price: "£5.99",
    description: "Golden pastry parcels filled with spiced meat or fish. Three to a portion, made for sharing.",
  },
  soor: {
    name: "Soor",
    note: "Corn maize",
    price: "£3.99",
    description: "Soft corn maize, a Somali staple, served with a creamy spinach sauce.",
  },
  pancakes: {
    name: "Pancakes",
    description:
      "Golden pancakes topped with caramelised banana, a scoop of vanilla ice cream, berries and a dusting of cinnamon, in a warm caramel sauce.",
    image: img("pancakes"),
  },
  dateCake: {
    name: "Date Cake",
    description: "Rich and sticky, somewhere near a sticky toffee pudding, and a favourite in our reviews.",
  },
  blueMojito: {
    name: "Blue Mojito",
    description: "Fresh lime, mint and crushed ice with a bright blue twist.",
    image: img("blue-mojito"),
    imagePosition: "50% 45%",
  },
  berryMojito: {
    name: "Berry Mojito",
    description: "Muddled berries, fresh lime and mint over crushed ice.",
    image: img("berry-mojito"),
    imagePosition: "50% 45%",
  },
} satisfies Record<string, Dish>;

export const signatures: Dish[] = [
  dish.brunch,
  dish.burgerMeal,
  dish.suqaar,
  dish.pasta,
  dish.hanid,
  dish.pancakes,
];

export const menu: MenuCategory[] = [
  {
    id: "brunch",
    title: "Brunch",
    intro: "Served from 8am, every day.",
    dishes: [dish.brunch],
  },
  {
    id: "small-plates",
    title: "Small Plates",
    dishes: [
      dish.sambus,
      { name: "Sweet and Sour Chicken Wings", note: "6 pieces", price: "£7.99" },
      { name: "Chicken Pineapple Salad", price: "£8.99" },
      { name: "Greek Salad", price: "£5.99" },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    dishes: [
      dish.hanid,
      dish.suqaar,
      dish.pasta,
      dish.sweetSour,
      {
        name: "Beef Steak",
        price: "£12.99",
        description: "Marinated beef, pan-fried with onions and peppers.",
      },
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
      { name: "Salmon", price: "£14.99" },
      { name: "Pan-Fried Sea Bass", price: "£13.99" },
    ],
  },
  { id: "burgers", title: "Burgers", dishes: [dish.burgerMeal] },
  {
    id: "platters",
    title: "Platters",
    intro: "Made to share. Bring the family.",
    dishes: [dish.platter],
  },
  { id: "desserts", title: "Desserts", dishes: [dish.pancakes, dish.dateCake] },
  {
    id: "drinks",
    title: "Drinks",
    dishes: [
      dish.blueMojito,
      dish.berryMojito,
      { name: "Milkshakes" },
      { name: "Smoothies" },
      { name: "Fresh Juices" },
      { name: "Hot Drinks" },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    compact: true,
    dishes: [
      { name: "Rice", price: "£3.99" },
      { name: "Pasta", price: "£3.99" },
      { name: "Soor", price: "£3.99", description: "With creamy spinach sauce" },
      { name: "Chapati", price: "£1.99" },
      { name: "Chips", price: "£2.99" },
      { name: "Mash Potato", price: "£3.99" },
      { name: "Mixed Vegetables", price: "£3.99" },
      { name: "Mac and Cheese", price: "£6.99" },
    ],
  },
  {
    id: "kids",
    title: "Kids",
    compact: true,
    dishes: [{ name: "Chicken Burger", price: "£5.99", description: "With fries and a drink" }],
  },
];

// Tall "story" cards, like the reference site.
export const cards = [
  { label: "Brunch", image: img("brunch"), position: "50% 55%" },
  { label: "Beef Suqaar", image: img("suqaar"), position: "45% 50%" },
  { label: "Somali Pasta", image: img("pasta-portrait"), position: "50% 50%" },
  { label: "Burgers", image: img("chicken-burger"), position: "50% 55%" },
  { label: "Pancakes", image: img("pancakes"), position: "48% 50%" },
  { label: "Blue Mojito", image: img("blue-mojito"), position: "55% 50%" },
  { label: "Berry Mojito", image: img("berry-mojito"), position: "60% 50%" },
] as const;

// Verbatim excerpts from public Google reviews. Owner to approve use (Q8).
export const reviews = [
  "The lamb shank was full of flavour and falling off the bone.",
  "I’ve been to many Somali restaurants but this one is by far the best.",
  "Very nice and cosy. The owner was super friendly and even offered free tea.",
] as const;
