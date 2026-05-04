import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ShoppingCart, ShoppingBag } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { categories, getCategoryBySlug } from "@/lib/materialsData";
import { useQuoteCart } from "@/lib/quoteCart";
import { useState } from "react";

function AddToQuoteBtn({ categorySlug, categoryName, product }: { categorySlug: string; categoryName: string; product: { slug: string; name: string; image: string; variants: string[]; units: string[] } }) {
  const { addItem, total } = useQuoteCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      categorySlug,
      categoryName,
      productSlug: product.slug,
      productName: product.name,
      variant: product.variants[0],
      unit: product.units[0],
      image: product.image,
      qty: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
        added
          ? "bg-green-600 text-white"
          : "bg-[#0c1c5e] hover:bg-[#1a4fdb] text-white"
      }`}
    >
      <ShoppingBag className="w-4 h-4" />
      {added ? "Added!" : "Add to Quote"}
    </button>
  );
}

export default function MaterialCategory() {
  const { category: catSlug } = useParams<{ category: string }>();
  const { total } = useQuoteCart();
  const category = getCategoryBySlug(catSlug ?? "");

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#0c1c5e] mb-4">Category not found</h2>
            <Link href="/materials" className="text-[#1a4fdb] hover:underline">← Back to Materials</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const otherCategories = categories.filter(c => c.slug !== category.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-[#0c1c5e] overflow-hidden">
        <img src={category.image} alt={category.name} className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 text-center py-16 px-4">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/80 font-semibold text-lg mb-1"
          >
            Covering all major products of Infrastructure & Construction industry
          </motion.p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b py-3 px-4">
        <div className="container mx-auto flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#1a4fdb]">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/materials" className="hover:text-[#1a4fdb]">Materials</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#1a4fdb] font-medium">{category.name}</span>
          {total > 0 && (
            <Link href="/quote-cart" className="ml-auto flex items-center gap-2 bg-[#1a4fdb] text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#0c1c5e] transition-colors">
              <ShoppingCart className="w-4 h-4" />
              Quote Cart ({total})
            </Link>
          )}
        </div>
      </div>

      <main className="flex-1 py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Category heading */}
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Category: {category.name}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c1c5e]">We cover 1000+ Products</h2>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-14">
            {category.products.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-gray-200 rounded-xl overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <Link href={`/materials/${category.slug}/${product.slug}`}>
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 right-2 w-8 h-8 bg-[#1a4fdb] rounded-full flex items-center justify-center shadow">
                      <ShoppingBag className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-semibold text-[#0c1c5e] text-sm">{product.name}</p>
                  </div>
                </Link>
                <div className="px-3 pb-3">
                  <AddToQuoteBtn categorySlug={category.slug} categoryName={category.name} product={product} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other categories */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-5">Other Categories</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {otherCategories.map((cat, i) => (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link href={`/materials/${cat.slug}`}>
                    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-[#1a4fdb]/30 transition-all duration-300 group cursor-pointer">
                      <div className="h-28 overflow-hidden">
                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-2.5">
                        <span className="flex items-center gap-1 text-[#1a4fdb] text-sm font-semibold">
                          <ChevronRight className="w-3.5 h-3.5" /> {cat.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
