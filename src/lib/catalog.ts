import mixer from "@/assets/mixer.jpg";
import mixerParts from "@/assets/mixer-parts.jpg";
import induction from "@/assets/induction.jpg";
import kettle from "@/assets/kettle.jpg";
import mosquito from "@/assets/mosquito-racket.jpg";
import heater from "@/assets/room-heater.jpg";
import sujataMg03 from "@/assets/sujata/mg03.jpg.asset.json";
import sujataDynamix from "@/assets/sujata/dynamix.jpg.asset.json";
import sujataCitromatic from "@/assets/sujata/citromatic.jpg.asset.json";
import sujataJmg from "@/assets/sujata/jmg.jpg.asset.json";
import sujataFrootmix from "@/assets/sujata/frootmix.jpg.asset.json";
import sujataSupermix from "@/assets/sujata/supermix.jpg.asset.json";
import sujataLogo from "@/assets/sujata/sujata-logo.jpg.asset.json";

export type CategoryId =
  | "mixers"
  | "mixer-parts"
  | "inductions"
  | "kettles"
  | "mosquito-rackets"
  | "room-heaters";

export interface BrandModel {
  id: string;
  name: string;
  image: string;
  note?: string;
}

export interface BrandGroup {
  title: string;
  models: BrandModel[];
}

export interface Brand {
  name: string;
  logo?: string;
  groups?: BrandGroup[];
}

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
  image: string;
  brands: Brand[];
}

export const CATEGORIES: Category[] = [
  {
    id: "mixers",
    label: "Juicer Mixer Grinders",
    emoji: "🌀",
    image: mixer,
    brands: [
      {
        name: "Sujata",
        logo: sujataLogo.url,
        groups: [
          {
            title: "Mixer Grinders",
            models: [
              { id: "mg-01", name: "MG 01", image: sujataMg03.url },
              { id: "mg-02", name: "MG 02", image: sujataMg03.url },
              { id: "mg-03", name: "MG 03", image: sujataMg03.url, note: "1000 W" },
              { id: "dynamix", name: "Dynamix", image: sujataDynamix.url },
              { id: "citromatic", name: "Citromatic", image: sujataCitromatic.url },
            ],
          },
          {
            title: "Juicer Mixer Grinders",
            models: [{ id: "jmg", name: "JMG", image: sujataJmg.url }],
          },
          {
            title: "Blenders",
            models: [
              { id: "frootmix", name: "Frootmix", image: sujataFrootmix.url },
              { id: "supermix", name: "Supermix", image: sujataSupermix.url },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "mixer-parts",
    label: "Juicer Mixer Grinder Parts",
    emoji: "🔩",
    image: mixerParts,
    brands: [{ name: "Sujata", logo: sujataLogo.url }],
  },
  {
    id: "inductions",
    label: "Inductions",
    emoji: "🔥",
    image: induction,
    brands: [{ name: "Prestige" }, { name: "Pigeon" }, { name: "Skyline" }],
  },
  {
    id: "kettles",
    label: "Electric Kettle",
    emoji: "🫖",
    image: kettle,
    brands: [
      { name: "Prestige" },
      { name: "Oreva" },
      { name: "Kelvinator" },
      { name: "Pigeon" },
    ],
  },
  {
    id: "mosquito-rackets",
    label: "Mosquito Rackets",
    emoji: "🦟",
    image: mosquito,
    brands: [{ name: "Licve" }, { name: "Modern" }, { name: "Snow White" }],
  },
  {
    id: "room-heaters",
    label: "Room Heaters",
    emoji: "♨️",
    image: heater,
    brands: [{ name: "ElectroMax" }, { name: "Oreva" }],
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
