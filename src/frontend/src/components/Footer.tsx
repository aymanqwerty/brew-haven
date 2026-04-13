import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { Clock, Coffee, Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const HOURS = [
  { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 4:00 PM" },
];

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="bg-card border-t border-border mt-auto"
      data-ocid="footer"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-soft">
                <Coffee className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                Brew Haven
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              A cozy corner where every cup is crafted with care. Freshly
              roasted, warmly served.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                aria-label="Follow on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <SiInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Follow on Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <SiFacebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com"
                aria-label="Follow on X"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <SiX className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">
              Explore
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">
              Find Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  12 Willow Lane, Brooklyn, NY 11201
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="tel:+17185550192"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (718) 555-0192
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="mailto:hello@brewhaven.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@brewhaven.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">
              Hours
            </h3>
            <ul className="space-y-3">
              {HOURS.map((entry) => (
                <li key={entry.day} className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-foreground">
                      {entry.day}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {entry.hours}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Brew Haven. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
