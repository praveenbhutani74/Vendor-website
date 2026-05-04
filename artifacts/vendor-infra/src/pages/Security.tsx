import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";

const pillars = [
  {
    title: "Physical Security",
    icon: "🏢",
    points: [
      "Technologies like biometric identification, metal detection, cameras, vehicle barriers, and laser-based intrusion detection systems protect Data Center floors",
      "Security guards present 24/7/365 to protect access to servers",
      "Human audits regularly run to check the inviolability of sites",
      "Remote access of the servers requires multiple levels of authentication",
      "No sensitive server can be accessed directly from the Internet",
    ],
  },
  {
    title: "Network Security",
    icon: "🌐",
    points: [
      "Platform runs on custom hardware with a custom hardened operating system and file system",
      "Rigorous firewall rules set up to control ingress and egress of data",
      "Intrusion Detection System and Intrusion Protection System with alarms for abnormalities",
      "All actions logged on an external central logging server with alarms and automatic notifications",
    ],
  },
  {
    title: "Data Security",
    icon: "🔐",
    points: [
      "All communication between your browser and our servers secured via a strong SSL certificate",
      "All communications between internal servers are re-encrypted to prevent monitoring",
      "Persistent disks encrypted using AES-256; keys themselves encrypted with master keys",
      "Daily encrypted backups of the database stored in multiple locations for disaster recovery",
      "All passwords encrypted and never stored in plain text",
    ],
  },
  {
    title: "Application Security",
    icon: "🛡️",
    points: [
      "Regular security audits and penetration testing performed by independent security firms",
      "Secure coding practices enforced through code review processes",
      "Multi-factor authentication available for all user accounts",
      "Role-based access controls to ensure users only access appropriate data",
    ],
  },
];

export default function Security() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHero
        eyebrow="Security Policy"
        title="Strong protection across every layer"
        subtitle="Cloud & Data Security is critical to everything we do at Vendor Infra. Your confidential data is always secure and protected."
      />

      <section className="py-20 bg-gray-50 flex-1">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-12 text-center">
            <p className="text-[#0c1c5e] font-medium leading-relaxed max-w-3xl mx-auto">
              We know how important and confidential your pricing information is to your business and competitive edge.
              Feel reassured knowing that Vendor Infra was built from the ground up and is operated on a daily basis
              to ensure that your confidential data is always secure and confidential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl">{pillar.icon}</span>
                  <h3 className="text-[#0c1c5e] font-bold text-xl">{pillar.title}</h3>
                </div>
                <ul className="space-y-3">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-[#1a4fdb] font-bold mt-0.5 shrink-0">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#0c1c5e] text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold mb-3">ISO 27001 Certified</h3>
            <p className="text-blue-200 max-w-2xl mx-auto text-sm leading-relaxed">
              Vendor Infra is ISO 27001 certified for Information Security Management. This globally recognized
              certification validates that our security practices meet the highest international standards for
              protecting your data.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
