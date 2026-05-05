import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ShoppingCart, ShoppingBag } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MaterialImage } from "@/components/materials/MaterialImage";
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
          : "bg-[#00244F] hover:bg-[#FF7F00] text-white"
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
            <h2 className="text-2xl font-bold text-[#00244F] mb-4">Category not found</h2>
            <Link href="/materials" className="text-[#FF7F00] hover:underline">← Back to Materials</Link>
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
      <div className="relative bg-[#00244F] overflow-hidden">
        <MaterialImage src={category.image} alt={category.name} label={category.name} className="absolute inset-0 w-full h-full object-cover opacity-20" />
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
          <Link href="/" className="hover:text-[#FF7F00]">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/materials" className="hover:text-[#FF7F00]">Materials</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#FF7F00] font-medium">{category.name}</span>
          {total > 0 && (
            <Link href="/quote-cart" className="ml-auto flex items-center gap-2 bg-[#FF7F00] text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#00244F] transition-colors">
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#00244F]">We cover 1000+ Products</h2>
          </div>

          {/* Products Grid */}
          {category.products.length === 0 && (
            <div className="text-center py-16 mb-8">
              <p className="text-gray-400 text-lg font-medium">Products coming soon</p>
              <p className="text-gray-400 text-sm mt-2">Contact us for enquiries in this category</p>
            </div>
          )}
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
                    <MaterialImage
                      src={product.image}
                      alt={product.name}
                      label={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 right-2 w-8 h-8 bg-[#FF7F00] rounded-full flex items-center justify-center shadow">
                      <ShoppingBag className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-semibold text-[#00244F] text-sm">{product.name}</p>
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
                    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-[#FF7F00]/30 transition-all duration-300 group cursor-pointer">
                      <div className="h-28 overflow-hidden">
                        <MaterialImage src={cat.image} alt={cat.name} label={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-2.5">
                        <span className="flex items-center gap-1 text-[#FF7F00] text-sm font-semibold">
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
