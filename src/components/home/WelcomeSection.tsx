import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { Sparkles, Heart, Gift } from "lucide-react";

const WelcomeSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          scriptTitle="A Warm Welcome"
          title="Stay Awhile"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl font-display text-foreground leading-snug italic text-primary">
              "Collingwood's favorite treasure hunt destination, where every piece tells a story."
            </p>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                There's something magical about walking through our doors. Maybe it's the way sunlight catches a handcrafted jewelry piece, or finding the perfect unique gift you didn't know existed.
              </p>
              <p>
                As a community landmark since 2001, we've built our legacy on discovery. Now, under new guardianship, we're proud to continue that journey with a fresh perspective and the same heart.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <FeatureCard
              icon={Sparkles}
              title="Curated Magic"
              desc="Hand-picked treasures from local artisans."
            />
            <FeatureCard
              icon={Heart}
              title="Community Heart"
              desc="Downtown Collingwood's favorite meeting spot."
              className="sm:mt-8"
            />
            <FeatureCard
              icon={Gift}
              title="Unique Gifting"
              desc="Find the unexpected, perfectly wrapped."
            />
            <FeatureCard
              icon={Sparkles}
              title="New Arrivals"
              desc="Our discovery process never stops."
              className="sm:mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, className }: any) => (
  <div className={`p-8 rounded-[2rem] bg-secondary/30 border border-secondary/50 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group ${className}`}>
    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="font-display text-xl text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

export default WelcomeSection;
