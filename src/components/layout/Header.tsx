import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/shop" },
  { name: "Events", path: "/events" },
  { name: "Visit Us", path: "/visit" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className="font-script text-2xl md:text-3xl text-primary">
              Grapevine Cottage
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase">
              Fabulous & Unique Gifts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm tracking-wide transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.facebook.com/p/Grapevine-Cottage-61577257586575/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/grapevinecottage/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-lg py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-primary font-medium"
                      : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a
                  href="https://www.facebook.com/p/Grapevine-Cottage-61577257586575/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/grapevinecottage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
