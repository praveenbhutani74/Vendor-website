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

/* ── animated counter ─────────────────────────────── */
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

/* ── fade-up wrapper ──────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── stagger grid container ──────────────────────── */
const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};
const gridItem = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

/* ── data ─────────────────────────────────────────── */
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
    text: "The price discovery feature alone is worth it. We received 8 competitive quotes within 48 hours — something that used to take us 3 weeks manually.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "MD, Mid-Sized Contractor",
    text: "The sector intelligence and SOR access helps us bid more confidently. We have diversified into two new sectors since joining the platform.",
    rating: 5,
  },
];

/* Branded partner logo components */
const partners: { name: string; logo: React.ReactNode }[] = [
  {
    name: "HDFC Bank",
    logo: (
      <div className="flex flex-col items-center justify-center gap-0.5">
        <div className="bg-[#004C8F] text-white font-black text-sm px-3 py-1 rounded tracking-wide leading-none flex items-center gap-1">
          <span className="text-[#EE3124] font-black text-base leading-none">H</span>
          <span>HDFC</span>
          <span className="text-white/70 text-[9px] font-bold">BANK</span>
        </div>
        <span className="text-[9px] text-gray-500">We understand your world</span>
      </div>
    ),
  },
  {
    name: "Aditya Birla Capital",
    logo: (
      <div className="flex flex-col items-center gap-0.5">
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E11B22] to-[#F7941D] flex items-center justify-center">
            <span className="text-white font-black text-xs">A</span>
          </div>
          <div className="leading-tight">
            <div className="text-[#E11B22] font-black text-xs tracking-wide leading-none">ADITYA BIRLA</div>
            <div className="text-[#E11B22] font-black text-xs tracking-widest leading-none">CAPITAL</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Tata Capital",
    logo: (
      <div className="flex flex-col items-center gap-0.5">
        <div className="flex items-center gap-1">
          <div className="w-7 h-5 flex items-center justify-center border border-gray-800 rounded-sm">
            <span className="text-gray-900 font-black text-[10px] tracking-widest">TATA</span>
          </div>
          <span className="text-gray-900 font-black text-sm tracking-wide">Capital</span>
        </div>
        <span className="text-gray-500 text-[9px] italic">Count on us</span>
      </div>
    ),
  },
  {
    name: "Shriram Finance",
    logo: (
      <div className="flex flex-col items-center">
        <div className="bg-[#F7A800] px-2 py-0.5 rounded">
          <span className="text-[#231F20] font-black text-sm tracking-wide">SHRIRAM</span>
        </div>
        <span className="text-gray-700 font-semibold text-xs tracking-wide">Finance</span>
      </div>
    ),
  },
  {
    name: "L&T Finance",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-9 h-9 rounded-full border-2 border-[#009933] flex items-center justify-center">
          <span className="text-[#009933] font-black text-xs leading-none">L&T</span>
        </div>
        <div className="text-gray-800 font-bold text-sm leading-tight">
          <div>L&T</div>
          <div className="text-xs font-semibold text-gray-500">Finance</div>
        </div>
      </div>
    ),
  },
  {
    name: "IDFC FIRST Bank",
    logo: (
      <div className="flex flex-col items-center gap-0.5">
        <div className="flex items-center gap-0.5">
          {["I","D","F","C"].map((l, i) => (
            <div key={i} className={`w-5 h-6 flex items-center justify-center font-black text-sm rounded-sm ${
              i === 0 ? "bg-[#9B59B6] text-white" : i === 1 ? "bg-[#E74C3C] text-white" : i === 2 ? "bg-[#2980B9] text-white" : "bg-[#27AE60] text-white"
            }`}>{l}</div>
          ))}
        </div>
        <span className="text-gray-500 text-[9px] font-semibold tracking-widest">IDFC LIMITED</span>
      </div>
    ),
  },
];

const whyPoints = [
  { title: "End-to-End Value Chain Integration", desc: "From vendor discovery and material procurement to financing, insurance and equipment hire/sales — one platform." },
  { title: "Single Unified Data Lake",           desc: "All project, procurement, vendor, and site data — fully unified and instantly accessible. Eliminate silos." },
  { title: "Smart Decision Support via Market Intelligence", desc: "Sector insights, schedules of rates, competitive intelligence, and tender & PQ samples." },
  { title: "AI & ML-Driven Insights",           desc: "Match with the best-suited vendors and generate real-time analytics for smarter, data-backed decisions." },
  { title: "Safety, Security & Trust Built In", desc: "Every vendor is vetted. ISO 27001-certified data security ensures your information is always protected." },
  { title: "Dedicated Support & Accountability",desc: "Round-the-clock team with dedicated account managers to guide you at every stage." },
];

/* ── PartnerCarousel ──────────────────────────────── */
function PartnerCarousel() {
  const [active, setActive] = useState(0);
  const total = partners.length;

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % total), 3500);
    return () => clearInterval(t);
  }, [total]);

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => setActive(p => (p - 1 + total) % total)}
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#1a4fdb] hover:text-[#1a4fdb] transition-colors shrink-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Show all 6 at once on desktop, wrap on mobile */}
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                animate={{ opacity: i === active ? 1 : 0.45, scale: i === active ? 1.08 : 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActive(i)}
                className="cursor-pointer flex items-center justify-center min-w-[110px] min-h-[56px] hover:opacity-100 transition-opacity"
              >
                {p.logo}
              </motion.div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setActive(p => (p + 1) % total)}
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#1a4fdb] hover:text-[#1a4fdb] transition-colors shrink-0"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* dots */}
      <div className="flex justify-center gap-2 mt-8">
        {partners.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-2 bg-[#1a4fdb]" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── component ────────────────────────────────────── */
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative bg-[#0a1540] overflow-hidden flex flex-col">
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#ffffff 1px,transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#1a4fdb]/30 to-transparent" />
        <div className="absolute right-0 top-0 w-[55%] h-full hidden lg:block">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1540] via-[#0a1540]/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-28 pb-20 flex-1 flex items-center">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#f5c518] rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">AI-Powered Platform for Infrastructure</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Artificial Intelligence &{" "}
              <span className="text-[#f5c518]">Market Intelligence</span>{" "}
              for Infrastructure
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-blue-200 text-lg leading-relaxed mb-8 max-w-lg">
              Empowering Contractors & Vendors with an AI-powered platform to discover partners,
              access project opportunities, source materials, and scale execution.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4">
              <Link href="/services">
                <button className="bg-[#f5c518] hover:bg-[#e6b800] text-[#0a1540] font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg shadow-yellow-500/20 hover:scale-105">
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

      {/* ── STATS ──────────────────────────────────── */}
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
                <div className="text-5xl md:text-7xl font-black text-[#f5c518] leading-none mb-2">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0c1c5e] mt-3 mb-1">{s.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{s.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <p className="text-[#1a4fdb] font-semibold uppercase tracking-widest text-sm mb-3">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c1c5e]">Our Comprehensive Services</h2>
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
                  <div className="w-12 h-12 bg-[#1a4fdb]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1a4fdb] transition-colors duration-300">
                    <s.icon className="w-6 h-6 text-[#1a4fdb] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-[#0c1c5e] text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <FadeUp delay={0.1} className="text-center mt-12">
            <Link href="/services">
              <button className="inline-flex items-center gap-2 border-2 border-[#1a4fdb] text-[#1a4fdb] hover:bg-[#1a4fdb] hover:text-white font-semibold px-7 py-3 rounded-full transition-all duration-200">
                View All Services <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── MATERIALS ──────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="text-[#1a4fdb] font-semibold uppercase tracking-widest text-sm mb-3">Materials</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c1c5e] mb-6">
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
                    <CheckCircle2 className="w-5 h-5 text-[#1a4fdb] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link href="/materials">
                <button className="bg-[#1a4fdb] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#0c1c5e] transition-colors">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c5e]/80 to-transparent" />
                    <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold leading-tight">{m.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SECTORS ────────────────────────────────── */}
      <section className="py-24 bg-[#0c1c5e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#ffffff 1px,transparent 0)", backgroundSize: "30px 30px" }} />
        <div className="container mx-auto px-4 relative z-10">
          <FadeUp className="text-center mb-14">
            <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">Sectors</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              One Platform for the 20+ Infrastructure Sectors
            </h2>
            <p className="text-blue-200 mt-4 max-w-2xl mx-auto">
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
                  <span className="inline-block px-5 py-2.5 bg-white/10 hover:bg-white hover:text-[#0c1c5e] border border-white/20 hover:border-white rounded-full text-sm font-medium text-white transition-all duration-200 cursor-pointer">
                    {sector}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <FadeUp delay={0.2} className="text-center mt-12">
            <Link href="/sectors">
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#0c1c5e] font-semibold px-8 py-3 rounded-full transition-all duration-200 inline-flex items-center gap-2">
                Explore All Sectors <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY VENDOR INFRA ───────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <p className="text-[#1a4fdb] font-semibold uppercase tracking-widest text-sm mb-3">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c1c5e]">Everything you need to know about Supply Chain</h2>
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
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#1a4fdb]/30 transition-all duration-300 h-full">
                  <div className="w-10 h-10 bg-[#1a4fdb] text-white rounded-full flex items-center justify-center font-bold text-sm mb-5">{i + 1}</div>
                  <h3 className="font-bold text-[#0c1c5e] mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <FadeUp delay={0.1} className="text-center mt-12">
            <Link href="/why-us">
              <button className="bg-[#1a4fdb] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#0c1c5e] transition-colors inline-flex items-center gap-2">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── BLOG ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <p className="text-[#1a4fdb] font-semibold uppercase tracking-widest text-sm mb-3">Blog</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c1c5e]">
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
                      <span className="bg-[#1a4fdb]/10 text-[#1a4fdb] text-xs font-semibold px-3 py-1 rounded-full">{b.cat}</span>
                      <span className="text-gray-400 text-xs">{b.date}</span>
                    </div>
                    <h3 className="font-bold text-[#0c1c5e] leading-snug mb-3 group-hover:text-[#1a4fdb] transition-colors">{b.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{b.excerpt}</p>
                    <Link href="/blog" className="mt-4 inline-flex items-center gap-1 text-[#1a4fdb] text-sm font-semibold hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────── */}
      <section className="py-24 bg-[#0c1c5e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#ffffff 1px,transparent 0)", backgroundSize: "30px 30px" }} />
        <div className="container mx-auto px-4 relative z-10">
          <FadeUp className="text-center mb-14">
            <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">Testimonials</p>
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
                    <Star key={i} className="w-5 h-5 text-[#f5c518] fill-[#f5c518]" />
                  ))}
                </div>
                <p className="text-blue-100 text-lg leading-relaxed mb-8 italic">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <p className="text-white font-bold">{testimonials[activeTestimonial].name}</p>
                <p className="text-blue-300 text-sm mt-1">{testimonials[activeTestimonial].role}</p>
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

      {/* ── FINANCING PARTNERS ─────────────────────── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeUp className="text-center mb-12">
            <p className="text-[#1a4fdb] font-semibold uppercase tracking-widest text-sm mb-3">/ Our Financing Partners /</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c1c5e]">
              Who help us drive innovation in the<br />Supply Chain Financing
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <PartnerCarousel />
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-[#0c1c5e] to-[#1a4fdb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#ffffff 1px,transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your infrastructure business?
            </h2>
            <p className="text-blue-200 mb-10 max-w-xl mx-auto text-lg">
              Join thousands of contractors, vendors, and EPC companies already on the platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="bg-white text-[#0c1c5e] font-bold px-9 py-4 rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-lg shadow-black/10">
                  Get Started Free
                </button>
              </Link>
              <Link href="/pricing">
                <button className="border-2 border-white text-white font-semibold px-9 py-4 rounded-full hover:bg-white hover:text-[#0c1c5e] transition-colors">
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
