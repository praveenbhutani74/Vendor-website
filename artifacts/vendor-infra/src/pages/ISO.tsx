import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";

const certs = [
  {
    id: "ISO 9001",
    label: "Quality Management System",
    desc: "Vendor Infra is ISO 9001 certified. This is one of the most popular ISO standards for creating, implementing, and maintaining a Quality Management System (QMS) for any given company, regardless of its industry, capital, or size. It ensures our processes, services, and deliverables consistently meet customer and regulatory requirements.",
    color: "bg-[#1a4fdb]",
  },
  {
    id: "ISO 14001",
    label: "Environmental Management System",
    desc: "Vendor Infra is ISO 14001 certified. This ISO standard provides guidelines on what has to be done to implement an environmental management system (EMS). It includes policies, processes, plans, records, and best practices that define rules regarding how your company interacts with the environment. ISO 14001 requirements give you a framework, along with guidelines, for creating EMS for any organization.",
    color: "bg-[#0c1c5e]",
  },
  {
    id: "ISO 27001",
    label: "Information Security Management",
    desc: "Vendor Infra is ISO 27001 certified. This ISO Standard is for information security. It specifies the requirements for establishing, implementing, maintaining and continually improving an information security management system within the context of the organization. It also includes requirements for the assessment and treatment of information security risks tailored to the needs of the organization.",
    color: "bg-[#1a4fdb]",
  },
];

export default function ISO() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHero
        eyebrow="ISO Certifications"
        title="Globally recognized certifications for trusted quality"
        subtitle="Vendor Infra holds multiple ISO certifications, demonstrating our commitment to quality, environmental responsibility, and information security."
      />

      <section className="py-20 bg-gray-50 flex-1">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row"
              >
                <div className={`${cert.color} text-white p-8 md:w-56 flex flex-col justify-center items-center text-center shrink-0`}>
                  <p className="text-4xl font-black mb-1">{cert.id}</p>
                  <p className="text-blue-200 text-xs uppercase tracking-wider">{cert.label}</p>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-[#0c1c5e] font-bold text-xl mb-3">{cert.id} — {cert.label}</h3>
                  <p className="text-gray-600 leading-relaxed">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center"
          >
            <h3 className="text-[#0c1c5e] font-bold text-xl mb-3">Our Commitment to Excellence</h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              These certifications are not just credentials — they reflect our daily operational standards.
              Every process at Vendor Infra is designed to deliver quality, protect the environment, and
              safeguard your data, so you can focus on building India's infrastructure with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
