import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ShoppingCart, Truck, ShieldCheck, BarChart3, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { categories } from "@/lib/materialsData";
import { useQuoteCart } from "@/lib/quoteCart";

const features = [
  { icon: ShoppingCart, label: "Lowest Price" },
  { icon: ShieldCheck,  label: "Quality Assurance" },
  { icon: Truck,        label: "Pan India Delivery" },
  { icon: BarChart3,    label: "Easily Track Orders" },
];

export default function Materials() {
  const { total } = useQuoteCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-[#0c1c5e] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80"
          alt="Materials"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center py-20 px-4">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/80 font-semibold text-lg mb-2"
          >
            Materials
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-2xl md:text-3xl font-bold"
          >
            Covering all major products of<br />Infrastructure & Construction industry
          </motion.h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b py-3 px-4">
        <div className="container mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#1a4fdb]">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#1a4fdb] font-medium">Materials</span>
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
          {/* Heading */}
          <div className="text-center mb-10">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-1">/ Materials /</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c1c5e]">
              We provide 1000+ materials accross 10+ Categories
            </h2>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/materials/${cat.slug}`}>
                  <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-[#1a4fdb]/40 transition-all duration-300 cursor-pointer group">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3 bg-white">
                      <button className="flex items-center gap-1 text-[#1a4fdb] text-sm font-semibold group-hover:gap-2 transition-all">
                        <ChevronRight className="w-4 h-4" /> {cat.name}
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Feature Strip */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map(f => (
              <div key={f.label} className="flex items-center gap-3 border border-gray-200 rounded-full px-6 py-3 text-sm font-medium text-gray-700">
                <f.icon className="w-5 h-5 text-[#1a4fdb]" />
                {f.label}
              </div>
            ))}
            <a href="tel:+918800404840" className="flex items-center gap-3 bg-[#1a4fdb] text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#0c1c5e] transition-colors">
              <Phone className="w-5 h-5" />
              Any query (Call us)
            </a>
          </div>

          {/* Product Category Index */}
          <div className="bg-[#0c1c5e] rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4">Product Category</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {categories.map(cat => (
                <Link key={cat.slug} href={`/materials/${cat.slug}`} className="text-blue-300 hover:text-white text-sm flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3" /> {cat.name}
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
