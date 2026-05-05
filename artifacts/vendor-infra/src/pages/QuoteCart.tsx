import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MaterialImage } from "@/components/materials/MaterialImage";
import { useQuoteCart } from "@/lib/quoteCart";
import { PageHero } from "@/components/layout/PageHero";

export default function QuoteCart() {
  const { items, removeItem, updateQty, clearCart, total } = useQuoteCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gray-50 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center max-w-md"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-[#00244F] mb-3">Quote Request Sent!</h2>
            <p className="text-gray-500 mb-8">Our team will review your requirements and contact you within 24 hours with pricing and availability.</p>
            <Link href="/materials">
              <button className="bg-[#FF7F00] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#00244F] transition-colors">
                Continue Shopping
              </button>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHero
        eyebrow="Materials"
        title="Your Quote Cart"
        subtitle="Review your selected items and submit a quote request. Our team will respond within 24 hours."
      />

      <section className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/materials" className="inline-flex items-center gap-2 text-[#FF7F00] text-sm font-medium mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Materials
          </Link>

          {items.length === 0 ? (
            <div className="bg-white rounded-2xl p-16 text-center border border-gray-100 shadow-sm">
              <ShoppingCart className="w-16 h-16 text-gray-200 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#00244F] mb-3">Your cart is empty</h3>
              <p className="text-gray-400 mb-8">Browse our materials catalogue and add items to get a quote.</p>
              <Link href="/materials">
                <button className="bg-[#FF7F00] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#00244F] transition-colors">
                  Browse Materials
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-bold text-[#00244F] text-lg">{total} item{total !== 1 ? "s" : ""} in cart</h2>
                  <button onClick={clearCart} className="text-red-400 hover:text-red-600 text-sm font-medium flex items-center gap-1 transition-colors">
                    <Trash2 className="w-4 h-4" /> Clear All
                  </button>
                </div>

                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={`${item.productSlug}-${item.variant}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0 }}
                      className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex gap-4"
                    >
                      <MaterialImage src={item.image} alt={item.productName} label={item.productName} className="w-20 h-20 object-cover rounded-lg shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400 uppercase tracking-wide">{item.categoryName}</p>
                        <p className="font-bold text-[#00244F] mt-0.5">{item.productName}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{item.variant} · {item.unit}</p>
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                            <button
                              onClick={() => updateQty(item.productSlug, item.variant, item.qty - 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5 text-gray-600" />
                            </button>
                            <span className="w-10 text-center text-sm font-semibold">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.productSlug, item.variant, item.qty + 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5 text-gray-600" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.productSlug, item.variant)}
                            className="text-red-400 hover:text-red-600 transition-colors ml-auto"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Quote Form */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
                  <h3 className="font-bold text-[#00244F] text-lg mb-5 flex items-center gap-2">
                    <Send className="w-5 h-5 text-[#FF7F00]" /> Submit Quote Request
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 block mb-1">Full Name *</label>
                      <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7F00]/30 focus:border-[#FF7F00]"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 block mb-1">Company Name *</label>
                      <input required value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7F00]/30 focus:border-[#FF7F00]"
                        placeholder="Your Company Pvt. Ltd."
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 block mb-1">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7F00]/30 focus:border-[#FF7F00]"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 block mb-1">Phone *</label>
                      <input required type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7F00]/30 focus:border-[#FF7F00]"
                        placeholder="+91-XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 block mb-1">Additional Notes</label>
                      <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        rows={3}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7F00]/30 focus:border-[#FF7F00] resize-none"
                        placeholder="Delivery location, project timeline, special requirements..."
                      />
                    </div>
                    <button type="submit" className="w-full bg-[#FF7F00] hover:bg-[#00244F] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Submit Quote Request
                    </button>
                    <p className="text-center text-xs text-gray-400">We'll respond within 24 hours</p>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
