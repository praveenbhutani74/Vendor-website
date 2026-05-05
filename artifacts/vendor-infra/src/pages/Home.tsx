import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Search, Zap, Building2, ShieldCheck, TrendingUp, Handshake,
  ArrowRight, Star, ChevronLeft, ChevronRight, CheckCircle2,
  Package, FileText, BarChart3
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* -- animated counter ------------------------------- */
function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{count.toLocaleString("en-IN")}{suffix}</span>;
}

/* -- fade-up wrapper -------------------------------- */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1] as const
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* -- stagger grid container ------------------------ */
const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};
const gridItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const
    }
  },
}
/* -- data ------------------------------------------- */
const services = [
  { icon: Search,      title: "AI-Powered Vendor Discovery",     desc: "Search and compare verified vendors by rating, size, and capability for every item in your Bill of Quantities." },
  { icon: Zap,         title: "Smart Price Discovery",           desc: "Send instant proposals and receive multiple quotes to identify the best supplier at the right price." },
  { icon: Building2,   title: "AI-Powered Plants & Equipment",   desc: "Buy, sell, or hire verified plants and equipment through a secure, transparent marketplace." },
  { icon: Package,     title: "Smart Material Procurement",      desc: "One-stop B2B solution for all raw material needs with value-chain integration across suppliers." },
  { icon: ShieldCheck, title: "Smart Project Insurance",         desc: "CAR, EAR, and Workmen Compensation from reputed insurers at competitive rates." },
  { icon: TrendingUp,  title: "AI-Powered Enterprise Services",  desc: "Subcontracting, organisational growth, market entry, and diversification support." },
  { icon: BarChart3,   title: "Sector Intelligence & SOR",       desc: "Access 75+ Schedules of Rates and real-time market intelligence across 20+ sectors." },
  { icon: FileText,    title: "Projects & Tender Updates",       desc: "Stay updated with the latest project and tender announcements across all infrastructure sectors." },
  { icon: Handshake,   title: "Supply Chain Financing",          desc: "Attractive financing rates from HDFC, Tata Capital, L&T Finance, and other reputed partners." },
];

const stats = [
  { value: 31637, suffix: "",     label: "Contractors & Vendors", sub: "Certified Contractors & Vendors across 20+ Sectors." },
  { value: 263,   suffix: "",     label: "Live Users",             sub: "Total number of customers who are using our products." },
  { value: 6052,  suffix: "Cr",   label: "Project Posted",         sub: "Value of the projects posted in our portal." },
  { value: 159,   suffix: "",     label: "Plants & Equipment",     sub: "Number of Plants & Equipment" },
];

const sectors = [
  "Roads & Bridges", "Urban Transport", "Railways", "Transmission Lines & Substations",
  "Airports", "Industrial Corridors", "Smart Cities", "Ports",
  "Water & Waste Water", "Renewable Power", "Power", "Buildings & Industrial",
  "Oil & Gas", "Irrigation & Tunneling", "Solid Waste Management",
];

