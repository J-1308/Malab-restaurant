// Every fact on the page comes from here. Sources are recorded in PROJECT.md.
// Pitch build: nothing below is owner-confirmed yet (see docs/project/open-questions.md).

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

// Names and descriptions as published on Malab's own delivery listings.
export const dishes = [
  {
    name: "Lamb Hanid",
    note: "Lamb shank",
    description: "Traditional slow-steamed lamb shank cooked with tomatoes and herbs.",
  },
  {
    name: "Beef Suqaar",
    description: "Cubes of beef sautéed with onions and mixed peppers.",
  },
  {
    name: "Soor",
    note: "Corn maize",
    description: "Served with creamy spinach sauce.",
  },
  {
    name: "Sambus",
    description: "Meat or fish, 3 per portion.",
  },
] as const;

export const alsoOnTheMenu = [
  "Chicken, fish and meat mains",
  "Family platters",
  "Kids menu",
  "Milkshakes, smoothies, fresh juices and mojitos",
] as const;

// Verbatim excerpts from public Google reviews. Owner to approve use (Q8).
export const reviews = [
  "The lamb shank was full of flavour and falling off the bone.",
  "I’ve been to many Somali restaurants but this one is by far the best.",
  "Very nice and cosy. The owner was super friendly and even offered free tea.",
] as const;
