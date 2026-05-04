import { motion } from "framer-motion";
import { Linkedin, Target, Shield, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const usps = [
  "End to End Value Chain Integration",
  "Single Unified Data Lake",
  "Smart Decision Support via Market Intelligence",
  "AI & ML-Driven Insights",
  "Safety, Security & Trust built in",
  "Dedicated Support & Accountability",
];

const management = [
  {
    name: "Rahul Jain",
    role: "Founder & CEO",
    photo: "https://vendorinfra.com/storage/2025/11/10.png",
    linkedin: "https://www.linkedin.com/in/rahuljainbd/",
  },
  {
    name: "Rupali Jain",
    role: "Co Founder",
    photo: "https://vendorinfra.com/storage/2025/11/11.png",
    linkedin: "https://www.linkedin.com/in/rupali-jain-1484a3200/",
  },
  {
    name: "Sukhdeep Bhogal",
    role: "Advisor — Product & Engineering",
    photo: "https://vendorinfra.com/storage/2025/11/VI-employee-photos-1.png",
    linkedin: "https://www.linkedin.com/in/sukhdeepbhogal/",
  },
  {
    name: "Munish Gupta",
    role: "Advisor — Finance & Accounts",
    photo: "https://vendorinfra.com/storage/2025/11/12.png",
    linkedin: "https://www.linkedin.com/in/munishgupta06/",
  },
];

const advisory = [
  {
    name: "Shailendra Kumar Tripathi",
    role: "Dy. MD & CEO, JMC Project (India) Limited — Kalpataru Group",
    photo: "https://vendorinfra.com/storage/2025/11/1.png",
    linkedin: "https://www.linkedin.com/in/shailendra-kumar-tripathi-866330106/",
  },
  {
    name: "Sanjeev Kumar Gupta",
    role: "CEO-KEDM · Ex MD & CEO Lahari (GOI) · Ex Accenture, Microsoft, IBM",
    photo: "https://vendorinfra.com/storage/2025/11/4.png",
    linkedin: "https://www.linkedin.com/in/sanjeevkgupta/",
  },
  {
    name: "Amit Jain",
    role: "Sales Director, HoneyWell",
    photo: "https://vendorinfra.com/storage/2025/11/VI-employee-photos-13.png",
    linkedin: "https://www.linkedin.com/in/andleeb-jain-7a2026a/",
  },
  {
    name: "Nitin Jain",
    role: "Head Corporate Center L&T · Ex Sr. VP Kalpataru · Ex CSO DCM Shriram, Shapoorji Pallonji",
    photo: "https://vendorinfra.com/storage/2025/11/2.png",
    linkedin: "https://www.linkedin.com/in/njain2000/",
  },
];

const team = [
  { name: "Shashi Sharma",    role: "Human Resources",    tag: "HR",            photo: "https://vendorinfra.com/storage/2025/11/16-1.png",              linkedin: "https://www.linkedin.com/in/shashi-sharma-b4965520" },
  { name: "Hemant Sharma",    role: "Research & Strategy", tag: "Strategy",      photo: "https://vendorinfra.com/storage/2025/11/13.png",                linkedin: "https://www.linkedin.com/in/hemant-sharma-82671330/" },
  { name: "Kartikay Sihna",   role: "Procurement",         tag: "Procurement",   photo: "https://vendorinfra.com/storage/2025/11/17.png",                linkedin: "https://www.linkedin.com/in/kartikay-s-21402513b" },
  { name: "Tanay Singh",      role: "Product & Marketing", tag: "Product",       photo: "https://vendorinfra.com/storage/2024/01/VI-employee-photos-14.png", linkedin: "https://www.linkedin.com/in/tanaysingh07/" },
  { name: "Abhishek Srivastav", role: "Procurement",       tag: "Procurement",   photo: "https://vendorinfra.com/storage/2026/03/2.png",                 linkedin: "https://www.linkedin.com/in/abhishek-srivastav-01495a119" },
  { name: "Shaurya Sonu",     role: "Finance & Accounts",  tag: "Finance",       photo: "https://vendorinfra.com/storage/2026/03/3.png",                 linkedin: "https://www.linkedin.com/in/shaurya-sonu-840aa8247" },
  { name: "Ashutosh Pandey",  role: "Procurement",         tag: "Procurement",   photo: "https://vendorinfra.com/storage/2025/11/26.png",                linkedin: "https://www.linkedin.com/in/ashutosh-pandey-83889945/" },
  { name: "Astha Tiwari",     role: "Human Resources",     tag: "HR",            photo: "https://vendorinfra.com/storage/2025/11/VI-employee-photos-12.png", linkedin: "https://www.linkedin.com/in/manju-saroj-5b0050229" },
  { name: "Aman Goyal",       role: "Finance",             tag: "Finance",       photo: "https://vendorinfra.com/storage/2025/11/22.png",                linkedin: "https://www.linkedin.com/in/amangoyal824" },
  { name: "Rajat Singh",      role: "Supplier Relations",  tag: "Operations",    photo: "https://vendorinfra.com/storage/2026/03/5.png",                 linkedin: "https://www.linkedin.com/in/rajat-singh-3b010a145" },
  { name: "Rajni Kumar",      role: "Product & IT",        tag: "Product & IT",  photo: "https://vendorinfra.com/storage/2025/11/VI-employee-photos-16.png", linkedin: "https://www.linkedin.com/in/rajni-kumar-628477123" },
  { name: "Utkarsh Kashyap",  role: "Strategy & IR",       tag: "Strategy",      photo: "https://vendorinfra.com/storage/2025/11/19.png",                linkedin: "https://www.linkedin.com/in/utkarsh-kashyap/" },
  { name: "Pawanpreet Singh", role: "Procurement",         tag: "Procurement",   photo: "https://vendorinfra.com/storage/2025/11/25.png",                linkedin: "https://www.linkedin.com/in/pawanpreet-singh-2a4278143/" },
  { name: "Deepak Kumar",     role: "Supplier Relations",  tag: "Operations",    photo: "https://vendorinfra.com/storage/2025/11/29.png",                linkedin: "https://www.linkedin.com/in/deepak-kumar-89702321b" },
  { name: "Rahul Maurya",     role: "Accounts",            tag: "Accounts",      photo: "https://vendorinfra.com/storage/2025/11/VI-employee-photos-20.png", linkedin: "https://www.linkedin.com/in/rahul-maurya-indirect-taxation-b8b566280/" },
  { name: "Ankit Yadav",      role: "Data Optimization",   tag: "Data",          photo: "https://vendorinfra.com/storage/2025/11/27.png" },
  { name: "Kaushal Kumar",    role: "Supplier Relations",  tag: "Operations",    photo: "https://vendorinfra.com/storage/2025/12/VI-employee-photos-4.png" },
  { name: "Yashika Nimesh",   role: "Data Optimization",   tag: "Data",          photo: "https://vendorinfra.com/storage/2026/03/1.png",                 linkedin: "https://www.linkedin.com/in/yashika-nimesh-9bab51271/" },
  { name: "Shruti Mohrya",    role: "Data Optimization",   tag: "Data",          photo: "https://vendorinfra.com/storage/2025/12/VI-employee-photos-6.png" },
  { name: "Yojit Pareek",     role: "Legal & Compliance",  tag: "Legal",         photo: "https://vendorinfra.com/storage/2025/11/14.png",                linkedin: "https://www.linkedin.com/in/yojit-pareek-b41a0080/" },
];

const tagColors: Record<string, string> = {
  HR:           "bg-pink-100 text-pink-700",
  Strategy:     "bg-purple-100 text-purple-700",
  Procurement:  "bg-orange-100 text-orange-700",
  Product:      "bg-blue-100 text-blue-700",
  "Product & IT": "bg-blue-100 text-blue-700",
  Finance:      "bg-green-100 text-green-700",
  Operations:   "bg-yellow-100 text-yellow-700",
  Accounts:     "bg-teal-100 text-teal-700",
  Data:         "bg-indigo-100 text-indigo-700",
  Legal:        "bg-red-100 text-red-700",
  "Strategy & IR": "bg-purple-100 text-purple-700",
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-[#0c1c5e] text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[size:40px_40px]" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-4"
            >
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6"
            >
              Transforming the Infrastructure &amp; Construction Industry
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 font-light"
            >
              Built on Trust and Reliability with AI and ML
            </motion.p>
          </div>
        </section>

        {/* Story & What We Do */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14">
              <div className="space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#1a4fdb]/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#1a4fdb]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0c1c5e]">The Vendor Infra Story</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">It connects infrastructure companies, vendors, suppliers, contractors, consultants, and developers, offering a cost-effective and efficient way to collaborate, source, and execute projects across diverse sectors.</p>
                <p className="text-gray-600 leading-relaxed">Headquartered in Delhi NCR, Vendor Infra was founded by industry leaders with over two decades of experience in managing and executing large-scale infrastructure projects.</p>
                <p className="text-gray-600 leading-relaxed">Our platform simplifies vendor discovery, enables supply chain finance, offers a dedicated plants &amp; equipment marketplace, and facilitates project insurance.</p>
              </div>
              <div className="space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#1a4fdb]/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#1a4fdb]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0c1c5e]">What We Do</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">Vendor Infra offers more than just Vendor Discovery and Marketplace. We provide a powerful AI ecosystem designed for B2B businesses across all sectors of the infrastructure and construction industry.</p>
                <p className="text-gray-600 leading-relaxed">Our AI- and ML-powered platform seamlessly blends technology with real-world needs, enabling smarter decision-making, cost optimization, and faster collaboration.</p>
                <p className="text-gray-600 leading-relaxed">We bring integrated services on a single platform, empowering contractors, suppliers, consultants, and developers to connect, collaborate, and construct more efficiently.</p>
              </div>
            </div>
          </div>
        </section>

        {/* USP */}
        <section className="py-20 bg-gray-50 border-y">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-[#1a4fdb] font-semibold text-sm uppercase tracking-widest mb-2">Why Vendor Infra</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c1c5e]">One Platform. One Ecosystem. Infinite Possibilities</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {usps.map((usp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#1a4fdb] shrink-0 mt-0.5" />
                  <span className="font-semibold text-[#0c1c5e]">{usp}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-[#1a4fdb] font-semibold text-sm uppercase tracking-widest mb-2">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c1c5e]">Management Team</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {management.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Photo */}
                  <div className="relative h-56 bg-gradient-to-br from-[#0c1c5e]/5 to-[#1a4fdb]/10 overflow-hidden">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={e => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=1a4fdb&color=fff&size=300`; }}
                    />
                    {/* LinkedIn overlay */}
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 w-9 h-9 bg-white/90 hover:bg-[#0077b5] text-[#0077b5] hover:text-white rounded-full flex items-center justify-center shadow transition-all duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <h4 className="font-bold text-[#0c1c5e] text-base leading-snug">{m.name}</h4>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">{m.role}</p>
                  </div>
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#1a4fdb] transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board */}
        <section className="py-20 bg-[#0c1c5e]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-2">Guidance & Expertise</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Advisory Board</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {advisory.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  {/* Photo */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={a.photo}
                      alt={a.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={e => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(a.name)}&background=1a4fdb&color=fff&size=300`; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c5e]/60 to-transparent" />
                    <a
                      href={a.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 w-9 h-9 bg-white/20 hover:bg-[#0077b5] text-white rounded-full flex items-center justify-center backdrop-blur-sm shadow transition-all duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <h4 className="font-bold text-white text-base leading-snug">{a.name}</h4>
                    <p className="text-sm text-blue-200 mt-1.5 leading-relaxed">{a.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-14">
              <p className="text-[#1a4fdb] font-semibold text-sm uppercase tracking-widest mb-2">Our People</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c1c5e]">Team Members</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 5) * 0.06 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Photo */}
                  <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#0c1c5e]/5 to-[#1a4fdb]/10">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={e => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=e8eef9&color=1a4fdb&size=300`; }}
                    />
                    {/* Tag badge */}
                    <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColors[member.tag] || "bg-gray-100 text-gray-600"}`}>
                      {member.tag}
                    </span>
                    {/* LinkedIn */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 w-7 h-7 bg-white/90 hover:bg-[#0077b5] text-[#0077b5] hover:text-white rounded-full flex items-center justify-center shadow transition-all duration-200 opacity-0 group-hover:opacity-100"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  {/* Info */}
                  <div className="p-3.5">
                    <h4 className="font-bold text-[#0c1c5e] text-sm leading-tight">{member.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{member.role}</p>
                    {/* LinkedIn link (always visible on mobile) */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-[#0077b5] text-xs font-medium hover:underline sm:hidden"
                      >
                        <Linkedin className="w-3 h-3" /> LinkedIn
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
