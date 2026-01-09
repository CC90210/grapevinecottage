import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const SocialSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          scriptTitle="Stay Connected"
          title="Follow Our Journey"
          subtitle="See our latest arrivals, behind-the-scenes moments, and daily treasures"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-6 mb-6">
            <a
              href="https://www.facebook.com/grapevinecottagecollingwood/"
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
