import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

const WelcomeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          scriptTitle="Welcome to Grapevine Cottage"
          title="Where Every Visit Feels Like Coming Home"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Nestled in the heart of downtown Collingwood, our boutique has been delighting 
            treasure hunters since 2001. Whether you're searching for the perfect gift, 
            a unique piece of home décor, or a little something just for you – you'll find it here.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Step inside and discover why locals and visitors alike have made 
            Grapevine Cottage their favorite place to shop.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
