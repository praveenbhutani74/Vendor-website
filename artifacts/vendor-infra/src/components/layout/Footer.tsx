import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#00244F] text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4 md:col-span-2">
            <img
              src="/brand/Logo-Blue-1.png"
              alt="Vendor Infra Logo"
              className="h-12 w-auto bg-white p-2 rounded"
            />
            <p className="text-white/85 text-base mt-4 max-w-md leading-relaxed">
              AI-Powered Operating System for Infrastructure & Construction Industry
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/VENDORINFRA/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-lg hover:bg-[#FF7F00] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/vendorinfra"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-lg hover:bg-[#FF7F00] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/vendor-infra/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-lg hover:bg-[#FF7F00] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/vendorinfra/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-lg hover:bg-[#FF7F00] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-5">Pages</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/sectors", label: "Sectors" },
                { href: "/pricing", label: "Pricing Plans" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact Us" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/80 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-5">Contact Info</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>
                <span className="text-white font-medium block mb-0.5">SaaS Support</span>
                <a href="tel:+918800404840" className="hover:text-white transition-colors">+91-8800404840</a>
              </li>
              <li>
                <span className="text-white font-medium block mb-0.5">Supply Chain</span>
                <a href="tel:+918800119885" className="hover:text-white transition-colors">+91-8800119885</a>
              </li>
              <li>
                <a href="mailto:enquiry@vendorinfra.com" className="hover:text-white transition-colors">
                  enquiry@vendorinfra.com
                </a>
              </li>
              <li className="leading-relaxed">
                Suit No. 1436-1439, Plus Offices, Landmark Cyber Park, Sector 67, Gurugram, Haryana, India – 122101
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — matching the original footer exactly */}
      <div className="bg-black/30 border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
            {[
              { href: "/why-us", label: "Why us" },
              { href: "/pricing", label: "Pricing plans" },
              { href: "/referral", label: "Referral" },
              { href: "/iso", label: "ISO" },
              { href: "/pricing-policy", label: "Pricing Policy" },
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/security", label: "Security" },
              { href: "/terms", label: "Terms" },
              { href: "/faq", label: "FAQ" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[#FFB401] hover:text-white text-sm transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="text-center text-white/45 text-xs">
            &copy;Vendor Infra 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
