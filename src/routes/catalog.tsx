import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { z } from "zod";
import {
  BUSINESS,
  CATEGORIES,
  categoryById,
  telLink,
  waLink,
  type Brand,
  type Category,
} from "@/lib/catalog";

const searchSchema = z.object({
  cat: z.string().optional().catch(undefined),
  brand: z.string().optional().catch(undefined),
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

function WA({
  message,
  className,
  children,
}: {
  message: string;
  className?: string;
  children: React.ReactNode;
}) {
  // target="_top" avoids sandboxed-iframe popup blocking in previews.
  return (
    <a
      href={waLink(message)}
      target="_top"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function Catalog() {
  const { cat, brand } = useSearch({ from: "/catalog" });
  const category = cat ? categoryById(cat) : undefined;
  const selectedBrand: Brand | undefined =
    category && brand ? category.brands.find((b) => b.name === brand) : undefined;

  const backSearch = selectedBrand ? { cat: category!.id } : category ? {} : {};
  const headerTitle = selectedBrand
    ? `${selectedBrand.name} · ${category!.label}`
    : category
      ? category.label
      : "Catalog";

  return (
    <div className="min-h-screen bg-background pb-28">
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b">
        <div className="mx-auto max-w-md px-4 py-3 flex items-center gap-3">
          <Link
            to={category ? "/catalog" : "/"}
            search={backSearch}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-secondary-foreground"
            aria-label="Back"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="flex-1 min-w-0">
            <div className="text-base font-extrabold leading-none text-primary truncate">
              {headerTitle}
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
        {selectedBrand ? (
          <BrandView category={category!} brand={selectedBrand} />
        ) : category ? (
          <CategoryView category={category} />
        ) : (
          <AllCategoriesView />
        )}
      </main>

      {/* Sticky action bar */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-t"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto max-w-md px-4 py-3 flex gap-2">
          <WA
            message={
              selectedBrand
                ? `Hi S P Enterprises, I'd like to enquire about ${selectedBrand.name} ${category!.label}.`
                : category
                  ? `Hi S P Enterprises, I'd like to enquire about ${category.label}.`
                  : "Hi S P Enterprises, I'd like to enquire about your appliances."
            }
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--color-whatsapp)] text-[color:var(--color-whatsapp-foreground)] font-semibold py-3 text-sm shadow-lg active:scale-[0.98] transition"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </WA>
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

function AllCategoriesView() {
  return (
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
            className="flex flex-col rounded-2xl bg-card border overflow-hidden shadow-sm active:scale-[0.99] transition"
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
              <h3 className="text-[13px] font-bold leading-snug line-clamp-2">{c.label}</h3>
              <p className="text-[11px] text-muted-foreground mt-1">
                {c.brands.map((b) => b.name).join(" · ")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

function CategoryView({ category }: { category: Category }) {
  return (
    <>
      <h1 className="text-xl font-extrabold">Available brands</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Choose a brand to see models or enquire on WhatsApp.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {category.brands.map((b) => {
          const hasModels = !!b.groups?.length;
          const tile = (
            <div className="flex flex-col rounded-2xl bg-card border overflow-hidden shadow-sm active:scale-[0.99] transition">
              <div className="relative aspect-square bg-white flex items-center justify-center p-4">
                {b.logo ? (
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <>
                    <img
                      src={category.image}
                      alt={`${b.name} ${category.label}`}
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
                        {b.name}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-primary">
                  {hasModels ? "View models" : "Enquire on WhatsApp"}
                </span>
                <MessageCircle
                  className={`w-4 h-4 ${hasModels ? "text-primary" : "text-[color:var(--color-whatsapp)]"}`}
                />
              </div>
            </div>
          );
          return hasModels ? (
            <Link
              key={b.name}
              to="/catalog"
              search={{ cat: category.id, brand: b.name }}
            >
              {tile}
            </Link>
          ) : (
            <WA
              key={b.name}
              message={`Hi S P Enterprises, I'm interested in ${b.name} ${category.label}. Please share available models, prices and offers.`}
            >
              {tile}
            </WA>
          );
        })}
      </div>
    </>
  );
}

function BrandView({ category, brand }: { category: Category; brand: Brand }) {
  return (
    <>
      {brand.logo && (
        <div className="flex items-center justify-center py-4 mb-2 bg-white rounded-2xl border">
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="h-14 object-contain"
          />
        </div>
      )}
      <h1 className="text-xl font-extrabold">{brand.name} models</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Tap any model to enquire on WhatsApp for price & availability.
      </p>
      <div className="mt-5 space-y-6">
        {brand.groups!.map((g) => (
          <section key={g.title}>
            <h2 className="text-sm font-bold uppercase tracking-wider text-foreground/80">
              {g.title}
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {g.models.map((m) => (
                <WA
                  key={m.id}
                  message={`Hi S P Enterprises, I'd like to know the price of ${brand.name} ${m.name}${m.note ? ` (${m.note})` : ""}.`}
                  className="flex flex-col rounded-2xl bg-card border overflow-hidden shadow-sm active:scale-[0.99] transition"
                >
                  <div className="relative aspect-square bg-white">
                    <img
                      src={m.image}
                      alt={`${brand.name} ${m.name}`}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      {brand.name}
                    </div>
                    <h3 className="text-[13px] font-bold leading-snug">{m.name}</h3>
                    {m.note && (
                      <p className="text-[11px] text-muted-foreground mt-0.5">{m.note}</p>
                    )}
                  </div>
                </WA>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
