import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useQuoteCart } from "@/lib/quoteCart";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { total } = useQuoteCart();

  const links = [
    { href: "/about",     label: "About Us" },
    { href: "/services",  label: "Services" },
    { href: "/sectors",   label: "Sectors" },
    { href: "/materials", label: "Materials" },
    { href: "/contact",   label: "Contact Us" },
  ];

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/brand/Logo-Blue-1.png" alt="Vendor Infra Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-primary ${
                isActive(link.href) ? "text-primary font-semibold" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Quote cart icon */}
          <Link href="/quote-cart" className="relative p-2 text-foreground/70 hover:text-primary transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {total > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#FF7F00] text-white text-[10px] font-black rounded-full flex items-center justify-center leading-none">
                {total > 9 ? "9+" : total}
              </span>
            )}
          </Link>

          <Button asChild className="rounded-full px-5">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </nav>

        {/* Mobile row: cart + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <Link href="/quote-cart" className="relative p-2 text-foreground/70">
            <ShoppingCart className="w-5 h-5" />
            {total > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#FF7F00] text-white text-[10px] font-black rounded-full flex items-center justify-center">
                {total > 9 ? "9+" : total}
              </span>
            )}
          </Link>
          <button className="p-2 text-foreground/80" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className={`block text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-foreground/80"}`}>
            Home
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium transition-colors hover:text-primary ${isActive(link.href) ? "text-primary" : "text-foreground/80"}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full rounded-full">
            <Link href="/contact" onClick={() => setIsOpen(false)}>Get in Touch</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
