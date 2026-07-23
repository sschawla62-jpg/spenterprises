import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Star, Shield, Truck, BadgeCheck, ChevronRight } from "lucide-react";
import hero from "@/assets/hero-appliances.jpg";
import { BUSINESS, CATEGORIES, PRODUCTS, telLink, waLink } from "@/lib/catalog";

const WA_MSG = "Hi S P Enterprises, I'd like to know more about your small appliances.";

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

const brands = ["SUJATA", "HAVELLS", "PRESTIGE", "BAJAJ", "PHILIPS", "USHA"];
const featured = PRODUCTS.slice(0, 4);

function Home() {
  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b">
        <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
          <div>
            <div className="text-lg font-extrabold tracking-tight text-primary leading-none">
              {BUSINESS.name}
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> R K Nagar, Kanpur
            </div>
          </div>
          <a
            href={telLink()}
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
                href={waLink(WA_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--color-whatsapp)] text-[color:var(--color-whatsapp-foreground)] font-semibold py-3 text-sm shadow active:scale-[0.98] transition"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={telLink()}
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

      {/* Shop by category */}
      <section className="mx-auto max-w-md px-4 mt-8">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-extrabold">Shop by category</h2>
          <Link
            to="/catalog"
            search={{ cat: "all" }}
            className="text-xs font-semibold text-primary inline-flex items-center"
          >
            View all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {CATEGORIES.filter((c) => c.id !== "all").map((c) => (
            <Link
              key={c.id}
              to="/catalog"
              search={{ cat: c.id }}
              className="flex flex-col items-center gap-1.5 rounded-2xl bg-card border p-3 active:scale-95 transition"
            >
              <span className="text-2xl leading-none">{c.emoji}</span>
              <span className="text-[10px] font-semibold text-center leading-tight">
                {c.label}
              </span>
            </Link>
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

      {/* Featured products */}
      <section className="mx-auto max-w-md px-4 mt-8">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-extrabold">Popular picks</h2>
          <Link
            to="/catalog"
            search={{ cat: "all" }}
            className="text-xs font-semibold text-primary inline-flex items-center"
          >
            See all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {featured.map((p) => {
            const off = p.mrp ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
            return (
              <Link
                key={p.id}
                to="/product/$id"
                params={{ id: p.id }}
                className="flex flex-col rounded-2xl bg-card border overflow-hidden shadow-sm active:scale-[0.99] transition"
              >
                <div className="relative aspect-square bg-muted">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  {off > 0 && (
                    <span className="absolute top-2 right-2 text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                      {off}% OFF
                    </span>
                  )}
                </div>
                <div className="p-3 flex flex-col gap-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    {p.brand}
                  </div>
                  <h3 className="text-[13px] font-semibold leading-snug line-clamp-2 min-h-[2.4em]">
                    {p.name}
                  </h3>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-sm font-extrabold">
                      ₹{p.price.toLocaleString("en-IN")}
                    </span>
                    {p.mrp && (
                      <span className="text-[11px] text-muted-foreground line-through">
                        ₹{p.mrp.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Visit us */}
      <section className="mx-auto max-w-md px-4 mt-8">
        <div className="rounded-2xl bg-card border p-5 shadow-sm">
          <h2 className="text-lg font-extrabold">Visit our store</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{BUSINESS.address}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.name + " " + BUSINESS.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            <MapPin className="w-4 h-4" /> Get directions
          </a>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BUSINESS.name} · Kanpur
        </p>
      </section>

      {/* Sticky action bar */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-t"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto max-w-md px-4 py-3 flex gap-2">
          <a
            href={waLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--color-whatsapp)] text-[color:var(--color-whatsapp-foreground)] font-semibold py-3 text-sm shadow-lg active:scale-[0.98] transition"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
          <a
            href={telLink()}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold py-3 text-sm shadow-lg active:scale-[0.98] transition"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </div>
      </nav>
    </div>
  );
}
