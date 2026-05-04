import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Search, Calculator, Tractor, Package,
  ShieldCheck, Briefcase, BarChart3,
  CheckCircle2, ChevronDown, ArrowRight,
  Star, Layers, BarChart, Shield, Zap, Globe
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const services = [
  {
    title: "AI-Powered Vendor Discovery",
    icon: Search,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=80",
    imageAlt: "AI vendor discovery platform",
    flip: false,
    points: [
      {
        label: "Multiple Vendors",
        desc: "Search and compare multiple verified vendors for every single item in your Bill of Quantities to get the best match."
      },
      {
        label: "Vendor by Rating",
        desc: "Find and choose vendors based on their past performance, reliability, and verified ratings across projects."
      },
      {
        label: "Vendor by Size and Capability",
        desc: "Select the most suitable vendor by evaluating their company profile, size, and operational capability across sectors."
      }
    ]
  },
  {
    title: "Smart Price Discovery",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&q=80",
    imageAlt: "Smart price discovery and quotation",
    flip: true,
    points: [
      {
        label: "Hassle Free Management",
        desc: "Easily track all vendor responses, manage communications, and access your account anytime, anywhere from any device."
      },
      {
        label: "Multiple Quotes",
        desc: "Send instant proposals or receive multiple quotes to identify the best service or supplier at the right price and timeline."
      },
      {
        label: "Easy View Dashboard",
        desc: "Get an intuitive dashboard to view vendor and supplier profiles along with detailed comparison reports at a glance."
      }
    ]
  },
  {
    title: "AI-Powered Plants & Equipment",
    icon: Tractor,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80",
    imageAlt: "Plants and heavy equipment marketplace",
    flip: false,
    points: [
      {
        label: "Search",
        desc: "Quickly find plants and equipment by brand, category, or location with verified listings and transparent pricing."
      },
      {
        label: "List Your Idle Plants & Equipment",
        desc: "List your idle or unused plants and equipment for short-term or long-term hire and monetize your assets efficiently."
      },
      {
        label: "Buy, Sell, or Hire Plants & Equipment",
        desc: "Easily buy, sell, or hire verified plants and equipment through a secure and transparent marketplace process."
      }
    ]
  },
  {
    title: "Smart Material Procurement",
    icon: Package,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80",
    imageAlt: "Smart material procurement for construction",
    flip: true,
    points: [
      {
        label: "One-Stop Solution for All Raw Material Needs",
        desc: "Fulfill all your raw material requirements through our comprehensive B2B platform designed for Infrastructure & Construction."
      },
      {
        label: "Value Chain Integration",
        desc: "Our value chain integration connects you with reliable suppliers to meet every material requirement efficiently and on-time."
      },
      {
        label: "Right Material & Wide Range of Products",
        desc: "Choose from a wide range of raw material categories including steel, cement, electrical, solar, chemicals, and more."
      }
    ]
  },
  {
    title: "Smart Project Insurance",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80",
    imageAlt: "Smart project insurance and protection",
    flip: false,
    points: [
      {
        label: "Project",
        desc: "CAR, EAR, and Workmen Compensation from reputed insurers at competitive rates to protect your entire project scope."
      },
      {
        label: "Plants & Equipment",
        desc: "Specialized insurance plans for your machinery and equipment at competitive rates, covering all operational risks."
      },
      {
        label: "Raw Material",
        desc: "Comprehensive insurance coverage for raw materials in transit and storage from leading insurance companies across India."
      }
    ]
  },
  {
    title: "AI Powered Enterprise Services",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
    imageAlt: "Enterprise services and business growth",
    flip: true,
    points: [
      {
        label: "Subcontracting",
        desc: "Connect with technically and financially sound contractors to support or manage complete project execution end-to-end."
      },
      {
        label: "Growth",
        desc: "Organizational restructuring, team building, capability development, and market diversification growth strategies."
      },
      {
        label: "Market Entry",
        desc: "Support global companies in setting up in India and help Indian firms enter new geographies with expert advisory."
      }
    ]
  },
  {
    title: "Other Services",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    imageAlt: "Sector intelligence and SOR data analytics",
    flip: false,
    points: [
      {
        label: "Projects & Tender Updates",
        desc: "Stay updated with the latest project and tender announcements across all 20+ infrastructure sectors in India."
      },
      {
        label: "Sector Intelligence",
        desc: "Sector overviews, client and ministry data, sample PQs, tender information and market dynamics in one place."
      },
      {
        label: "Schedule of Rates (SOR)",
        desc: "Access to 75+ Schedules of Rates covering all items and current market rates to build more competitive bids."
      }
    ]
  }
];

