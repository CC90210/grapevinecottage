import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import storefrontImg from "@/assets/about-storefront.jpg";

const StoryPreviewSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-elevated">
              <img
                src={storefrontImg}
                alt="Grapevine Cottage storefront"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-accent/50 rounded-tl-lg" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-accent/50 rounded-br-lg" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:pl-8"
          >
            <span className="font-script text-3xl text-primary block mb-2">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              A Collingwood Treasure Since 2001
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                What began with handcrafted grapevine wreaths has grown into 
                downtown Collingwood's most beloved gift shop.
              </p>
              <p>
                For over two decades, we've been helping customers find unique treasures, 
                the perfect gifts, and those special pieces that make a house feel like home.
              </p>
            </div>
            <Button asChild variant="link" className="mt-6 p-0 text-primary font-medium text-lg group">
              <Link to="/about" className="flex items-center gap-2">
                Read Our Full Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryPreviewSection;
