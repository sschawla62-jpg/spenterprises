import mixerSujata from "@/assets/mixer.jpg";
import mixerSujata2 from "@/assets/mixer-sujata-2.jpg";
import mixerPrestige from "@/assets/mixer-prestige.jpg";
import mixerPrestige2 from "@/assets/mixer-prestige-2.jpg";
import mixerBajaj from "@/assets/mixer-bajaj.jpg";
import mixerBajaj2 from "@/assets/mixer-bajaj-2.jpg";
import induction from "@/assets/induction.jpg";
import inductionHavells2 from "@/assets/induction-havells-2.jpg";
import inductionPrestige from "@/assets/induction-prestige.jpg";
import inductionPrestige2 from "@/assets/induction-prestige-2.jpg";
import kettle from "@/assets/kettle.jpg";
import kettlePrestige2 from "@/assets/kettle-prestige-2.jpg";
import kettleGlass from "@/assets/kettle-glass.jpg";
import kettleGlass2 from "@/assets/kettle-glass-2.jpg";
import toaster from "@/assets/toaster.jpg";
import toaster2 from "@/assets/toaster-2.jpg";
import iron from "@/assets/iron.jpg";
import iron2 from "@/assets/iron-2.jpg";
import sandwich from "@/assets/sandwich.jpg";
import sandwich2 from "@/assets/sandwich-2.jpg";
import handBlender from "@/assets/hand-blender.jpg";
import handBlender2 from "@/assets/hand-blender-2.jpg";

export type Category =
  | "mixers"
  | "induction"
  | "kettles"
  | "toasters"
  | "irons"
  | "sandwich"
  | "blenders";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  mrp?: number;
  img: string;
  gallery: string[];
  spec: string;
  tag?: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  warranty: string;
  inBox: string[];
}

export const CATEGORIES: { id: Category | "all"; label: string; emoji: string }[] = [
  { id: "all", label: "All", emoji: "🛒" },
  { id: "mixers", label: "Mixers", emoji: "🌀" },
  { id: "induction", label: "Induction", emoji: "🔥" },
  { id: "kettles", label: "Kettles", emoji: "🫖" },
  { id: "toasters", label: "Toasters", emoji: "🍞" },
  { id: "irons", label: "Irons", emoji: "👕" },
  { id: "sandwich", label: "Sandwich", emoji: "🥪" },
  { id: "blenders", label: "Blenders", emoji: "🥤" },
];

