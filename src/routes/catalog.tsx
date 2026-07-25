import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { z } from "zod";
import {
  BUSINESS,
  CATEGORIES,
  categoryById,
  telLink,
  waLink,
} from "@/lib/catalog";

const searchSchema = z.object({
  cat: z.string().optional().catch(undefined),
});

export const Route = createFileRoute("/catalog")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Product Catalog — S P Enterprises, Kanpur" },
      {
        name: "description",
        content:
          "Browse juicer mixer grinders, inductions, electric kettles, mosquito rackets and room heaters at S P Enterprises, Kanpur. Call or WhatsApp 7275336699.",
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
  const { cat } = useSearch({ from: "/catalog" });
  const category = cat ? categoryById(cat) : undefined;

  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b">
        <div className="mx-auto max-w-md px-4 py-3 flex items-center gap-3">
          <Link
            to={category ? "/catalog" : "/"}
            search={category ? {} : undefined}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-secondary-foreground"
            aria-label="Back"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="flex-1 min-w-0">
            <div className="text-base font-extrabold leading-none text-primary truncate">
              {category ? category.label : "Catalog"}
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
      </header>

      <main className="mx-auto max-w-md px-4 pt-5">
        {!category ? (
          <>
            <h1 className="text-xl font-extrabold">Shop by category</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Tap a category to see all available brands.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.id}
                  to="/catalog"
                  search={{ cat: c.id }}
                  className="group flex flex-col rounded-2xl bg-card border overflow-hidden shadow-sm active:scale-[0.99] transition"
                >
                  <div className="relative aspect-square bg-muted">
                    <img
                      src={c.image}
                      alt={c.label}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 text-lg bg-background/90 rounded-full w-8 h-8 inline-flex items-center justify-center shadow">
                      {c.emoji}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-[13px] font-bold leading-snug line-clamp-2">
                      {c.label}
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      {c.brands.length} brand{c.brands.length > 1 ? "s" : ""} available
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-xl font-extrabold">Available brands</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose a brand to enquire about {category.label.toLowerCase()} on WhatsApp.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {category.brands.map((b) => {
                const msg = `Hi S P Enterprises, I'm interested in ${b} ${category.label}. Please share available models, prices and offers.`;
                return (
                  <a
                    key={b}
                    href={waLink(msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col rounded-2xl bg-card border overflow-hidden shadow-sm active:scale-[0.99] transition"
                  >
                    <div className="relative aspect-square bg-muted">
                      <img
                        src={category.image}
                        alt={`${b} ${category.label}`}
                        loading="lazy"
                        width={800}
                        height={800}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                        <div className="text-white text-[10px] font-semibold uppercase tracking-wider">
                          Brand
                        </div>
                        <div className="text-white text-base font-extrabold leading-tight">
                          {b}
                        </div>
                      </div>
                    </div>
                    <div className="p-3 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-primary">
                        Enquire on WhatsApp
                      </span>
                      <MessageCircle className="w-4 h-4 text-[color:var(--color-whatsapp)]" />
                    </div>
                  </a>
                );
              })}
            </div>
          </>
        )}
      </main>

      {/* Sticky action bar */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-t"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto max-w-md px-4 py-3 flex gap-2">
          <a
            href={waLink(
              category
                ? `Hi S P Enterprises, I'd like to enquire about ${category.label}.`
                : "Hi S P Enterprises, I'd like to enquire about your appliances.",
            )}
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
