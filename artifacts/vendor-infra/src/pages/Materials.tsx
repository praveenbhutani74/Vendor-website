import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  PackageSearch,
  Phone,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MaterialImage } from "@/components/materials/MaterialImage";
import { categories } from "@/lib/materialsData";
import { useQuoteCart } from "@/lib/quoteCart";

const features = [
  { icon: ShoppingCart, label: "Price discovery" },
  { icon: ShieldCheck, label: "Verified sourcing" },
  { icon: Truck, label: "Pan India delivery" },
  { icon: BarChart3, label: "Order visibility" },
];

export default function Materials() {
  const { total } = useQuoteCart();
  const productCount = categories.reduce((sum, category) => sum + category.products.length, 0);
  const featuredCategories = categories.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#07143f]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,20,63,0.96),rgba(12,42,110,0.88))]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:28px_28px]" />
        <div className="container relative z-10 mx-auto grid min-h-[360px] gap-10 px-4 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85">
              <PackageSearch className="h-4 w-4 text-[#FFB401]" />
              Materials procurement catalog
            </div>
            <h1 className="max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
              Source construction materials across every major category
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              Browse verified material categories, compare options, and add products to your quote cart for faster procurement decisions.
            </p>
            <div className="mt-8 grid max-w-xl grid-cols-3 overflow-hidden rounded-lg border border-white/15 bg-white/10 backdrop-blur">
              <div className="border-r border-white/15 p-4">
                <p className="text-2xl font-black text-white">{categories.length}+</p>
                <p className="text-xs font-medium text-white/85">Categories</p>
              </div>
              <div className="border-r border-white/15 p-4">
                <p className="text-2xl font-black text-white">{productCount}+</p>
                <p className="text-xs font-medium text-white/85">Product groups</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-black text-white">1K+</p>
                <p className="text-xs font-medium text-white/85">Material options</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
          >
            {featuredCategories.map((category) => (
              <Link key={category.slug} href={`/materials/${category.slug}`}>
                <div className="group grid grid-cols-[92px_1fr] overflow-hidden rounded-lg border border-white/15 bg-white shadow-xl shadow-black/10 transition-transform hover:-translate-y-0.5">
                  <MaterialImage src={category.image} alt={category.name} label={category.name} className="h-24 w-full object-cover" />
                  <div className="flex min-w-0 flex-col justify-center p-4">
                    <p className="truncate text-sm font-black text-[#00244F]">{category.name}</p>
                    <p className="mt-1 text-xs text-gray-500">{category.products.length} product groups</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#FF7F00]">
                      View category <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b bg-white px-4 py-3">
        <div className="container mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#FF7F00]">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#FF7F00] font-medium">Materials</span>
          {total > 0 && (
            <Link href="/quote-cart" className="ml-auto flex items-center gap-2 rounded-full bg-[#FF7F00] px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#00244F]">
              <ShoppingCart className="w-4 h-4" />
              Quote Cart ({total})
            </Link>
          )}
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#FF7F00]">Material categories</p>
              <h2 className="text-2xl font-black text-[#00244F] md:text-3xl">Find the right supply category</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-500">
                Select a category to view product groups, units, variants, and add items to your quote cart.
              </p>
            </div>
            <a href="tel:+918800404840" className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#00244F] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#FF7F00]">
              <Phone className="h-4 w-4" />
              Talk to procurement
            </a>
          </div>

          {/* Feature Strip */}
          <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF7F00]/10">
                  <feature.icon className="h-4 w-4 text-[#FF7F00]" />
                </span>
                <span className="text-sm font-bold text-[#00244F]">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Category Grid */}
          <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/materials/${cat.slug}`}>
                  <div className="group h-full cursor-pointer overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7F00]/50 hover:shadow-xl hover:shadow-blue-900/10">
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      <MaterialImage
                        src={cat.image}
                        alt={cat.name}
                        label={cat.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06133d]/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-[#00244F] shadow-sm">
                        {cat.products.length} groups
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="truncate text-base font-black text-[#00244F]">{cat.name}</h3>
                          <p className="mt-1 text-sm text-gray-500">Variants, units, and quote-ready items</p>
                        </div>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-[#FF7F00] transition-colors group-hover:border-[#FF7F00] group-hover:bg-[#FF7F00] group-hover:text-white">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Product Category Index */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFB401]/20 text-[#00244F]">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-black text-[#00244F]">Product category index</h3>
                <p className="text-sm text-gray-500">Jump directly to a material family.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/materials/${cat.slug}`} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-[#00244F] transition-colors hover:border-[#FF7F00] hover:bg-[#FF7F00] hover:text-white">
                  {cat.name}
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
