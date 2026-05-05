import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";

export default function Referral() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHero
        eyebrow="Referral"
        title="Client Referral & IBC Program"
        subtitle="Earn rewards by referring Vendor Infra to infrastructure and construction companies, vendors, consultants, suppliers and manufacturers."
      />

      <section className="py-20 bg-gray-50 flex-1">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* CRP */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#FF7F00] rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6">
                CRP
              </div>
              <h2 className="text-2xl font-bold text-[#00244F] mb-4">Client Referral Program</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Refer Vendor Infra services to Infrastructure & Construction Companies, Vendors,
                Consultants, Suppliers, Manufacturers etc and earn cash with each referral from our
                Exclusive Client Referral Program.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Earn cash rewards for every successful referral",
                  "No limit on the number of referrals",
                  "Track your referrals through your dashboard",
                  "Fast and transparent payout process",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#FF7F00] font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* IBC */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#00244F] rounded-2xl p-10 shadow-sm text-white"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6">
                IBC
              </div>
              <h2 className="text-2xl font-bold mb-4">Independent Business Consultant</h2>
              <p className="text-white/85 leading-relaxed mb-6">
                Become an Independent Business Consultant (IBC) for Vendor Infra. Partner with us
                to grow our network and earn recurring income by bringing infrastructure companies
                and vendors onto the platform.
              </p>
              <ul className="space-y-3 text-sm text-white/85">
                {[
                  "Recurring income on every subscription you onboard",
                  "Dedicated partner support and training",
                  "Access to marketing materials and collateral",
                  "Recognised partnership designation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#FFB401] font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 bg-[#FFF4E0] rounded-2xl p-10 border border-[#FFD8A8]"
          >
            <h3 className="text-xl font-bold text-[#00244F] mb-4">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Register", desc: "Sign up as a Referral Partner or IBC on the Vendor Infra platform." },
                { step: "2", title: "Refer", desc: "Introduce Vendor Infra to companies in your network and track their onboarding." },
                { step: "3", title: "Earn", desc: "Receive your cash reward or recurring commission once the referral converts." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#FF7F00] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00244F] mb-1">{s.title}</h4>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#FF7F00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in partnering with us?</h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">
            Contact our team to learn more about the Referral Program and IBC opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#FF7F00] font-semibold px-8 py-4 rounded-full hover:bg-[#FFF4E0] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
