import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div>
              <span className="font-script text-3xl">Grapevine Cottage</span>
              <p className="text-primary-foreground/80 text-sm mt-2">
                Fabulous & Unique Gift Store
              </p>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Proudly serving Collingwood since 2001
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                About Us
              </Link>
              <Link to="/shop" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Shop
              </Link>
              <Link to="/visit" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Visit Us
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  191 Hurontario St, Unit 2<br />
                  Collingwood, ON L9Y 2M1
                </p>
              </div>
              <a
                href="tel:+17054458001"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                (705) 445-8001
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-display text-lg mb-4">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/grapevinecottagecollingwood/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/grapevinecottage/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-3">
              @grapevinecottage
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-primary-foreground/60 text-sm">
            © 2025 Grapevine Cottage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
