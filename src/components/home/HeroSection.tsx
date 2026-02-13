import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/storefront-exterior.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background with subtle zoom and movement */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1.05, 1], x: [0, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <img
            src={heroImage}
            alt="Grapevine Cottage storefront - unique gift shop in downtown Collingwood"
            className="w-full h-full object-cover brightness-[0.85]"
          />
        </motion.div>
        {/* Multilayered gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/60 to-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.3)_0%,transparent_60%)]" />
      </div>

      {/* Decorative stars/glimmer */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            y: [-20, 20, -20]
          }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
          className="absolute z-10 text-white pointer-events-none"
          style={{
            top: `${20 + i * 20}%`,
            left: `${15 + i * 30}%`,
            width: `${10 + i * 5}px`
          }}
        >
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" />
          </svg>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-script text-3xl md:text-5xl text-primary-foreground/90 block mb-6 drop-shadow-sm"
            >
              Step into the Magic of
            </motion.span>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-[1.05] tracking-tight">
              Grapevine <br />
              <span className="text-secondary italic">Cottage</span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-1 bg-secondary mx-auto mb-10 rounded-full"
            />

            <p className="font-body text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed italic font-light">
              "Where you find things you never knew you wanted."
              <span className="block mt-2 not-italic font-normal opacity-80 text-lg">
                Collingwood's favorite destination for unique treasures since 2001.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-secondary hover:text-primary-foreground h-16 px-10 rounded-full text-xl font-bold group transition-all duration-300 shadow-xl"
              >
                <Link to="/shop" className="flex items-center gap-2">
                  Explore Gifts
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-2 border-white/30 backdrop-blur-md hover:bg-white/20 h-16 px-10 rounded-full text-xl font-bold transition-all shadow-xl"
              >
                <Link to="/visit">Come See Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Bottom fade for seamless blend */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
