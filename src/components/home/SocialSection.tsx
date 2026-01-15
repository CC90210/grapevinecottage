import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const SocialSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          scriptTitle="Stay Connected"
          title="Follow Our New Chapter"
          subtitle="Join us on our fresh start — same heart, new home online"
        />

        {/* Backstory about the new accounts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-10"
        >
          <p className="text-muted-foreground text-lg leading-relaxed">
            As Grapevine Cottage begins its exciting new chapter, we've created fresh social pages 
            to share this journey with you. Over 15,000 wonderful people followed our story before — 
            and we'd be honored to have you join our new community. Same treasures, same warmth, 
            same love for finding things you never knew you wanted.
          </p>
          <p className="text-primary font-medium mt-4 italic">
            Follow along and be part of what's next!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-6 mb-6">
            <a
              href="https://www.facebook.com/p/Grapevine-Cottage-61577257586575/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow us on Facebook"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors shadow-soft">
                <Facebook className="w-8 h-8 text-primary-foreground" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/grapevinecottage/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow us on Instagram"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors shadow-soft">
                <Instagram className="w-8 h-8 text-primary-foreground" />
              </div>
            </a>
          </div>
          <p className="text-primary font-medium text-lg">
            @grapevinecottage
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
