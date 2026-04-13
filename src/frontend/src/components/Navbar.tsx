import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@tanstack/react-router";
import { Coffee, Menu } from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";
import { DarkModeToggle } from "./DarkModeToggle";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-ocid="navbar"
      className="sticky top-0 z-50 bg-card border-b border-border shadow-soft"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group transition-smooth"
          data-ocid="nav-logo"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-soft">
            <Coffee className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            Brew Haven
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={`nav-link-${link.label.toLowerCase()}`}
              className="px-4 py-2 rounded-md text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth [&.active]:text-primary [&.active]:font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <DarkModeToggle />
          <Link to="/menu">
            <Button
              size="sm"
              data-ocid="nav-order-btn"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth shadow-soft"
            >
              Order Online
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-2">
          <DarkModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                data-ocid="mobile-menu-trigger"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card px-0">
              <div className="px-6 pt-4 pb-2 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <Coffee className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
                <span className="font-display text-lg font-semibold text-foreground">
                  Brew Haven
                </span>
              </div>
              <Separator className="my-3" />
              <nav
                className="flex flex-col px-3 gap-1"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    data-ocid={`mobile-nav-${link.label.toLowerCase()}`}
                    className="px-4 py-3 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth [&.active]:text-primary [&.active]:bg-primary/10 [&.active]:font-semibold"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Separator className="my-4" />
              <div className="px-6">
                <Link to="/menu" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth">
                    Order Online
                  </Button>
                </Link>
              </div>
              <Separator className="mt-6 mb-4" />
              <div className="px-6 flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiInstagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiFacebook className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  aria-label="X (Twitter)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiX className="w-4 h-4" />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
