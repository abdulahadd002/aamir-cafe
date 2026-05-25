export type MenuItem = {
  name: string;
  price: number | string;
  description?: string;
  full?: number;
  half?: number;
  fullServes?: string;
  halfServes?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  /** Urdu/Pashto title, RTL — rendered under the English title */
  urdu?: string;
  caption?: string;
  items: MenuItem[];
  variant?: "standard" | "platters";
};

export const phone = "(0928) 621-1100";
export const phoneTel = "+923000000000"; // placeholder — client to confirm full intl format
export const region = "Mardan Region, Khyber Pakhtunkhwa";

/* Pexels CDN URL helper — stable image links by photo ID.
   Width tuned per surface: 480 for tiles, 800 for cards, 1200 for hero. */
function pexels(id: number, w = 800) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

/* Real food photography per menu category, sourced from Pexels.
   Verified loading at HTTP 200 — see commit notes for source URLs.
   Swap for the client's own photography by replacing the IDs. */
export const categoryImage: Record<string, string> = {
  traditional: "/images/painda.jpg", // client-provided painda photo
  bbq: pexels(5407359, 800),          // bunch of grilled meat skewers
  soup: "/images/soup.jpg",           // client-provided hot & sour soup
  "dry-item": "/images/drum-stick.jpg", // client-provided chicken drumsticks platter
  chinese: "/images/chinese.jpg",     // client-provided chinese dish
  rice: pexels(2092916, 800),         // cooked rice served on plate
  tandoori: pexels(1117862, 800),     // basket of cooked flatbreads
  burgers: pexels(1639557, 800),      // ham burger with vegetables (sesame bun)
  steaks: "/images/steak.jpg",        // client-provided grilled chicken steak
  broast: "/images/broast.jpg",       // client-provided rotisserie chicken over flame
  salad: pexels(3743537, 800),        // garden salad on white surface
  bar: pexels(5946623, 800),          // cup of masala chai on table
  sweets: pexels(15014918, 800),      // bowl with gulab jamun sweet
  "ice-cream": pexels(12635411, 800), // vanilla ice cream on cone
};

