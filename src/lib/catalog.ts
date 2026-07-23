import mixerSujata from "@/assets/mixer.jpg";
import mixerPrestige from "@/assets/mixer-prestige.jpg";
import mixerBajaj from "@/assets/mixer-bajaj.jpg";
import induction from "@/assets/induction.jpg";
import inductionPrestige from "@/assets/induction-prestige.jpg";
import kettle from "@/assets/kettle.jpg";
import kettleGlass from "@/assets/kettle-glass.jpg";
import toaster from "@/assets/toaster.jpg";
import iron from "@/assets/iron.jpg";
import sandwich from "@/assets/sandwich.jpg";
import handBlender from "@/assets/hand-blender.jpg";

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
  spec: string;
  tag?: string;
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
    spec: "900 W · 3 stainless steel jars",
    tag: "Bestseller",
  },
  {
    id: "prestige-iris",
    name: "Prestige Iris Mixer Grinder",
    brand: "Prestige",
    category: "mixers",
    price: 3499,
    mrp: 4295,
    img: mixerPrestige,
    spec: "750 W · 3 jars + juicer",
  },
  {
    id: "bajaj-rex",
    name: "Bajaj Rex Mixer Grinder",
    brand: "Bajaj",
    category: "mixers",
    price: 2899,
    mrp: 3550,
    img: mixerBajaj,
    spec: "500 W · 3 jars",
    tag: "Value pick",
  },
  {
    id: "havells-insta-cook",
    name: "Havells Insta Cook Induction",
    brand: "Havells",
    category: "induction",
    price: 2599,
    mrp: 3495,
    img: induction,
    spec: "1900 W · 7 preset menus",
    tag: "Energy saver",
  },
  {
    id: "prestige-pic-20",
    name: "Prestige PIC 20 Induction Cooktop",
    brand: "Prestige",
    category: "induction",
    price: 2199,
    mrp: 2995,
    img: inductionPrestige,
    spec: "1600 W · Auto shut-off",
  },
  {
    id: "prestige-kettle",
    name: "Prestige Electric Kettle 1.5L",
    brand: "Prestige",
    category: "kettles",
    price: 999,
    mrp: 1295,
    img: kettle,
    spec: "1500 W · Stainless steel",
  },
  {
    id: "havells-aqua-plus",
    name: "Havells Aqua Plus Glass Kettle",
    brand: "Havells",
    category: "kettles",
    price: 1499,
    mrp: 1895,
    img: kettleGlass,
    spec: "1500 W · Borosilicate glass",
    tag: "New",
  },
  {
    id: "philips-toaster",
    name: "Philips 2-Slice Pop-up Toaster",
    brand: "Philips",
    category: "toasters",
    price: 1899,
    mrp: 2495,
    img: toaster,
    spec: "830 W · 7 browning levels",
  },
  {
    id: "havells-iron",
    name: "Havells Steam Iron",
    brand: "Havells",
    category: "irons",
    price: 1249,
    mrp: 1595,
    img: iron,
    spec: "1250 W · Non-stick soleplate",
  },
  {
    id: "bajaj-sandwich",
    name: "Bajaj Sandwich Maker",
    brand: "Bajaj",
    category: "sandwich",
    price: 1599,
    mrp: 1995,
    img: sandwich,
    spec: "750 W · Non-stick plates",
  },
  {
    id: "philips-blender",
    name: "Philips Hand Blender",
    brand: "Philips",
    category: "blenders",
    price: 1799,
    mrp: 2295,
    img: handBlender,
    spec: "250 W · With beaker",
  },
];

export const BUSINESS = {
  name: "S P Enterprises",
  phone: "7275336699",
  wa: "917275336699",
  address: "110/43-A, R K Nagar, 80 Feet Road, Kanpur",
};

export const waLink = (msg: string) =>
  `https://wa.me/${BUSINESS.wa}?text=${encodeURIComponent(msg)}`;
export const telLink = () => `tel:+91${BUSINESS.phone}`;
