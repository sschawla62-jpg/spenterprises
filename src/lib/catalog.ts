import mixer from "@/assets/mixer.jpg";
import mixerParts from "@/assets/mixer-parts.jpg";
import induction from "@/assets/induction.jpg";
import kettle from "@/assets/kettle.jpg";
import mosquito from "@/assets/mosquito-racket.jpg";
import heater from "@/assets/room-heater.jpg";

export type CategoryId =
  | "mixers"
  | "mixer-parts"
  | "inductions"
  | "kettles"
  | "mosquito-rackets"
  | "room-heaters";

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
  image: string;
  brands: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "mixers",
    label: "Juicer Mixer Grinders",
    emoji: "🌀",
    image: mixer,
    brands: ["Sujata"],
  },
  {
    id: "mixer-parts",
    label: "Juicer Mixer Grinder Parts",
    emoji: "🔩",
    image: mixerParts,
    brands: ["Sujata"],
  },
  {
    id: "inductions",
    label: "Inductions",
    emoji: "🔥",
    image: induction,
    brands: ["Prestige", "Pigeon", "Skyline"],
  },
  {
    id: "kettles",
    label: "Electric Kettle",
    emoji: "🫖",
    image: kettle,
    brands: ["Prestige", "Oreva", "Kelvinator", "Pigeon"],
  },
  {
    id: "mosquito-rackets",
    label: "Mosquito Rackets",
    emoji: "🦟",
    image: mosquito,
    brands: ["Licve", "Modern", "Snow White"],
  },
  {
    id: "room-heaters",
    label: "Room Heaters",
    emoji: "♨️",
    image: heater,
    brands: ["ElectroMax", "Oreva"],
  },
];

export const categoryById = (id: string) => CATEGORIES.find((c) => c.id === id);

export const BUSINESS = {
  name: "S P Enterprises",
  phone: "7275336699",
  wa: "917275336699",
  address: "110/43-A, R K Nagar, 80 Feet Road, Kanpur",
};

export const waLink = (msg: string) =>
  `https://wa.me/${BUSINESS.wa}?text=${encodeURIComponent(msg)}`;
export const telLink = () => `tel:+91${BUSINESS.phone}`;
