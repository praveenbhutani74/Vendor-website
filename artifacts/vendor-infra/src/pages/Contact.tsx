import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "We'll get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#0c1c5e] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[size:40px_40px]"></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Let's connect and build something great together
            </h1>
            <p className="text-xl text-blue-100 font-light max-w-2xl mx-auto">
              We are here to help you move faster. Let's connect and collaborate — the Vendor Infra team is just a message away.
            </p>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
              
              {/* Contact Info */}
              <div className="md:col-span-2 space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50">
                  <h3 className="text-2xl font-bold text-[#0c1c5e] mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Call Center (SaaS)</p>
                        <p className="text-muted-foreground">+91-8800404840</p>
                        <p className="font-semibold text-foreground mt-2">Call Center (Supply Chain)</p>
                        <p className="text-muted-foreground">+91-8800119885</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground">enquiry@vendorinfra.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Head Office</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Suit No. 1436-1439, Plus Offices, Landmark Cyber Park, Sector 67, Gurugram, Haryana, India – 122101
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border/50">
                    <p className="font-semibold text-foreground mb-4">Follow Us</p>
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-3">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50">
                  <h3 className="text-2xl font-bold text-[#0c1c5e] mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" required placeholder="John Doe" className="bg-gray-50 border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" required placeholder="Acme Corp" className="bg-gray-50 border-gray-200" />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required placeholder="john@example.com" className="bg-gray-50 border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className="bg-gray-50 border-gray-200" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="How can we help you?" 
                        rows={6}
                        className="bg-gray-50 border-gray-200 resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg h-14" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Submit Message"}
                    </Button>
                  </form>
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
