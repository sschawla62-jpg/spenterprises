import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  ArrowLeft,
  Check,
  Shield,
  Truck,
  BadgeCheck,
  Package,
} from "lucide-react";
import { BUSINESS, PRODUCTS, productById, telLink, waLink } from "@/lib/catalog";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = productById(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found — S P Enterprises" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.product;
    const title = `${p.name} — ₹${p.price.toLocaleString("en-IN")} | S P Enterprises`;
    const desc = `${p.brand} ${p.name}. ${p.spec}. ${p.warranty} warranty. Buy at S P Enterprises, Kanpur — call or WhatsApp 7275336699.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductPage,
});

function ProductNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="text-center max-w-sm">
        <Package className="w-10 h-10 mx-auto text-muted-foreground" />
        <h1 className="mt-4 text-xl font-extrabold">Product not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This appliance may have been removed. Browse the full catalog instead.
        </p>
        <Link
          to="/catalog"
          search={{ cat: "all" }}
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground font-semibold px-4 py-2.5 text-sm"
        >
          Back to catalog
        </Link>
      </div>
    </div>
  );
}

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const off = p.mrp ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
  const save = p.mrp ? p.mrp - p.price : 0;
  const enquireMsg = `Hi S P Enterprises, I'd like to buy ${p.name} (₹${p.price.toLocaleString("en-IN")}). Is it in stock?`;

  const related = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b">
        <div className="mx-auto max-w-md px-4 py-3 flex items-center gap-3">
          <Link
            to="/catalog"
            search={{ cat: "all" }}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-secondary-foreground"
            aria-label="Back"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="flex-1 min-w-0">
            <div className="text-xs text-muted-foreground uppercase tracking-wider truncate">
              {p.brand}
            </div>
            <div className="text-sm font-bold leading-tight truncate">{p.name}</div>
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

      <main className="mx-auto max-w-md">
        {/* Gallery */}
        <section className="bg-card">
          <div className="relative aspect-square bg-muted overflow-hidden">
            <img
              src={p.gallery[active]}
              alt={p.name}
              width={900}
              height={900}
              className="w-full h-full object-cover"
            />
            {p.tag && (
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                {p.tag}
              </span>
            )}
            {off > 0 && (
              <span className="absolute top-3 right-3 text-xs font-bold bg-primary text-primary-foreground px-2.5 py-1 rounded-full shadow">
                {off}% OFF
              </span>
            )}
          </div>
          {p.gallery.length > 1 && (
            <div className="flex gap-2 p-3 overflow-x-auto no-scrollbar">
              {p.gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                    active === i ? "border-primary" : "border-transparent opacity-70"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Title + price */}
        <section className="px-4 pt-5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-primary">
            {p.brand}
          </div>
          <h1 className="mt-1 text-xl font-extrabold leading-tight">{p.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{p.spec}</p>

          <div className="mt-4 flex items-baseline gap-2 flex-wrap">
            <span className="text-3xl font-extrabold text-foreground">
              ₹{p.price.toLocaleString("en-IN")}
            </span>
            {p.mrp && (
              <>
                <span className="text-sm text-muted-foreground line-through">
                  ₹{p.mrp.toLocaleString("en-IN")}
                </span>
                <span className="text-xs font-bold text-[color:var(--color-whatsapp)]">
                  Save ₹{save.toLocaleString("en-IN")}
                </span>
              </>
            )}
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">
            Inclusive of all taxes · Store price in Kanpur
          </p>

          {/* Trust strip */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { icon: BadgeCheck, label: "100% Genuine" },
              { icon: Shield, label: p.warranty },
              { icon: Truck, label: "Kanpur delivery" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-xl bg-card border p-2.5 text-center flex flex-col items-center gap-1"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-semibold leading-tight text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="px-4 mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-foreground/80">
            About this appliance
          </h2>
          <p className="mt-2 text-sm text-foreground/90 leading-relaxed">{p.description}</p>
        </section>

        {/* Features */}
        <section className="px-4 mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-foreground/80">
            Key features
          </h2>
          <ul className="mt-3 space-y-2">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent/40">
                  <Check className="w-3 h-3 text-primary" />
                </span>
                <span className="text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Spec table */}
        <section className="px-4 mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-foreground/80">
            Specifications
          </h2>
          <div className="mt-3 rounded-2xl border bg-card overflow-hidden">
            {p.specs.map((s, i) => (
              <div
                key={s.label}
                className={`flex justify-between px-4 py-3 text-sm ${
                  i !== p.specs.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="text-muted-foreground">{s.label}</span>
                <span className="font-semibold text-foreground text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* In the box */}
        <section className="px-4 mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-foreground/80">
            What's in the box
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.inBox.map((item) => (
              <span
                key={item}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="px-4 mt-8">
            <h2 className="text-lg font-extrabold">You may also like</h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to="/product/$id"
                  params={{ id: r.id }}
                  className="flex flex-col rounded-2xl bg-card border overflow-hidden shadow-sm active:scale-[0.99] transition"
                >
                  <div className="aspect-square bg-muted">
                    <img
                      src={r.img}
                      alt={r.name}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      {r.brand}
                    </div>
                    <h3 className="text-xs font-semibold leading-snug line-clamp-2 mt-0.5">
                      {r.name}
                    </h3>
                    <div className="mt-1 text-sm font-extrabold">
                      ₹{r.price.toLocaleString("en-IN")}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <p className="mt-8 text-center text-xs text-muted-foreground px-4">
          Visit us at {BUSINESS.address}
        </p>
      </main>

      {/* Sticky action bar */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-t"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto max-w-md px-4 py-3 flex gap-2">
          <a
            href={waLink(enquireMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.3] inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--color-whatsapp)] text-[color:var(--color-whatsapp-foreground)] font-semibold py-3 text-sm shadow-lg active:scale-[0.98] transition"
          >
            <MessageCircle className="w-5 h-5" /> Enquire on WhatsApp
          </a>
          <a
            href={telLink()}
            aria-label="Call now"
            className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground font-semibold px-5 text-sm shadow-lg active:scale-[0.98] transition"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </div>
  );
}