const materials = [
  { name: "Steel & Metals",        img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75" },
  { name: "Cement & Concrete",     img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=75" },
  { name: "Sand & Aggregates",     img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75" },
  { name: "Electrical Components", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=75" },
  { name: "Solar & Renewable",     img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=75" },
  { name: "Chemicals & Petroleum", img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=75" },
];

const blogs = [
  {
    img:     "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=75",
    date:    "March 31, 2026",
    cat:     "Marketplace",
    title:   "Vendor Infra Marketplace for Plants & Equipment: Unlocking the Power of a Marketplace",
    excerpt: "In the ever-evolving landscape of industries, effective management of plants and equipment is crucial for businesses seeking to optimize their ROI.",
  },
  {
    img:     "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=75",
    date:    "March 30, 2026",
    cat:     "Technology",
    title:   "SaaS Revolution in Construction and Infrastructure Industry",
    excerpt: "The Indian economy stands on the shoulders of the Construction and Infrastructure industry, encompassing vital sectors like roads and bridges, railways, urban infrastructure...",
  },
  {
    img:     "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=75",
    date:    "March 30, 2026",
    cat:     "AI",
    title:   "Promote Digitalisation in Construction Industry: The Catalysts of Change",
    excerpt: "The construction industry is undergoing a digital revolution. It's time to embrace the catalysts of change and the power of innovation.",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Project Director, EPC Company",
    text: "Vendor Infra has completely transformed how we discover and onboard vendors. The verified database saves us weeks of shortlisting time on every new project.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Procurement Head, Infrastructure Developer",
    text: "The price discovery feature alone is worth it. We received 8 competitive quotes within 48 hours � something that used to take us 3 weeks manually.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "MD, Mid-Sized Contractor",
    text: "The sector intelligence and SOR access helps us bid more confidently. We have diversified into two new sectors since joining the platform.",
    rating: 5,
  },
];

const trustedBy = [
  { name: "Adani Group",    logo: "https://vendorinfra.com/wp-content/uploads/2025/11/Adani-Group-1.webp" },
  { name: "NCC",            logo: "https://vendorinfra.com/wp-content/uploads/2025/11/logo-dmia-2-1.webp" },
  { name: "Tata Projects",  logo: "https://vendorinfra.com/wp-content/uploads/2025/11/tata_projects_logo-removebg-preview-1-e1665663043137.webp" },
  { name: "JWIL",           logo: "https://vendorinfra.com/wp-content/uploads/2025/11/JWIL-Logo-e1649507267477.webp" },
  { name: "Gawar",          logo: "https://vendorinfra.com/wp-content/uploads/2025/11/logo-dmia-2-2.webp" },
  { name: "JMC Projects",   logo: "https://vendorinfra.com/wp-content/uploads/2025/11/JMC-logo.webp" },
  { name: "Dilip Buildcon", logo: "https://vendorinfra.com/wp-content/uploads/2025/11/photo_2022-09-09_17-00-34.webp" },
  { name: "INOX Wind",      logo: "https://vendorinfra.com/wp-content/uploads/2025/11/INOX-wind-logo-1.webp" },
  { name: "IndInfravit",    logo: "https://vendorinfra.com/wp-content/uploads/2025/11/indinfravit.webp" },
  { name: "KEC",            logo: "https://vendorinfra.com/wp-content/uploads/2025/11/logo-dmia-2-5.webp" },
  { name: "Kalpataru",      logo: "https://vendorinfra.com/wp-content/uploads/2025/11/logo-dmia-2-4.webp" },
  { name: "IRB Infra",      logo: "https://vendorinfra.com/wp-content/uploads/2025/11/logo-dmia-2-3.webp" },
];

const associations = [
  { name: "ISO 14001",        logo: "https://vendorinfra.com/wp-content/uploads/2025/12/iso-14001-certification-label-vector-1811356-e1766492588397.avif" },
  { name: "ISO 27001",        logo: "https://vendorinfra.com/wp-content/uploads/2025/12/iso-27001-certification-label-vector-1811348-e1766492622776.avif" },
  { name: "ISO Certified",    logo: "https://vendorinfra.com/wp-content/uploads/2025/12/iso-certified-golden-label-vector-illustration-51941869.webp" },
  { name: "GEM",              logo: "https://vendorinfra.com/wp-content/uploads/2025/12/GEM.png" },
  { name: "FICCI",            logo: "https://vendorinfra.com/wp-content/uploads/2025/12/FICCI_logo.svg.png" },
  { name: "Startup India",    logo: "https://vendorinfra.com/wp-content/uploads/2025/12/m1-logo.png" },
  { name: "CII",              logo: "https://vendorinfra.com/wp-content/uploads/2025/12/Official_logo_of_the_Confederation_of_Indian_Industry_CII.svg.png" },
  { name: "DPIIT",            logo: "https://vendorinfra.com/wp-content/uploads/2025/12/Screenshot-2025-12-23-at-6.05.03-PM.png" },
  { name: "InvoiceMart",      logo: "https://vendorinfra.com/wp-content/uploads/2025/12/invoicemartlogo.png" },
  { name: "MSME",             logo: "https://vendorinfra.com/wp-content/uploads/2025/12/msme-logo.webp" },
];

const financingPartners = [
  { name: "HDFC Bank",           logo: "https://vendorinfra.com/wp-content/uploads/2025/12/HDFC-Bank-logo-scaled.png" },
  { name: "Aditya Birla Capital", logo: "https://vendorinfra.com/wp-content/uploads/2025/12/ABC-Logo_600-x-315.jpg" },
  { name: "Tata Capital",        logo: "https://vendorinfra.com/wp-content/uploads/2025/12/Tata_Capital_Logo-01-scaled.jpg" },
  { name: "Shriram Finance",     logo: "https://vendorinfra.com/wp-content/uploads/2025/12/a8e302e62f283694c1c25f1d1233d7a4.jpg" },
  { name: "L&T Finance",         logo: "https://vendorinfra.com/wp-content/uploads/2025/12/l-t-finance-logo_black-white-1.webp" },
  { name: "IDFC FIRST Bank",     logo: "https://vendorinfra.com/wp-content/uploads/2025/12/IDFC.NS_BIG-e9912e55.png" },
];

const whyPoints = [
  { title: "End-to-End Value Chain Integration", desc: "From vendor discovery and material procurement to financing, insurance and equipment hire/sales � one platform." },
  { title: "Single Unified Data Lake",           desc: "All project, procurement, vendor, and site data � fully unified and instantly accessible. Eliminate silos." },
  { title: "Smart Decision Support via Market Intelligence", desc: "Sector insights, schedules of rates, competitive intelligence, and tender & PQ samples." },
  { title: "AI & ML-Driven Insights",           desc: "Match with the best-suited vendors and generate real-time analytics for smarter, data-backed decisions." },
  { title: "Safety, Security & Trust Built In", desc: "Every vendor is vetted. ISO 27001-certified data security ensures your information is always protected." },
  { title: "Dedicated Support & Accountability",desc: "Round-the-clock team with dedicated account managers to guide you at every stage." },
];

/* -- LogoMarquee � infinite auto-scroll strip ------- */
function LogoMarquee({ logos, bg = "white" }: { logos: { name: string; logo: string }[]; bg?: string }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-10 items-center"
        style={{ animation: "marquee 28s linear infinite", width: "max-content" }}
      >
        {doubled.map((l, i) => (
          <div
            key={i}
            className={`flex-shrink-0 flex items-center justify-center h-14 px-4 bg-${bg === "dark" ? "white/10" : "white"} rounded-xl border ${bg === "dark" ? "border-white/10" : "border-gray-100"} shadow-sm hover:scale-105 transition-transform duration-200`}
            style={{ minWidth: 120 }}
          >
            <img
              src={l.logo}
              alt={l.name}
              className={`max-h-10 max-w-[110px] object-contain ${bg === "dark" ? "brightness-0 invert" : ""}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* -- component -------------------------------------- */
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      {/* -- HERO ------------------------------------- */}
      <section className="relative bg-[#00244F] overflow-hidden flex flex-col">
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#ffffff 1px,transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#FF7F00]/30 to-transparent" />
        <div className="absolute right-0 top-0 w-[55%] h-full hidden lg:block">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00244F] via-[#00244F]/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-28 pb-20 flex-1 flex items-center">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#FFB401] rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">AI-Powered Platform for Infrastructure</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Artificial Intelligence &{" "}
              <span className="text-[#FFB401]">Market Intelligence</span>{" "}
              for Infrastructure
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              Empowering Contractors & Vendors with an AI-powered platform to discover partners,
              access project opportunities, source materials, and scale execution.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4">
              <Link href="/services">
                <button className="bg-[#FFB401] hover:bg-[#FF9C00] text-[#00244F] font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg shadow-[#FF7F00]/20 hover:scale-105">
                  Get Started
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/10">
                  Book a Demo
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

      </section>

      {/* -- TRUSTED BY ------------------------------- */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-8">
            <p className="text-[#FF7F00] font-semibold uppercase tracking-widest text-xs mb-1">Trusted By</p>
            <h2 className="text-xl font-bold text-[#00244F]">Chosen by the companies building India's National Infrastructure pipeline</h2>
          </FadeUp>
          <LogoMarquee logos={trustedBy} />
        </div>
      </section>

      {/* -- STATS ------------------------------------ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 gap-x-8 gap-y-12 max-w-3xl mx-auto"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={gridItem} className="text-left pl-4 md:pl-10">
                <div className="text-5xl md:text-7xl font-black text-[#FFB401] leading-none mb-2">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#00244F] mt-3 mb-1">{s.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{s.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* -- SERVICES --------------------------------- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <p className="text-[#FF7F00] font-semibold uppercase tracking-widest text-sm mb-3">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00244F]">Our Comprehensive Services</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Comprehensive AI-powered solutions for every stage of your infrastructure and construction lifecycle.</p>
          </FadeUp>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {services.map((s, i) => (
              <motion.div key={i} variants={gridItem}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 bg-[#FF7F00]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#FF7F00] transition-colors duration-300">
                    <s.icon className="w-6 h-6 text-[#FF7F00] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-[#00244F] text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <FadeUp delay={0.1} className="text-center mt-12">
            <Link href="/services">
              <button className="inline-flex items-center gap-2 border-2 border-[#FF7F00] text-[#FF7F00] hover:bg-[#FF7F00] hover:text-white font-semibold px-7 py-3 rounded-full transition-all duration-200">
                View All Services <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* -- MATERIALS -------------------------------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="text-[#FF7F00] font-semibold uppercase tracking-widest text-sm mb-3">Materials</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00244F] mb-6">
                One Destination for All Project Material Needs
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Fulfill all your raw material requirements through our comprehensive B2B platform
                designed exclusively for the Infrastructure & Construction industry. Our value chain
                integration connects you with reliable suppliers to meet every material requirement efficiently.
              </p>
              <ul className="space-y-3 mb-8">
                {["Wide range of raw material categories", "Verified and rated suppliers", "Real-time pricing and availability", "Integrated delivery and logistics support"].map(p => (
                  <li key={p} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F00] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link href="/materials">
                <button className="bg-[#FF7F00] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#00244F] transition-colors">
                  Explore Materials
                </button>
              </Link>
            </FadeUp>

            <FadeUp delay={0.15}>
              <motion.div
                className="grid grid-cols-3 gap-3"
                variants={gridVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {materials.map((m) => (
                  <motion.div key={m.name} variants={gridItem}
                    className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00244F]/80 to-transparent" />
                    <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold leading-tight">{m.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* -- SECTORS ---------------------------------- */}
      <section className="py-24 bg-[#00244F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#ffffff 1px,transparent 0)", backgroundSize: "30px 30px" }} />
        <div className="container mx-auto px-4 relative z-10">
          <FadeUp className="text-center mb-14">
            <p className="text-[#FFB401] font-semibold uppercase tracking-widest text-sm mb-3">Sectors</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              One Platform for the 20+ Infrastructure Sectors
            </h2>
            <p className="text-white/80 mt-4 max-w-2xl mx-auto">
              From roads to renewable energy, Vendor Infra covers every major infrastructure vertical in India.
            </p>
          </FadeUp>

          <motion.div
            className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {sectors.map((sector) => (
              <motion.div key={sector} variants={{ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1, transition: { duration: 0.35 } } }}>
                <Link href="/sectors">
                  <span className="inline-block px-5 py-2.5 bg-white/10 hover:bg-white hover:text-[#00244F] border border-white/20 hover:border-white rounded-full text-sm font-medium text-white transition-all duration-200 cursor-pointer">
                    {sector}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <FadeUp delay={0.2} className="text-center mt-12">
            <Link href="/sectors">
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#00244F] font-semibold px-8 py-3 rounded-full transition-all duration-200 inline-flex items-center gap-2">
                Explore All Sectors <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* -- WHY VENDOR INFRA ------------------------- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <p className="text-[#FF7F00] font-semibold uppercase tracking-widest text-sm mb-3">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00244F]">Everything you need to know about Supply Chain</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">One Platform. One Ecosystem. Infinite Possibilities.</p>
          </FadeUp>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {whyPoints.map((p, i) => (
              <motion.div key={i} variants={gridItem}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FF7F00]/30 transition-all duration-300 h-full">
                  <div className="w-10 h-10 bg-[#FF7F00] text-white rounded-full flex items-center justify-center font-bold text-sm mb-5">{i + 1}</div>
                  <h3 className="font-bold text-[#00244F] mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <FadeUp delay={0.1} className="text-center mt-12">
            <Link href="/why-us">
              <button className="bg-[#FF7F00] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#00244F] transition-colors inline-flex items-center gap-2">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* -- BLOG ------------------------------------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <p className="text-[#FF7F00] font-semibold uppercase tracking-widest text-sm mb-3">Blog</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00244F]">
              Blog Trends, Technologies, Developments in Construction Industry
            </h2>
          </FadeUp>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {blogs.map((b, i) => (
              <motion.div key={i} variants={gridItem}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
                  <div className="overflow-hidden h-48">
                    <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#FF7F00]/10 text-[#FF7F00] text-xs font-semibold px-3 py-1 rounded-full">{b.cat}</span>
                      <span className="text-gray-400 text-xs">{b.date}</span>
                    </div>
                    <h3 className="font-bold text-[#00244F] leading-snug mb-3 group-hover:text-[#FF7F00] transition-colors">{b.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{b.excerpt}</p>
                    <Link href="/blog" className="mt-4 inline-flex items-center gap-1 text-[#FF7F00] text-sm font-semibold hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* -- TESTIMONIALS ----------------------------- */}
      <section className="py-24 bg-[#00244F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#ffffff 1px,transparent 0)", backgroundSize: "30px 30px" }} />
        <div className="container mx-auto px-4 relative z-10">
          <FadeUp className="text-center mb-14">
            <p className="text-[#FFB401] font-semibold uppercase tracking-widest text-sm mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Client Testimonials</h2>
          </FadeUp>

          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-10 text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFB401] fill-[#FFB401]" />
                  ))}
                </div>
                <p className="text-white/85 text-lg leading-relaxed mb-8 italic">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <p className="text-white font-bold">{testimonials[activeTestimonial].name}</p>
                <p className="text-[#FFB401] text-sm mt-1">{testimonials[activeTestimonial].role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button onClick={() => setActiveTestimonial(p => (p - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-white/30 hover:border-white flex items-center justify-center text-white transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${i === activeTestimonial ? "w-8 bg-white" : "w-2.5 bg-white/30 hover:bg-white/60"}`} />
                ))}
              </div>
              <button onClick={() => setActiveTestimonial(p => (p + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-white/30 hover:border-white flex items-center justify-center text-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -- ASSOCIATIONS ----------------------------- */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-8">
            <p className="text-[#FF7F00] font-semibold uppercase tracking-widest text-xs mb-1">Associations</p>
            <h2 className="text-xl font-bold text-[#00244F]">We are Proud to be a part of</h2>
          </FadeUp>
          <LogoMarquee logos={associations} />
        </div>
      </section>

      {/* -- FINANCING PARTNERS ----------------------- */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeUp className="text-center mb-12">
            <p className="text-[#FF7F00] font-semibold uppercase tracking-widest text-sm mb-3">/ Our Financing Partners /</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00244F]">
              Who help us drive innovation in the<br />Supply Chain Financing
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {financingPartners.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-center h-20 px-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-12 max-w-[110px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* -- CTA -------------------------------------- */}
      <section className="py-20 bg-gradient-to-r from-[#00244F] to-[#FF7F00] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#ffffff 1px,transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your infrastructure business?
            </h2>
            <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg">
              Join thousands of contractors, vendors, and EPC companies already on the platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="bg-white text-[#00244F] font-bold px-9 py-4 rounded-full hover:bg-[#FFF4E0] transition-all hover:scale-105 shadow-lg shadow-black/10">
                  Get Started Free
                </button>
              </Link>
              <Link href="/pricing">
                <button className="border-2 border-white text-white font-semibold px-9 py-4 rounded-full hover:bg-white hover:text-[#00244F] transition-colors">
                  View Pricing
                </button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}