export const PRODUCTS: Product[] = [
  {
    id: "sujata-dynamix",
    name: "Sujata Dynamix Mixer Grinder",
    brand: "Sujata",
    category: "mixers",
    price: 6499,
    mrp: 7495,
    img: mixerSujata,
    gallery: [mixerSujata, mixerSujata2],
    spec: "900 W · 3 stainless steel jars",
    tag: "Bestseller",
    description:
      "The Sujata Dynamix is built for Indian kitchens — a powerful 900 W motor that grinds heavy masalas, wet chutneys and idli batter with ease. Legendary Sujata durability with a 5-year motor warranty.",
    features: [
      "Powerful 900 W universal motor",
      "3 stainless steel jars (1.5L / 1L / 0.4L)",
      "Rocker-type switch with 3 speeds",
      "Runs continuously for up to 90 minutes",
      "Bakelite non-slip body",
    ],
    specs: [
      { label: "Motor", value: "900 W" },
      { label: "Speed", value: "3-step rocker" },
      { label: "Jars", value: "3 (SS)" },
      { label: "Warranty", value: "2 yr product / 5 yr motor" },
    ],
    warranty: "2 years product, 5 years motor",
    inBox: ["Main unit", "Wet jar 1.5L", "Dry jar 1L", "Chutney jar 0.4L", "User manual"],
  },
  {
    id: "prestige-iris",
    name: "Prestige Iris Mixer Grinder",
    brand: "Prestige",
    category: "mixers",
    price: 3499,
    mrp: 4295,
    img: mixerPrestige,
    gallery: [mixerPrestige, mixerPrestige2],
    spec: "750 W · 3 jars + juicer",
    description:
      "A compact daily-driver mixer from Prestige with a 750 W motor and a juicer attachment — perfect for smaller families and everyday chutneys, juices and dry spices.",
    features: [
      "750 W motor with 3 speeds + pulse",
      "3 stainless steel jars and 1 juicer jar",
      "Ergonomic handle on every jar",
      "Overload protector for motor safety",
      "Sturdy ABS body",
    ],
    specs: [
      { label: "Motor", value: "750 W" },
      { label: "Speed", value: "3 + pulse" },
      { label: "Jars", value: "3 SS + juicer" },
      { label: "Warranty", value: "2 years" },
    ],
    warranty: "2 years",
    inBox: ["Main unit", "3 SS jars", "Juicer attachment", "User manual"],
  },
  {
    id: "bajaj-rex",
    name: "Bajaj Rex Mixer Grinder",
    brand: "Bajaj",
    category: "mixers",
    price: 2899,
    mrp: 3550,
    img: mixerBajaj,
    gallery: [mixerBajaj, mixerBajaj2],
    spec: "500 W · 3 jars",
    tag: "Value pick",
    description:
      "The most affordable way to add a reliable branded mixer to your kitchen. A 500 W motor handles wet and dry grinding for daily needs, backed by Bajaj's country-wide service network.",
    features: [
      "500 W motor built for daily use",
      "3 stainless steel jars",
      "3-speed rotary switch",
      "Non-slip vacuum feet",
      "Nationwide Bajaj service",
    ],
    specs: [
      { label: "Motor", value: "500 W" },
      { label: "Speed", value: "3 rotary" },
      { label: "Jars", value: "3 (SS)" },
      { label: "Warranty", value: "2 years" },
    ],
    warranty: "2 years",
    inBox: ["Main unit", "3 SS jars", "User manual"],
  },
  {
    id: "havells-insta-cook",
    name: "Havells Insta Cook Induction",
    brand: "Havells",
    category: "induction",
    price: 2599,
    mrp: 3495,
    img: induction,
    gallery: [induction, inductionHavells2],
    spec: "1900 W · 7 preset menus",
    tag: "Energy saver",
    description:
      "Cook faster and safer with the Havells Insta Cook — a 1900 W induction with 7 pre-programmed Indian menus, digital display and auto shut-off protection.",
    features: [
      "1900 W high-efficiency heating",
      "7 preset menus for Indian cooking",
      "Feather-touch controls",
      "Auto shut-off & overheat protection",
      "Voltage fluctuation resistant",
    ],
    specs: [
      { label: "Power", value: "1900 W" },
      { label: "Voltage", value: "220–240 V" },
      { label: "Presets", value: "7 menus" },
      { label: "Warranty", value: "1 year" },
    ],
    warranty: "1 year",
    inBox: ["Induction cooktop", "Power cord", "User manual"],
  },
  {
    id: "prestige-pic-20",
    name: "Prestige PIC 20 Induction Cooktop",
    brand: "Prestige",
    category: "induction",
    price: 2199,
    mrp: 2995,
    img: inductionPrestige,
    gallery: [inductionPrestige, inductionPrestige2],
    spec: "1600 W · Auto shut-off",
    description:
      "The Prestige PIC 20 is India's trusted starter induction — 1600 W of steady heat, a slim glass top and simple push-button controls that anyone in the family can use.",
    features: [
      "1600 W induction with soft-touch controls",
      "Automatic voltage regulator",
      "Auto shut-off and pan sensor",
      "Anti-magnetic wall to protect controls",
      "Slim, easy-to-clean glass top",
    ],
    specs: [
      { label: "Power", value: "1600 W" },
      { label: "Voltage", value: "230 V" },
      { label: "Controls", value: "Push button" },
      { label: "Warranty", value: "1 year" },
    ],
    warranty: "1 year",
    inBox: ["Induction cooktop", "Power cord", "User manual"],
  },
  {
    id: "prestige-kettle",
    name: "Prestige Electric Kettle 1.5L",
    brand: "Prestige",
    category: "kettles",
    price: 999,
    mrp: 1295,
    img: kettle,
    gallery: [kettle, kettlePrestige2],
    spec: "1500 W · Stainless steel",
    description:
      "Boil water for tea, coffee or instant noodles in under 4 minutes. A durable stainless steel body with cool-touch handle and auto shut-off when the water boils.",
    features: [
      "1500 W fast boil",
      "1.5 L stainless steel body",
      "360° cordless swivel base",
      "Auto shut-off & dry-boil protection",
      "Concealed heating element",
    ],
    specs: [
      { label: "Power", value: "1500 W" },
      { label: "Capacity", value: "1.5 L" },
      { label: "Body", value: "SS 304" },
      { label: "Warranty", value: "1 year" },
    ],
    warranty: "1 year",
    inBox: ["Kettle", "Cordless base", "User manual"],
  },
  {
    id: "havells-aqua-plus",
    name: "Havells Aqua Plus Glass Kettle",
    brand: "Havells",
    category: "kettles",
    price: 1499,
    mrp: 1895,
    img: kettleGlass,
    gallery: [kettleGlass, kettleGlass2],
    spec: "1500 W · Borosilicate glass",
    tag: "New",
    description:
      "A beautifully modern glass kettle with a soft blue LED that lights up while boiling. Borosilicate glass is safe, taste-neutral and easy to clean.",
    features: [
      "1500 W rapid boil",
      "Borosilicate glass body",
      "Blue LED indicator while heating",
      "Cordless 360° base",
      "Auto shut-off & boil-dry protection",
    ],
    specs: [
      { label: "Power", value: "1500 W" },
      { label: "Capacity", value: "1.7 L" },
      { label: "Body", value: "Borosilicate glass" },
      { label: "Warranty", value: "2 years" },
    ],
    warranty: "2 years",
    inBox: ["Glass kettle", "Cordless base", "User manual"],
  },
  {
    id: "philips-toaster",
    name: "Philips 2-Slice Pop-up Toaster",
    brand: "Philips",
    category: "toasters",
    price: 1899,
    mrp: 2495,
    img: toaster,
    gallery: [toaster, toaster2],
    spec: "830 W · 7 browning levels",
    description:
      "Perfect toast every morning. 7 browning levels, extra-lift for small breads, and a reheat function — all with Philips reliability and quality.",
    features: [
      "830 W heating with even browning",
      "7 adjustable browning levels",
      "Reheat, defrost & cancel functions",
      "Removable crumb tray",
      "Cord storage under base",
    ],
    specs: [
      { label: "Power", value: "830 W" },
      { label: "Slots", value: "2 slice" },
      { label: "Body", value: "Brushed steel" },
      { label: "Warranty", value: "2 years" },
    ],
    warranty: "2 years",
    inBox: ["Toaster", "User manual"],
  },
  {
    id: "havells-iron",
    name: "Havells Steam Iron",
    brand: "Havells",
    category: "irons",
    price: 1249,
    mrp: 1595,
    img: iron,
    gallery: [iron, iron2],
    spec: "1250 W · Non-stick soleplate",
    description:
      "Crease-free clothes in minutes. Adjustable steam, a non-stick soleplate that glides on any fabric, and a spray button for tough wrinkles.",
    features: [
      "1250 W heating",
      "Non-stick soleplate",
      "Variable steam & spray",
      "Adjustable thermostat for all fabrics",
      "Water level indicator",
    ],
    specs: [
      { label: "Power", value: "1250 W" },
      { label: "Soleplate", value: "Non-stick" },
      { label: "Water tank", value: "200 ml" },
      { label: "Warranty", value: "2 years" },
    ],
    warranty: "2 years",
    inBox: ["Steam iron", "Measuring cup", "User manual"],
  },
  {
    id: "bajaj-sandwich",
    name: "Bajaj Sandwich Maker",
    brand: "Bajaj",
    category: "sandwich",
    price: 1599,
    mrp: 1995,
    img: sandwich,
    gallery: [sandwich, sandwich2],
    spec: "750 W · Non-stick plates",
    description:
      "Golden, evenly grilled sandwiches in under 4 minutes. Non-stick plates for easy cleaning and a cool-touch handle for safety.",
    features: [
      "750 W dual heating",
      "Non-stick coated plates",
      "Ready & power indicator lights",
      "Cool-touch handle with lock",
      "Vertical storage design",
    ],
    specs: [
      { label: "Power", value: "750 W" },
      { label: "Plates", value: "Non-stick" },
      { label: "Sandwiches", value: "2 at a time" },
      { label: "Warranty", value: "1 year" },
    ],
    warranty: "1 year",
    inBox: ["Sandwich maker", "User manual"],
  },
  {
    id: "philips-blender",
    name: "Philips Hand Blender",
    brand: "Philips",
    category: "blenders",
    price: 1799,
    mrp: 2295,
    img: handBlender,
    gallery: [handBlender, handBlender2],
    spec: "250 W · With beaker",
    description:
      "Blend soups, purees and smoothies right in the pot. A powerful 250 W motor, detachable stem for easy cleaning, and a measuring beaker included.",
    features: [
      "250 W ProMix motor",
      "Detachable stainless steel stem",
      "Anti-splash blade design",
      "0.5 L measuring beaker included",
      "Dishwasher-safe accessories",
    ],
    specs: [
      { label: "Motor", value: "250 W" },
      { label: "Speeds", value: "Single speed" },
      { label: "Stem", value: "SS detachable" },
      { label: "Warranty", value: "2 years" },
    ],
    warranty: "2 years",
    inBox: ["Motor unit", "Blender stem", "0.5 L beaker", "User manual"],
  },
];

export const productById = (id: string) => PRODUCTS.find((p) => p.id === id);

export const BUSINESS = {
  name: "S P Enterprises",
  phone: "7275336699",
  wa: "917275336699",
  address: "110/43-A, R K Nagar, 80 Feet Road, Kanpur",
};

export const waLink = (msg: string) =>
  `https://wa.me/${BUSINESS.wa}?text=${encodeURIComponent(msg)}`;
export const telLink = () => `tel:+91${BUSINESS.phone}`;
