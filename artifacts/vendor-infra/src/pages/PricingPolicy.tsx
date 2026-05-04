import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Applicability",
    content: `Vendor Infra is the exclusive property of Vendor Infra Global Private Limited. This Pricing Policy is applicable between Vendor Infra, a company registered under Indian laws (hereafter referred to as "Vendor Infra"), and any persons wishing to put plants, machines, equipment, tools etc. for sell/hire/purchase/rent using the Website http://VendorInfra.com/ (hereafter referred to as "Users, Members"). This Pricing Policy is to be considered in conjunction with our Privacy Policies and Terms of Use.`,
  },
  {
    title: "Definitions",
    content: `Unless otherwise defined hereunder or ascertained from the context, expressions employed in this Pricing Policy shall have the meaning ascribed to them under the Terms of Use.\n\n"Commission" means the amount charged by Vendor Infra in advance from both Owner and Hirer once the rental/sell agreement is confirmed between the Parties.`,
  },
  {
    title: "Terms for Rental Agreement",
    content: `The Parties represent that they are legally competent to enter into a contract. Owners who offer a machine etc. for rent represent that they are legally entitled to offer and/or rent the machine to others. Any agents, employees, attorneys, or anyone else acting on behalf of the Owners or Hirers must follow the terms of this Pricing Policy and all other Vendor Infra Policies.`,
  },
  {
    title: "Fees",
    content: `The price of each Item listed on Vendor Infra is expressed in Indian Rupees or the relevant currency as applicable in such countries. While listing their machines etc., the Owners must indicate whether the listed price is exclusive or inclusive of applicable taxes, costs, possible delivery fees and insurance costs.\n\nTo initiate the process, the Hirer will send a request for the reservation to the Owner through Vendor Infra website. A Rental Agreement is confirmed by the Owner's acceptance of the Hirer's Reservation Request. With the exception of promotional offers that are explicitly outlined on the Website, the Owner and Hirer are liable to pay commission to Vendor Infra once a Rental Agreement is confirmed between the Parties.`,
  },
  {
    title: "Payment",
    content: `Vendor Infra collects all payments on behalf of the Owner. Vendor Infra accepts online payments using various payment methods, including credit cards, net banking, UPI and other payment modes available on the platform. The commission is charged to both Owner and Hirer at the time the rental agreement is confirmed.`,
  },
  {
    title: "Cancellation & Refunds",
    content: `Cancellation and refund policies vary depending on the type of service and the agreement between the Owner and Hirer. Please refer to the specific terms outlined at the time of booking. Vendor Infra reserves the right to withhold commission in cases of cancellation depending on the timing and circumstances.`,
  },
  {
    title: "Changes to This Policy",
    content: `Vendor Infra reserves the right to modify this Pricing Policy at any time. Changes will be posted on this page with an updated effective date. Continued use of the platform after changes constitutes acceptance of the updated policy.`,
  },
];

export default function PricingPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHero
        eyebrow="Policy"
        title="Pricing with purpose, clarity, and trust"
        subtitle="Our pricing policy is designed to be fair, transparent and straightforward for all users of the Vendor Infra platform."
      />

      <section className="py-20 bg-gray-50 flex-1">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`p-8 ${i < sections.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <h2 className="text-[#0c1c5e] font-bold text-lg mb-3">{s.title}</h2>
                {s.content.split("\n\n").map((para, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed text-sm mb-3 last:mb-0">{para}</p>
                ))}
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-8">
            Last updated: January 2026 · For questions, contact enquiry@vendorinfra.com
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
