import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/storefront-exterior.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroImage}
            alt="Inside Grapevine Cottage gift shop"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-16 h-16 opacity-20"
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-primary-foreground">
          <path d="M50 0C55 20 70 30 90 35C70 40 55 55 50 75C45 55 30 40 10 35C30 30 45 20 50 0Z" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-16 w-12 h-12 opacity-15"
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-primary-foreground">
          <path d="M50 0C55 20 70 30 90 35C70 40 55 55 50 75C45 55 30 40 10 35C30 30 45 20 50 0Z" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-script text-3xl md:text-4xl text-primary-foreground/90 block mb-4">
            Welcome to Grapevine Cottage
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground font-semibold mb-6 leading-tight">
            Where You Find Things<br />You Never Knew You Wanted
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10">
            A beloved Collingwood treasure since 2001 — unique gifts, unexpected finds, and a warm welcome waiting for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="hero"
              className="min-w-[220px]"
            >
              <Link to="/shop">Discover What's In Store</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="heroOutline"
              className="min-w-[200px]"
            >
              <Link to="/visit">Visit Us Today</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
