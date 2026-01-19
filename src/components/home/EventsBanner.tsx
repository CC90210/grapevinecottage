import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/10 via-accent/10 to-terracotta/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 bg-background rounded-xl p-6 md:p-8 shadow-card border border-primary/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <div>
              <span className="text-sm uppercase tracking-widest text-primary font-medium">
                💕 Upcoming Event
              </span>
              <h3 className="font-display text-xl md:text-2xl text-foreground">
                Valentine's Day Photo Session
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Professional photographer in-store — couples, family & pet photos!
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button asChild variant="outline">
              <a href="tel:+17054458001" className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Book Now
              </a>
            </Button>
            <Button asChild>
              <Link to="/events" className="flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsBanner;