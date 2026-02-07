import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

const WelcomeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          scriptTitle="Come In"
          title="Stay Awhile"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            As Collingwood's favorite treasure hunt destination, there's something magical about walking through our doors. Maybe it's the way sunlight catches a handcrafted jewelry piece. Maybe it's finding the perfect unique gift you didn't know existed. Or maybe it's just the feeling of being part of our vibrant local community here in downtown Collingwood.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Whatever brings you into Grapevine Cottage, we're honored to share our discoveries with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
