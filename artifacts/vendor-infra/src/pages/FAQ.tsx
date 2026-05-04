import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";

const faqGroups = [
  {
    group: "For Vendors, Contractors, Suppliers, Manufacturers & Consultants",
    faqs: [
      {
        q: "What are the benefits for vendors/suppliers joining Vendor Infra?",
        a: "Vendors gain visibility among infrastructure & Construction project owners, access to multiple sectors, market exposure, opportunities for business growth, and integration into project supply-chains.",
      },
      {
        q: "How do I get support if I face issues or need help onboarding?",
        a: "Vendor Infra provides dedicated support and guidance to users to help them achieve goals and meet deadlines. Our support team is available round-the-clock and Plus/Premium plan subscribers receive a dedicated account manager.",
      },
      {
        q: "How do I upgrade or cancel my subscription?",
        a: "You should review your subscription plan via the dashboard in the portal. For cancellation/expiry policies, refer to the terms and conditions provided at signup. Some services may remove listing or data if a subscription lapses.",
      },
      {
        q: "How does the Plants & Equipment 'hire or sale' functionality work?",
        a: "Owners can list their idle or unused plants and equipment for short-term or long-term hire or outright sale. Hirers can search by brand, category, or location and send a reservation request. Once confirmed, both parties are bound by the rental/sale agreement.",
      },
      {
        q: "How is vendor reliability and data security handled?",
        a: "The platform emphasises verified vendors and high standards of data security. Every vendor and supplier is vetted. We maintain highest safety standards for your data and ensure a reliable multiple-vendor environment.",
      },
      {
        q: "Is use of Vendor Infra free or paid?",
        a: "Registration is free. For Vendors, the Basic, Plus, and Premium plans are currently available at no cost as part of our early-adopter programme. For Contractors, the Basic plan is priced at ₹50,000/year. Full access to all premium services requires a paid subscription. Exact pricing is confirmed on our Pricing page.",
      },
    ],
  },
  {
    group: "For Investors",
    faqs: [
      {
        q: "What is the business model of Vendor Infra?",
        a: "Vendor Infra operates as a SaaS-enabled B2B marketplace and digital collaboration platform in the infrastructure/construction sector. Revenue streams include subscriptions, vendor listings, marketplace transactions (equipment hire/sale), financing/insurance facilitation and intelligence services.",
      },
      {
        q: "What problem is Vendor Infra solving in the infrastructure industry?",
        a: "It addresses inefficiencies such as: fragmented vendor discovery, limited access to competitive quotes, under-utilised equipment assets, slow procurement, risk of vendor unavailability, and the need for integrated project intelligence.",
      },
      {
        q: "What is the market opportunity and target audience?",
        a: "The platform targets vendors, suppliers, contractors, developers and project owners in the infrastructure and construction sectors across many sub-sectors. The infrastructure market in India presents significant growth potential for digital collaboration tools, with government spending on infrastructure at an all-time high.",
      },
      {
        q: "How can interested investors engage with Vendor Infra?",
        a: "Investors can reach out via the company's contact page, request a pitch/deck, discuss strategic partnership or funding rounds. Contact us at enquiry@vendorinfra.com or call +91-8800404840.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#0c1c5e] text-sm leading-relaxed">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#1a4fdb] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHero
        eyebrow="FAQ"
        title="Answers to your most common questions"
        subtitle="Everything you need to know about the Vendor Infra platform. Can't find what you're looking for? Contact our team."
      />

      <section className="py-20 bg-gray-50 flex-1">
        <div className="container mx-auto px-4 max-w-3xl">
          {faqGroups.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-[#0c1c5e] font-bold text-xl mb-6 pb-3 border-b border-gray-200">
                {group.group}
              </h2>
              <div className="space-y-3">
                {group.faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </motion.div>
          ))}

          <div className="bg-[#1a4fdb] text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
            <p className="text-blue-100 mb-6 text-sm">
              Our team is ready to help. Reach out and we will get back to you within one business day.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#1a4fdb] font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
