import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const sectors = [
  {
    name: "Roads & Bridges",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
    description: "National highways, expressways, flyovers & bridge infrastructure",
  },
  {
    name: "Urban Transport",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80",
    description: "Metro rail, MRTS, BRT and urban mobility systems",
  },
  {
    name: "Transmission Lines & Substations",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    description: "HV/EHV transmission networks and substation projects",
  },
  {
    name: "Airports",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    description: "Greenfield airports, terminal expansions and airside works",
  },
  {
    name: "Railways",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    description: "Dedicated freight corridors, high-speed rail and station upgrades",
  },
  {
    name: "Industrial Corridor Projects",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    description: "DMIC, CBIC and other industrial zone developments",
  },
  {
    name: "Smart Cities",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    description: "Integrated command centers, ICT infrastructure and urban services",
  },
  {
    name: "Ports",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
    description: "Major ports, minor ports and inland waterways infrastructure",
  },
  {
    name: "Water & Waste Water",
    image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?w=600&q=80",
    description: "Water supply, sewage treatment and distribution networks",
  },
  {
    name: "Renewable Power",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    description: "Solar, wind, hydro and hybrid renewable energy projects",
  },
  {
    name: "Power",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
    description: "Thermal, hydro and nuclear power generation projects",
  },
  {
    name: "Buildings & Industrial Projects",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    description: "Commercial complexes, factories and industrial facilities",
  },
  {
    name: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    description: "Offshore platforms, pipelines and refinery infrastructure",
  },
  {
    name: "Irrigation & Tunnel Projects",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    description: "Dams, canals, micro-irrigation and tunnel construction",
  },
  {
    name: "Solid Waste Management",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
    description: "Waste processing plants, landfill and material recovery facilities",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Sectors() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0c1c5e] py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#1a4fdb] font-semibold uppercase tracking-widest text-sm mb-4"
          >
            / Sectors /
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Enabling transformation across{" "}
            <span className="text-[#4d7bff]">20+ sectors</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-200 text-lg max-w-2xl mx-auto"
          >
            From roads to renewable energy, Vendor Infra powers procurement, collaboration
            and supply chain across every major infrastructure vertical in India.
          </motion.p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 bg-gray-50 flex-1">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sectors.map((sector) => (
              <motion.div
                key={sector.name}
                variants={item}
                className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c5e]/90 via-[#0c1c5e]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-1">{sector.name}</h3>
                  <p className="text-blue-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a4fdb]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to streamline your sector's supply chain?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join thousands of contractors, vendors and EPC companies already on Vendor Infra.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1a4fdb] font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
