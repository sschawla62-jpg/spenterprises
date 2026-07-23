import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Star, Shield, Truck, BadgeCheck } from "lucide-react";
import hero from "@/assets/hero-appliances.jpg";
import mixer from "@/assets/mixer.jpg";
import induction from "@/assets/induction.jpg";
import kettle from "@/assets/kettle.jpg";

const PHONE = "7275336699";
const WA = "917275336699";
const WA_MSG = encodeURIComponent(
  "Hi S P Enterprises, I'd like to know more about your small appliances.",
);
const ADDRESS = "110/43-A, R K Nagar, 80 Feet Road, Kanpur";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S P Enterprises — Small Appliances in Kanpur | Sujata, Havells, Prestige" },
      {
        name: "description",
        content:
          "Shop mixer grinders, induction cooktops, kettles & more from Sujata, Havells & Prestige at S P Enterprises, R K Nagar, Kanpur. Call or WhatsApp 7275336699.",
      },
      { property: "og:title", content: "S P Enterprises — Small Appliances in Kanpur" },
      {
        property: "og:description",
        content:
          "Trusted brands. Fair prices. Sujata, Havells, Prestige & more at S P Enterprises, Kanpur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Home,
});

const products = [
  { name: "Sujata Mixer Grinders", tag: "Bestseller", img: mixer, price: "from ₹3,499" },
  { name: "Havells Induction Cooktops", tag: "Energy Saver", img: induction, price: "from ₹2,199" },
  { name: "Prestige Electric Kettles", tag: "New", img: kettle, price: "from ₹899" },
];

const brands = ["SUJATA", "HAVELLS", "PRESTIGE", "BAJAJ", "PHILIPS", "USHA"];

function Home() {
  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b">
        <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
          <div>
            <div className="text-lg font-extrabold tracking-tight text-primary leading-none">
              S P Enterprises
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> R K Nagar, Kanpur
            </div>
          </div>
          <a
            href={`tel:+91${PHONE}`}
            aria-label="Call now"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md active:scale-95 transition"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-md px-4 pt-5">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.42_0.18_30)] text-primary-foreground p-5 shadow-xl">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider bg-accent text-accent-foreground px-2 py-1 rounded-full">
              <BadgeCheck className="w-3 h-3" /> Trusted since years
            </span>
            <h1 className="mt-3 text-2xl font-extrabold leading-tight">
              Small appliances.
              <br />
              Big brands. Fair prices.
            </h1>
            <p className="mt-2 text-sm text-primary-foreground/85">
              Sujata, Havells, Prestige & more — delivered fast across Kanpur.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href={`https://wa.me/${WA}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--color-whatsapp)] text-[color:var(--color-whatsapp-foreground)] font-semibold py-3 text-sm shadow active:scale-[0.98] transition"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={`tel:+91${PHONE}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground font-semibold py-3 text-sm shadow active:scale-[0.98] transition"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
          <img
            src={hero}
            alt=""
            aria-hidden="true"
            className="absolute -right-10 -bottom-6 w-52 opacity-20 pointer-events-none"
          />
        </div>

        {/* Trust strip */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[
            { icon: Shield, label: "Genuine\nBrands" },
            { icon: Truck, label: "Kanpur\nDelivery" },
            { icon: Star, label: "Fair\nPrices" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-xl bg-card border p-3">
              <Icon className="w-5 h-5 mx-auto text-primary" />
              <div className="mt-1 text-[11px] font-medium whitespace-pre-line text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="mx-auto max-w-md px-4 mt-8">
        <h2 className="text-sm font-bold text-foreground/80 uppercase tracking-wider">
          Brands we stock
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {brands.map((b) => (
            <span
              key={b}
              className="text-xs font-bold tracking-wide px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border"
            >
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-md px-4 mt-8">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-extrabold">Popular picks</h2>
          <span className="text-xs text-muted-foreground">Tap to enquire</span>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4">
          {products.map((p) => (
            <a
              key={p.name}
              href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hi, I'm interested in ${p.name}. Please share details.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-3 rounded-2xl bg-card border p-3 shadow-sm active:scale-[0.99] transition"
            >
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    {p.tag}
                  </span>
                  <h3 className="text-sm font-semibold leading-snug mt-0.5">{p.name}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-foreground">{p.price}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--color-whatsapp)]">
                    <MessageCircle className="w-3.5 h-3.5" /> Enquire
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Visit us */}
      <section className="mx-auto max-w-md px-4 mt-8">
        <div className="rounded-2xl bg-card border p-5 shadow-sm">
          <h2 className="text-lg font-extrabold">Visit our store</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {ADDRESS}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("S P Enterprises " + ADDRESS)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            <MapPin className="w-4 h-4" /> Get directions
          </a>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} S P Enterprises · Kanpur
        </p>
      </section>

      {/* Sticky action bar */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-t"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto max-w-md px-4 py-3 flex gap-2">
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--color-whatsapp)] text-[color:var(--color-whatsapp-foreground)] font-semibold py-3 text-sm shadow-lg active:scale-[0.98] transition"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
          <a
            href={`tel:+91${PHONE}`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold py-3 text-sm shadow-lg active:scale-[0.98] transition"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </div>
      </nav>
    </div>
  );
}