export const menu: MenuCategory[] = [
  {
    id: "traditional",
    title: "Traditional Food",
    urdu: "روایتی کھانے",
    caption: "House specialty — Painda and family platters",
    variant: "platters",
    items: [
      { name: "Desi Painda", full: 2650, half: 1600, fullServes: "5–6 person", halfServes: "3–4 person" },
      { name: "Chicken Painda", full: 1800, half: 1300, fullServes: "5–6 person", halfServes: "3–4 person" },
      {
        name: "Desi Painda Platter",
        full: 5700,
        half: 4100,
        fullServes: "6–8 person",
        halfServes: "4 person",
        description:
          "Malai Boti, Hyderabadi Boti, Afghani Boti, Cheese Boti, Lababi Kabab, Pizza Kabab, Seekh Kabab, Batair, Tilmi Kabab",
      },
      {
        name: "Chicken Painda Platter",
        full: 4700,
        half: 3000,
        fullServes: "6–8 person",
        halfServes: "4 person",
        description:
          "Malai Boti, Hyderabadi Boti, Afghani Boti, Cheese Boti, Lababi Kabab, Pizza Kabab, Seekh Kabab, Batair, Tilmi Kabab",
      },
      {
        name: "Pulao Platter",
        full: 5700,
        half: 4100,
        fullServes: "5–6 person",
        halfServes: "4 person",
        description:
          "Malai Boti, Hyderabadi Boti, Afghani Boti, Cheese Boti, Lababi Kabab, Pizza Kabab, Seekh Kabab, Batair, Tilmi Kabab, Mutton Tikka",
      },
    ],
  },
  {
    id: "bbq",
    title: "BBQ",
    urdu: "باربی کیو",
    caption: "Charcoal-grilled kababs and boti",
    items: [
      { name: "Seekh Kabab", price: 130 },
      { name: "Reshmi Kabab", price: 130 },
      { name: "Lababi Kabab", price: 130 },
      { name: "Kulfi Kabab", price: 130 },
      { name: "Tilmi Kabab", price: 130 },
      { name: "Kalwanji Kabab", price: 130 },
      { name: "Batair", price: 160 },
      { name: "Tikka Boti", price: 320 },
      { name: "Malai Boti", price: 340 },
      { name: "Afghani Boti", price: 320 },
      { name: "Rajistani Boti", price: 320 },
      { name: "Kasturi Boti", price: 320 },
      { name: "Haryali Boti", price: 320 },
      { name: "Cheese Boti", price: 350 },
      { name: "Chicken Leg Piece", price: 300 },
      { name: "Chicken Chest Piece", price: 320 },
      { name: "Chicken Angara", price: 1200 },
      { name: "Fish BBQ", price: 1000 },
    ],
  },
  {
    id: "soup",
    title: "Soup",
    urdu: "سوپ",
    items: [
      { name: "Chicken Special Soup", price: 650 },
      { name: "Red Chicken Soup", price: 650 },
      { name: "Hot & Sour Soup", price: 600 },
      { name: "Corn Soup", price: 600 },
      { name: "Vegetable Soup", price: 550 },
      { name: "Thai Soup", price: 550 },
    ],
  },
  {
    id: "dry-item",
    title: "Dry Item",
    urdu: "ڈرائی آئٹم",
    caption: "Wok-tossed chicken signatures",
    items: [
      { name: "Dhaka Chicken", price: 800 },
      { name: "Chicken Drum Stick", price: 800 },
      { name: "Chicken Mexican", price: 1000 },
      { name: "Shanghai Chicken", price: 900 },
      { name: "Jamboo Chicken", price: 900 },
      { name: "Chicken Chops", price: 800 },
      { name: "Honey Wings", price: 900 },
      { name: "Chicken Sikandri", price: 900 },
    ],
  },
  {
    id: "chinese",
    title: "Chinese Cuisine",
    urdu: "چائنیز",
    items: [
      { name: "Chicken Almond", price: 900 },
      { name: "Chicken Mongolian", price: 800 },
      { name: "Sweet & Sour", price: 800 },
      { name: "Chicken Garlic", price: 800 },
      { name: "Black Pepper", price: 800 },
      { name: "Chicken Mexican", price: 800 },
      { name: "Shashlik With Rice", price: 800 },
      { name: "Chicken Pineapple", price: 900 },
      { name: "Chicken Dry Chilli", price: 800 },
    ],
  },
  {
    id: "rice",
    title: "Rice",
    urdu: "چاول",
    items: [
      { name: "Fried Rice", price: 390 },
      { name: "Kabli Pulao", price: 390 },
    ],
  },
  {
    id: "tandoori",
    title: "Tandoori Items",
    urdu: "تندوری",
    caption: "Fresh out of the clay oven",
    items: [
      { name: "Nan", price: 40 },
      { name: "Roghani Nan", price: 90 },
      { name: "Kalwangi Nan", price: 90 },
      { name: "Garlic Nan", price: 90 },
      { name: "Kulcha Nan", price: 40 },
      { name: "Sada Roti", price: 40 },
    ],
  },
  {
    id: "burgers",
    title: "Special Burgers",
    urdu: "اسپیشل برگر",
    items: [
      { name: "Grilled Beef Burger", description: "Single fillet", price: 440 },
      { name: "Grilled Chicken Burger", description: "Single fillet", price: 400 },
      { name: "Grilled Chicken Burger", description: "Double fillet with cheese", price: 600 },
      { name: "Grilled Beef Burger", description: "Double fillet with cheese", price: 640 },
      { name: "Zinger Burger", description: "Single fillet", price: 320 },
      { name: "Zinger Burger", description: "Double fillet with cheese", price: 600 },
    ],
  },
  {
    id: "steaks",
    title: "Chicken Steaks",
    urdu: "چکن اسٹیک",
    items: [
      { name: "Creamy Mushroom Steak", price: 900 },
      { name: "Creamy Mushroom Steak with Pasta", price: 1100 },
      { name: "Black Pepper Steak", price: 900 },
      { name: "Black Pepper Steak with Pasta", price: 1100 },
      { name: "Beef Steak (without pasta)", price: 1000 },
    ],
  },
  {
    id: "broast",
    title: "Broast",
    urdu: "بروسٹ",
    items: [
      { name: "Quarter Broast", description: "2 pieces", price: 350 },
      { name: "Half Broast", description: "4 pieces", price: 780 },
      { name: "Full Broast", description: "8 pieces", price: 1500 },
      { name: "Family Broast", description: "12 pieces", price: 2150 },
      { name: "Turkish Wrap", price: 300 },
    ],
  },
  {
    id: "salad",
    title: "Salad & Sides",
    urdu: "سلاد",
    items: [
      { name: "Russian Salad", price: "On request" },
      { name: "Macaroni", price: "On request" },
      { name: "Chana Chaat", price: "On request" },
      { name: "Raita", price: 50 },
      { name: "Garden Salad", price: 70 },
      { name: "Mineral Water", price: 70 },
    ],
  },
  {
    id: "bar",
    title: "Bar Items",
    urdu: "چائے و مشروبات",
    caption: "Tea, lassi and fresh shakes",
    items: [
      { name: "Tandoori Chai", price: 140 },
      { name: "Chai", price: 80 },
      { name: "Green Tea", price: 50 },
      { name: "Mint Margarita", price: 180 },
      { name: "Fresh Lime", price: 120 },
      { name: "Mint Lassi", price: 200 },
      { name: "Namkeen Lassi", price: 160 },
      { name: "Sweet Lassi", price: 160 },
      { name: "Strawberry Shake", price: 250 },
      { name: "Mango Shake", price: 240 },
      { name: "Banana Shake", price: 160 },
    ],
  },
  {
    id: "sweets",
    title: "Sweet Dishes",
    urdu: "میٹھے پکوان",
    items: [
      { name: "Hot Gulab Jamun", price: 40 },
      { name: "Gajar Halwa", price: 140 },
      { name: "Kheer", price: 120 },
      { name: "Fruit Chaat", price: 150 },
    ],
  },
  {
    id: "ice-cream",
    title: "Ice Creams",
    urdu: "آئس کریم",
    caption: "Scoops — single flavour 180",
    items: [
      { name: "Mango", price: 180 },
      { name: "Strawberry", price: 180 },
      { name: "Tutti Frutti", price: 180 },
      { name: "Vanilla", price: 180 },
      { name: "Coconut", price: 180 },
      { name: "Praline", price: 180 },
      { name: "Pista", price: 180 },
      { name: "Kulfa", price: 180 },
      { name: "Chocolate", price: 180 },
      { name: "Special Ice Cream", price: 450 },
    ],
  },
];

/* Hand-picked landing-page highlights — the dishes worth fronting.
   Less text by design: title + Urdu + price + photo + tiny visual cue. */
export const signatureDishes = [
  {
    icon: "traditional" as const,
    image: "/images/painda.jpg", // client-provided painda photo
    title: "Desi Painda Platter",
    urdu: "دیسی پائندہ پلیٹر",
    pricing: "Rs 5,700 / 4,100",
    serves: "4 – 8",
    accent: "Family",
  },
  {
    icon: "bbq" as const,
    image: "/images/chicken-karahi.jpg", // client-provided karahi chicken
    title: "Chicken Angara",
    urdu: "چکن انگارا",
    pricing: "Rs 1,200",
    serves: "1",
    accent: "BBQ",
  },
  {
    icon: "bar" as const,
    image: "/images/chinese-tea-set.jpg", // client-provided clay teapot + cups
    title: "Tandoori Chai",
    urdu: "تندوری چائے",
    pricing: "Rs 140",
    serves: "Cup",
    accent: "House",
  },
];

/* Hero feature image — Painda Platter close-up.
   Chosen separately from signatures so we can tune the hero photo independently. */
export const heroImage = "/images/painda.jpg"; // client-provided painda photo
