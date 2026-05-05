import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    {
      title: "Vendor Infra Marketplace for Plants and Equipment: Unlocking the Power of a Marketplace for Plants and Equipment",
      date: "March 31, 2026",
      author: "Tanay Singh",
      tags: ["Equipments", "Infrastructure", "Marketplace", "Technology"],
      preview: "In the ever-evolving landscape of industries, the effective management of plants and equipment is crucial for businesses seeking to optimize their Return on Investment (ROI)..."
    },
    {
      title: "SaaS Revolution in Construction and Infrastructure industry",
      date: "March 30, 2026",
      author: "Tanay Singh",
      tags: ["Construction", "Infrastructure", "SaaS", "Technology"],
      preview: "The Indian economy stands on the shoulders of the Construction and Infrastructure industry, encompassing vital sectors like roads and bridges, railways, urban infrastructure..."
    },
    {
      title: "Promote Digitalisation in Construction Industry: The Catalysts of Change and the Power of Innovation",
      date: "March 30, 2026",
      author: "Tanay Singh",
      tags: ["Artificial Intelligence", "Construction", "Digitalisation", "SaaS", "Technology"],
      preview: "The construction industry is undergoing a digital revolution, and it's high time to embrace the catalysts of change and the power of innovation..."
    },
    {
      title: "How can I get started with Artificial Intelligence for my business?",
      date: "February 19, 2024",
      author: "Rohit",
      tags: ["Revolution"],
      preview: "The Indian economy stands on the shoulders of the Construction and Infrastructure industry..."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#00244F] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[size:40px_40px]"></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl text-white/85 font-light max-w-2xl mx-auto">
              Latest news, industry trends, and thoughts from the Vendor Infra team.
            </p>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {posts.map((post, i) => (
                <Card key={i} className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="p-8 md:p-10 space-y-6 bg-white">
                      <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-primary" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <User className="w-4 h-4 text-primary" />
                          {post.author}
                        </div>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-[#00244F] group-hover:text-primary transition-colors leading-tight">
                        <Link href="#">{post.title}</Link>
                      </h2>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {post.preview}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-2 pt-4">
                        <Tag className="w-4 h-4 text-muted-foreground mr-1" />
                        {post.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-border/50">
                        <Link href="#" className="inline-flex items-center text-primary font-semibold hover:text-[#00244F] transition-colors">
                          Read Full Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