const advantages = [
  { icon: Layers,        title: "All-in-One Platform",              desc: "Entire value chain from vendor discovery to financing in one place." },
  { icon: CheckCircle2,  title: "Verified & Transparent",           desc: "Every vendor is vetted and rated for verified, transparent selection." },
  { icon: Star,          title: "Best Quote Every Time",            desc: "Competitive multi-quote system to secure the best market price." },
  { icon: Zap,           title: "Simplified Procurement",           desc: "Streamlined procurement workflow to eliminate manual bottlenecks." },
  { icon: BarChart,      title: "End-to-End Material Management",   desc: "Source, track, and manage raw materials across your entire project." },
  { icon: Shield,        title: "Complete Project Protection",      desc: "Insurance and risk coverage for projects, plants, and materials." },
];

const faqs = [
  {
    q: "Is Vendor Infra powered by technology like all AI is?",
    a: "Yes. Vendor Infra is an AI-powered technology platform with advanced AI/ML algorithms that enable smart vendor matching, price discovery, market intelligence, and procurement analytics. Our system continuously learns from platform data to improve recommendations and insights for every user."
  },
  {
    q: "How can Vendor Infra support my company's growth and expansion?",
    a: "Through our Enterprise Services module, we provide strategic advisory for organizational restructuring, team development, market entry into new geographies, and capability building. We have worked with contractors to diversify into 2–3 new sectors and expand their operational footprint across India."
  },
  {
    q: "How does the Plants & Equipment service work?",
    a: "Our Plants & Equipment marketplace allows you to search and hire verified equipment by category, brand, and location. Equipment owners can list idle assets for hire to monetize downtime. Buyers can view listings, compare rates, and connect directly. The entire process is transparent, verified, and backed by our support team."
  },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#0c1c5e] pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#1a4fdb] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-gray-500 leading-relaxed text-sm">{a}</p>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative bg-[#0c1c5e] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#ffffff 1px,transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-4">
            Our Services
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Redefining Collaboration with<br />10+ Integrated Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-blue-200 text-lg max-w-2xl mx-auto">
            Comprehensive AI-powered solutions for every stage of your infrastructure and construction lifecycle.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ─────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 space-y-24 max-w-6xl">
          {services.map((service, idx) => (
            <FadeUp key={idx}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                {/* Content */}
                <div className={service.flip ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 bg-[#1a4fdb]/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-[#1a4fdb]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0c1c5e]">{service.title}</h2>
                  </div>

                  <div className="space-y-6">
                    {service.points.map((point, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#1a4fdb] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#0c1c5e] mb-1">{point.label}</h4>
                          <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={service.flip ? "lg:order-1" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              {idx < services.length - 1 && (
                <div className="border-b border-gray-100 mt-24" />
              )}
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── ADVANTAGES ───────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeUp className="text-center mb-14">
            <p className="text-[#1a4fdb] font-semibold uppercase tracking-widest text-sm mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c1c5e]">Our Service Advantages<br />That Deliver Results</h2>
          </FadeUp>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          >
            {advantages.map((adv, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#1a4fdb]/20 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-[#1a4fdb]/10 rounded-xl flex items-center justify-center mb-5">
                    <adv.icon className="w-6 h-6 text-[#1a4fdb]" />
                  </div>
                  <h3 className="font-bold text-[#0c1c5e] mb-2">{adv.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeUp className="text-center mb-12">
            <p className="text-[#1a4fdb] font-semibold uppercase tracking-widest text-sm mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c1c5e]">Your Questions about our Services</h2>
          </FadeUp>

          <FadeUp delay={0.1} className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </FadeUp>
        </div>
      </section>

      {/* ── VIDEO ────────────────────────────────── */}
      <section className="py-20 bg-[#0c1c5e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#ffffff 1px,transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <FadeUp className="text-center mb-10">
            <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">Watch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Get to know more about our Services
            </h2>
            <p className="text-blue-200 mt-4 max-w-xl mx-auto">
              See how Vendor Infra is transforming procurement and collaboration for infrastructure companies across India.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="Vendor Infra Services Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="text-center mt-10">
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 bg-white text-[#0c1c5e] font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-lg">
                Get Started with Us <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
