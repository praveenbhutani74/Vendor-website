import { Link, useParams } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Minus, Plus, RotateCcw, ShoppingCart, Check, ShoppingBag } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { categories, getProductBySlug } from "@/lib/materialsData";
import { useQuoteCart } from "@/lib/quoteCart";

export default function MaterialProduct() {
  const { category: catSlug, product: prodSlug } = useParams<{ category: string; product: string }>();
  const { addItem, total } = useQuoteCart();
  const result = getProductBySlug(catSlug ?? "", prodSlug ?? "");
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#0c1c5e] mb-4">Product not found</h2>
            <Link href="/materials" className="text-[#1a4fdb] hover:underline">← Back to Materials</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { category, product } = result;

  const handleAddToQuote = () => {
    addItem({
      categorySlug: category.slug,
      categoryName: category.name,
      productSlug: product.slug,
      productName: product.name,
      variant: product.variants[selectedVariant],
      unit: product.units[selectedUnit],
      image: product.image,
      qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  const relatedProducts = category.products.filter(p => p.slug !== product.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b py-3 px-4">
        <div className="container mx-auto flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#1a4fdb]">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/materials" className="hover:text-[#1a4fdb]">Materials</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/materials/${category.slug}`} className="hover:text-[#1a4fdb]">{category.name}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#1a4fdb] font-medium">{product.name}</span>
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
          {/* Product Detail */}
          <div className="grid md:grid-cols-2 gap-10 mb-16 max-w-4xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
              />
            </motion.div>

            {/* Details panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="border border-gray-200 rounded-2xl p-8"
            >
              <h1 className="text-2xl font-bold text-[#1a4fdb] mb-6">{product.name}</h1>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{product.description}</p>

              {/* Product (variant) selector */}
              <div className="mb-4">
                <label className="flex items-center gap-4 text-sm">
                  <span className="font-semibold text-gray-700 w-20">Products</span>
                  <select
                    value={selectedVariant}
                    onChange={e => setSelectedVariant(Number(e.target.value))}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4fdb]/30 focus:border-[#1a4fdb]"
                  >
                    <option value="" disabled>Choose an option</option>
                    {product.variants.map((v, i) => (
                      <option key={v} value={i}>{v}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="border-t border-gray-100 my-4" />

              {/* Unit selector */}
              <div className="mb-6">
                <label className="flex items-center gap-4 text-sm">
                  <span className="font-semibold text-gray-700 w-20">Unit</span>
                  <select
                    value={selectedUnit}
                    onChange={e => setSelectedUnit(Number(e.target.value))}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4fdb]/30 focus:border-[#1a4fdb]"
                  >
                    <option value="" disabled>Choose an option</option>
                    {product.units.map((u, i) => (
                      <option key={u} value={i}>{u}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="border-t border-gray-100 my-4" />

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-semibold">{qty}</span>
                  <button
                    onClick={() => setQty(q => q + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setQty(1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-gray-400 transition-colors"
                    title="Reset"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-gray-400 text-xs">Quantity</span>
              </div>

              {/* Add to Quote button */}
              <button
                onClick={handleAddToQuote}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-base transition-all duration-300 ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-[#1a4fdb] hover:bg-[#0c1c5e] text-white"
                }`}
              >
                {added ? <Check className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />}
                {added ? "Added to Quote!" : "Add to Quote"}
              </button>

              {added && (
                <div className="mt-3 text-center">
                  <Link href="/quote-cart" className="text-[#1a4fdb] text-sm hover:underline font-medium">
                    View Quote Cart →
                  </Link>
                </div>
              )}
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-[#0c1c5e] mb-6">Related Products</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {relatedProducts.map((rp, i) => (
                  <motion.div
                    key={rp.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="border border-gray-200 rounded-xl overflow-hidden group hover:shadow-md transition-all duration-300"
                  >
                    <Link href={`/materials/${category.slug}/${rp.slug}`}>
                      <div className="h-32 overflow-hidden">
                        <img src={rp.image} alt={rp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-3">
                        <p className="font-semibold text-[#0c1c5e] text-sm">{rp.name}</p>
                      </div>
                    </Link>
                    <div className="px-3 pb-3">
                      <button
                        onClick={() => addItem({ categorySlug: category.slug, categoryName: category.name, productSlug: rp.slug, productName: rp.name, variant: rp.variants[0], unit: rp.units[0], image: rp.image })}
                        className="w-full flex items-center justify-center gap-1 bg-[#0c1c5e] hover:bg-[#1a4fdb] text-white py-2 rounded-lg text-xs font-semibold transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" /> Add to Quote
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
