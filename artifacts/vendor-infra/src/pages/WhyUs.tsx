import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";

const reasons = [
  {
    title: "End-to-End Value Chain Integration",
    desc: "From vendor discovery and material procurement to financing, insurance and plant & equipment hire/sales, we provide a full-stack AI powered platform that bridges every gap in infrastructure & construction. No more juggling multiple tools or vendors.",
    icon: "🔗",
  },
  {
    title: "Single Unified Data Lake",
    desc: "One unified data lake for all project, procurement, vendor, and site data—fully unified and instantly accessible. Eliminate silos, improve decision-making, and run your entire project ecosystem with real-time intelligence.",
    icon: "🗄️",
  },
  {
    title: "Smart Decision Support via Market Intelligence",
    desc: "Sector insights, industry updates, schedules of rates, competitive intelligence, tender & PQ samples. We provide context and foresight so you can plan strategically, not just reactively.",
    icon: "📊",
  },
  {
    title: "AI & ML-Driven Insights",
    desc: "Vendor Infra leverages Artificial Intelligence and Machine Learning to match you with the best-suited requirement and generate real-time analytics for smarter, data-backed decisions.",
    icon: "🤖",
  },
  {
    title: "Safety, Security & Trust Built In",
    desc: "Every vendor and supplier is vetted. Data security is paramount. We ensure the platform and your data adhere to high standards so your decisions are reliable, protected and scalable.",
    icon: "🔒",
  },
  {
    title: "Dedicated Support & Accountability",
    desc: "Our team is available round-the-clock. Beyond just tech support, we assign dedicated account managers to guide you at every stage so that deadlines are not just met, but exceeded.",
    icon: "🤝",
  },
  {
    title: "100% Verified Vendor Database",
    desc: "Access a thoroughly verified database of suppliers and contractors. Search by rating, size, and capacity to select the right vendor — reducing time spent shortlisting for projects, materials, financing, insurance, and equipment.",
    icon: "✅",
  },
  {
    title: "20+ Sectors Covered",
    desc: "From roads and railways to renewable energy and smart cities, Vendor Infra serves every major infrastructure vertical in India. One platform, every sector.",
    icon: "🏗️",
  },
];

export default function WhyUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHero
        eyebrow="Why Vendor Infra"
        title="Why Choose Vendor Infra?"
        subtitle="The only platform purpose-built for the infrastructure and construction industry — combining collaboration, marketplace, and supply chain intelligence in one powerful ecosystem."
      />

      <section className="py-20 bg-gray-50 flex-1">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-5">
                  {r.icon}
                </div>
                <h3 className="text-[#0c1c5e] font-bold text-lg mb-3">{r.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1a4fdb]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join thousands of infrastructure professionals already using Vendor Infra.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#1a4fdb] font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors"
          >
            Book a Free Demo
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
