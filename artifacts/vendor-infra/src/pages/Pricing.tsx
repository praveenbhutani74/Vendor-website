import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";

type Audience = "contractors" | "vendors" | "both";

const contractorPlans = [
  {
    name: "Basic",
    price: "₹50,000",
    period: "/ year",
    badge: null,
    description: "For companies just getting started on digital procurement",
    features: [
      "Vendor Discovery (Up to 3 sectors)",
      "Price Discovery (Up to 3 sectors)",
      "Material Procurement",
      "Buy, Sell & Hire Plants & Equipment",
      "Project Financing & Insurance",
      "Analytics Dashboard",
      "Sector Intelligence & SOR Database Access",
      "Industry Updates",
      "Tender Services",
      "Single User Login",
      "Basic Support",
    ],
    excluded: ["Dedicated Account Manager"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Plus",
    price: "Free",
    period: "",
    badge: "Most Popular",
    description: "For growing contractors who need full sector coverage",
    features: [
      "Vendor Discovery (20+ sectors)",
      "Price Discovery (20+ sectors)",
      "Material Procurement",
      "Buy, Sell & Hire Plants & Equipment",
      "Project Financing & Insurance",
      "Analytics Dashboard",
      "Sector Intelligence & SOR Database Access",
      "Industry Updates",
      "Tender Services",
      "User Login (1+3 users)",
      "Priority Support",
      "Dedicated Account Manager",
    ],
    excluded: [],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Premium",
    price: "Free",
    period: "",
    badge: null,
    description: "Enterprise-grade access for large EPC organisations",
    features: [
      "Vendor Discovery (20+ sectors)",
      "Price Discovery (20+ sectors)",
      "Material Procurement",
      "Buy, Sell & Hire Plants & Equipment",
      "Project Financing & Insurance",
      "Analytics Dashboard",
      "Sector Intelligence & SOR Database Access",
      "Industry Updates",
      "Tender Services",
      "Unlimited User Logins",
      "Priority Support",
      "Dedicated Account Manager",
    ],
    excluded: [],
    cta: "Get Started",
    highlight: false,
  },
];

const vendorPlans = [
  {
    name: "Basic Plan",
    price: "Free",
    period: "",
    badge: null,
    description: "Start listing and responding to project opportunities",
    features: [
      "Manage Company Profile",
      "Search Multiple Projects (Up to 3 sectors)",
      "Quote Projects & RFP",
      "Material Procurement",
      "Project Insurance",
      "Buy, Sell & Hire Plants & Equipment",
      "Sector Intelligence, Industry Updates & SOR",
      "Single User Login",
      "Basic Support",
    ],
    excluded: ["Dedicated Account Manager"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Plus Plan",
    price: "Free",
    period: "",
    badge: "Most Popular",
    description: "Expand reach across more sectors and projects",
    features: [
      "Manage Company Profile",
      "Search Multiple Projects (Up to 10 sectors)",
      "Quote Projects & RFP",
      "Material Procurement",
      "Project Insurance",
      "Buy, Sell & Hire Plants & Equipment",
      "Sector Intelligence, Industry Updates & SOR",
      "Multiple User Logins",
      "Priority Support",
      "Dedicated Account Manager",
    ],
    excluded: [],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Premium Plan",
    price: "Free",
    period: "",
    badge: null,
    description: "Full platform access for established vendors",
    features: [
      "Manage Company Profile",
      "Search Multiple Projects (20+ sectors)",
      "Quote Projects & RFP",
      "Material Procurement",
      "Project Insurance",
      "Buy, Sell & Hire Plants & Equipment",
      "Sector Intelligence, Industry Updates & SOR",
      "Unlimited User Logins",
      "Priority Support",
      "Dedicated Account Manager",
    ],
    excluded: [],
    cta: "Get Started",
    highlight: false,
  },
];

const bothPlans = [
  {
    name: "Basic",
    price: "₹75,000",
    period: "/ year",
    badge: null,
    description: "For companies operating as both contractor and vendor",
    features: [
      "Full Contractor Basic Features",
      "Full Vendor Basic Features",
      "Up to 3 sectors coverage",
      "Material Procurement",
      "Buy, Sell & Hire Plants & Equipment",
      "Project Financing & Insurance",
      "Analytics Dashboard",
      "Sector Intelligence & SOR",
      "Single User Login",
      "Basic Support",
    ],
    excluded: ["Dedicated Account Manager"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Plus",
    price: "Free",
    period: "",
    badge: "Best Value",
    description: "Best for mid-size firms active on both sides of the market",
    features: [
      "Full Contractor Plus Features",
      "Full Vendor Plus Features",
      "20+ sectors coverage",
      "Material Procurement",
      "Buy, Sell & Hire Plants & Equipment",
      "Project Financing & Insurance",
      "Analytics Dashboard",
      "Sector Intelligence & SOR",
      "User Login (1+3 users)",
      "Priority Support",
      "Dedicated Account Manager",
    ],
    excluded: [],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Premium",
    price: "Free",
    period: "",
    badge: null,
    description: "Unlimited enterprise access across all platform features",
    features: [
      "Full Contractor Premium Features",
      "Full Vendor Premium Features",
      "20+ sectors coverage",
      "Material Procurement",
      "Buy, Sell & Hire Plants & Equipment",
      "Project Financing & Insurance",
      "Analytics Dashboard",
      "Sector Intelligence & SOR",
      "Unlimited User Logins",
      "Priority Support",
      "Dedicated Account Manager",
    ],
    excluded: [],
    cta: "Get Started",
    highlight: false,
  },
];

function PlanCard({
  plan,
  index,
}: {
  plan: (typeof contractorPlans)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-8 flex flex-col ${
        plan.highlight
          ? "bg-[#1a4fdb] text-white shadow-2xl shadow-blue-500/30 scale-105"
          : "bg-white text-gray-900 shadow-lg border border-gray-100"
      }`}
    >
      {plan.badge && (
        <div
          className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            plan.highlight ? "bg-white text-[#1a4fdb]" : "bg-[#1a4fdb] text-white"
          }`}
        >
          {plan.badge}
        </div>
      )}

      <div className="mb-6">
        <h3
          className={`text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-gray-900"}`}
        >
          {plan.name}
        </h3>
        <p
          className={`text-sm mb-4 ${plan.highlight ? "text-blue-100" : "text-gray-500"}`}
        >
          {plan.description}
        </p>
        <div className="flex items-end gap-1">
          <span
            className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-[#0c1c5e]"}`}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span
              className={`text-sm mb-1 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}
            >
              {plan.period}
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check
              className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-blue-200" : "text-[#1a4fdb]"}`}
            />
            <span className={plan.highlight ? "text-blue-50" : "text-gray-700"}>{f}</span>
          </li>
        ))}
        {plan.excluded.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm opacity-40">
            <span
              className={`w-4 h-4 mt-0.5 shrink-0 text-center leading-none ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}
            >
              ✕
            </span>
            <span className={plan.highlight ? "text-blue-100" : "text-gray-500"}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="/contact"
        className={`block text-center font-semibold py-3 px-6 rounded-full transition-all duration-200 ${
          plan.highlight
            ? "bg-white text-[#1a4fdb] hover:bg-blue-50"
            : "bg-[#1a4fdb] text-white hover:bg-[#0c1c5e]"
        }`}
      >
        {plan.cta}
      </a>
    </motion.div>
  );
}

export default function Pricing() {
  const [audience, setAudience] = useState<Audience>("contractors");

  const plans =
    audience === "contractors"
      ? contractorPlans
      : audience === "vendors"
        ? vendorPlans
        : bothPlans;

  const audienceLabel =
    audience === "contractors"
      ? "Contractors"
      : audience === "vendors"
        ? "Vendors"
        : "Contractors & Vendors";

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
            className="text-[#4d7bff] font-semibold uppercase tracking-widest text-sm mb-4"
          >
            Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Clear and transparent{" "}
            <span className="text-[#4d7bff]">pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-200 text-lg max-w-xl mx-auto"
          >
            Choose the plan that fits your business. No hidden fees, no long-term lock-ins.
          </motion.p>
        </div>
      </section>

      {/* Toggle */}
      <div className="sticky top-20 z-30 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-center gap-2 flex-wrap">
          {(["contractors", "vendors", "both"] as Audience[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setAudience(tab)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                audience === tab
                  ? "bg-[#1a4fdb] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab === "contractors"
                ? "For Contractors"
                : tab === "vendors"
                  ? "For Vendors"
                  : "Contractors & Vendors"}
            </button>
          ))}
        </div>
      </div>

      {/* Plans */}
      <section className="py-20 bg-gray-50 flex-1">
        <div className="container mx-auto px-4">
          <motion.h2
            key={audience}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-[#0c1c5e] text-center mb-12"
          >
            Pricing for {audienceLabel}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-[#0c1c5e] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What does 'Free' pricing mean?",
                a: "Our Plus and Premium plans are currently free as part of our early-adopter programme. Pricing will be communicated in advance before any charges apply.",
              },
              {
                q: "Can I switch plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Contact our support team and we will assist with the transition.",
              },
              {
                q: "What sectors are covered?",
                a: "We cover 20+ infrastructure sectors including Roads & Bridges, Railways, Power, Renewable Energy, Ports, Smart Cities, Oil & Gas, and more.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes, the Vendor Basic and Vendor Plus plans are currently free. Reach out to our team to get started with a demo.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a4fdb]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure which plan is right for you?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Our team will help you find the best fit. Book a free demo and we will walk you through everything.
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
