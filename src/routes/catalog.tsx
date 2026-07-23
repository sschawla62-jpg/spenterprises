import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Phone, MessageCircle, ArrowLeft, Search } from "lucide-react";
import { z } from "zod";
import {
  BUSINESS,
  CATEGORIES,
  PRODUCTS,
  type Category,
  telLink,
  waLink,
} from "@/lib/catalog";

const searchSchema = z.object({
  cat: z
    .enum(["all", "mixers", "induction", "kettles", "toasters", "irons", "sandwich", "blenders"])
    .optional()
    .catch("all"),
});

export const Route = createFileRoute("/catalog")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Product Catalog — S P Enterprises, Kanpur" },
      {
        name: "description",
        content:
          "Browse mixer grinders, induction cooktops, kettles, toasters, irons & more from Sujata, Havells, Prestige, Bajaj and Philips at S P Enterprises, Kanpur.",
      },
      { property: "og:title", content: "Product Catalog — S P Enterprises" },
      {
        property: "og:description",
        content:
          "Small appliances from trusted brands at fair prices. Browse by category and enquire on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  const { cat = "all" } = useSearch({ from: "/catalog" });
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return PRODUCTS.filter((p) => (cat === "all" ? true : p.category === (cat as Category))).filter(
      (p) =>
        !term ||
        p.name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term),
    );
  }, [cat, q]);

  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b">
        <div className="mx-auto max-w-md px-4 py-3 flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-secondary-foreground"
            aria-label="Back"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="flex-1 min-w-0">
            <div className="text-base font-extrabold leading-none text-primary truncate">
              Catalog
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5 truncate">
              {BUSINESS.name} · Kanpur
            </div>
          </div>
          <a
            href={telLink()}
            aria-label="Call now"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Search */}
        <div className="mx-auto max-w-md px-4 pb-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search brand or product"
              className="w-full h-10 pl-9 pr-3 rounded-xl bg-secondary text-sm outline-none focus:ring-2 focus:ring-primary/30 border"
            />
          </div>
        </div>

        {/* Category chips */}
        <div className="mx-auto max-w-md pb-3">
          <div className="flex gap-2 overflow-x-auto px-4 no-scrollbar">
            {CATEGORIES.map((c) => {
              const active = cat === c.id;
              return (
                <Link
                  key={c.id}
                  to="/catalog"
                  search={{ cat: c.id }}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-3 h-9 rounded-full text-xs font-semibold border transition ${
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow"
                      : "bg-card text-foreground border-border"
                  }`}
                >
                  <span>{c.emoji}</span>
                  <span>{c.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="mx-auto max-w-md px-4 pt-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-sm text-muted-foreground">
            No products match your search.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {filtered.map((p) => {
              const off = p.mrp ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
              return (
                <Link
                  key={p.id}
                  to="/product/$id"
                  params={{ id: p.id }}
                  className="group flex flex-col rounded-2xl bg-card border overflow-hidden shadow-sm active:scale-[0.99] transition"
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
                    {p.tag && (
                      <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                        {p.tag}
                      </span>
                    )}
                    {off > 0 && (
                      <span className="absolute top-2 right-2 text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                        {off}% OFF
                      </span>
                    )}
                  </div>
                  <div className="p-3 flex flex-col gap-1.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      {p.brand}
                    </div>
                    <h3 className="text-[13px] font-semibold leading-snug line-clamp-2 min-h-[2.4em]">
                      {p.name}
                    </h3>
                    <p className="text-[11px] text-muted-foreground line-clamp-1">{p.spec}</p>
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
                </a>
              );
            })}
          </div>
        )}
      </main>

      {/* Sticky action bar */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-t"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto max-w-md px-4 py-3 flex gap-2">
          <a
            href={waLink("Hi S P Enterprises, I'd like to enquire about your appliances.")}
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
