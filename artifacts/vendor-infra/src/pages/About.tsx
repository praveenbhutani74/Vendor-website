import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Shield, CheckCircle2 } from "lucide-react";

export default function About() {
  const usps = [
    "End to End Value Chain Integration",
    "Single Unified Data Lake",
    "Smart Decision Support via Market Intelligence",
    "AI & ML-Driven Insights",
    "Safety, Security & Trust built in",
    "Dedicated Support & Accountability"
  ];

  const management = [
    { name: "Rahul Jain", role: "Founder & CEO" },
    { name: "Rupali Jain", role: "Co Founder" },
    { name: "Sukhdeep Bhogal", role: "Advisor (Product & Engineering)" },
    { name: "Munish Gupta", role: "Advisor (Finance & Accounts)" }
  ];

  const advisory = [
    { name: "Shailendra Kumar Tripathi", role: "Dy. MD & CEO, JMC Project (India) Limited (Kalpataru Group)" },
    { name: "Sanjeev Kumar Gupta", role: "CEO-KEDM, Ex MD & CEO Lahari, Ex Accenture, Microsoft, IBM" },
    { name: "Amit Jain", role: "Sales Director, HoneyWell" },
    { name: "Nitin Jain", role: "Head Corporate Center-L&T, Ex Sr. VP Kalpataru Group" }
  ];

  const team = [
    { name: "Shashi Sharma", role: "HR" },
    { name: "Hemant Sharma", role: "Research & Strategy" },
    { name: "Kartikay Sihna", role: "Procurement" },
    { name: "Tanay Singh", role: "Product & Marketing" },
    { name: "Abhishek Srivastav", role: "Procurement" },
    { name: "Shaurya Sonu", role: "Finance & Accounts" },
    { name: "Ashutosh Pandey", role: "Procurement" },
    { name: "Astha Tiwari", role: "HR" },
    { name: "Aman Goyal", role: "Finance" },
    { name: "Rajat Singh", role: "Supplier Relations" },
    { name: "Rajni Kumar", role: "Product & IT" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#0c1c5e] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[size:40px_40px]"></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Transforming the Infrastructure and Construction industry
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light">
              Built on Trust and Reliability with AI and ML
            </p>
          </div>
        </section>

        {/* The Vendor Infra Story & What We Do */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#0c1c5e] flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  The Vendor Infra Story
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    It connects infrastructure companies, vendors, suppliers, contractors, consultants, and developers, offering a cost-effective and efficient way to collaborate, source, and execute projects across diverse sectors.
                  </p>
                  <p>
                    Headquartered in Delhi NCR, Vendor Infra was founded by industry leaders with over two decades of experience in managing and executing large-scale infrastructure projects.
                  </p>
                  <p>
                    Our platform is built to simplify vendor discovery and collaboration, enable supply chain finance, offer a dedicated plants and equipment marketplace, and facilitate project insurance — empowering businesses to overcome industry challenges and drive greater efficiency, transparency, and growth.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#0c1c5e] flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  What We Do
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Vendor Infra, we offer more than just a Vendor Discovery and Marketplace. We provide a powerful AI ecosystem designed for B2B businesses across all sectors of the infrastructure and construction industry.
                  </p>
                  <p>
                    Our AI- and ML Powered seamlessly blends technology with the real-world needs of infrastructure stakeholders, enabling smarter decision-making, cost optimization, profit maximization, and faster collaboration.
                  </p>
                  <p>
                    Vendor Infra brings integrated services on a single platform, empowering contractors, suppliers, consultants, and developers to connect, collaborate, and construct more efficiently than ever before.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USP */}
        <section className="py-24 bg-gray-50 border-y">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0c1c5e]">
                One Platform. One Ecosystem. Infinite Possibilities
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {usps.map((usp, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-border/50">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="font-semibold text-foreground text-lg">{usp}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership & Team */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0c1c5e] flex items-center justify-center gap-3">
                <Users className="w-10 h-10 text-primary" />
                Our People
              </h2>
            </div>

            <div className="space-y-20 max-w-6xl mx-auto">
              {/* Management */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-10 text-[#0c1c5e] uppercase tracking-wide">Management Team</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {management.map((member, i) => (
                    <Card key={i} className="border-none shadow-md bg-gray-50">
                      <CardContent className="p-6 text-center space-y-2">
                        <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mb-4">
                          {member.name.charAt(0)}
                        </div>
                        <h4 className="font-bold text-lg">{member.name}</h4>
                        <p className="text-sm text-muted-foreground font-medium">{member.role}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Advisory Board */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-10 text-[#0c1c5e] uppercase tracking-wide">Advisory Board</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {advisory.map((member, i) => (
                    <Card key={i} className="border-none shadow-md bg-gray-50">
                      <CardContent className="p-6 flex items-center gap-4">
                         <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl font-bold shrink-0">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{member.name}</h4>
                          <p className="text-sm text-muted-foreground font-medium">{member.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Team Members */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-10 text-[#0c1c5e] uppercase tracking-wide">Team Members</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {team.map((member, i) => (
                    <div key={i} className="px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm flex flex-col items-center">
                      <span className="font-bold text-foreground">{member.name}</span>
                      <span className="text-xs text-muted-foreground font-medium">{member.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
