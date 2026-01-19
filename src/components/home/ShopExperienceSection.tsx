import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Store, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShopExperienceSection = () => {
  return (
    <section className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <Store className="w-8 h-8 text-primary" />
          </div>
          
          <span className="font-script text-3xl text-primary block mb-2">
            🛍️ Shop the Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            A Treasure Hunt Best Experienced In Person
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Grapevine Cottage is a treasure hunt best experienced in person! 
            Browse our collections online, then visit us to discover your 
            perfect find.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
            <div className="bg-background rounded-lg p-4 shadow-soft">
              <p className="text-primary font-medium mb-1">✨ Online</p>
              <p className="text-sm text-muted-foreground">Browse & Explore</p>
            </div>
            <div className="bg-background rounded-lg p-4 shadow-soft">
              <p className="text-primary font-medium mb-1">🏠 In-Store</p>
              <p className="text-sm text-muted-foreground">Shop & Take Home</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8">
            We're located at 191 Hurontario Street, Unit #2 in beautiful 
            downtown Collingwood. Can't wait to see you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <a
                href="https://maps.google.com/?q=191+Hurontario+Street+Unit+2+Collingwood+Ontario+L9Y+2M1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+17054458001" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (705) 445-8001
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopExperienceSection;