import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, Sparkles, Gift } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import storefrontImg from "@/assets/about-storefront.jpg";
import heroImg from "@/assets/hero-shop.jpg";

const values = [
  {
    icon: Sparkles,
    title: "Unique Finds",
    description: "We search for treasures you won't find anywhere else",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description: "Every customer is treated like family",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We're proud to be part of downtown Collingwood",
  },
  {
    icon: Gift,
    title: "Gift-Giving Joy",
    description: "We love helping you find the perfect present",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Inside Grapevine Cottage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-script text-3xl text-primary-foreground/90 block mb-2">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-4">
              A Downtown Collingwood Treasure
            </h1>
            <p className="text-xl text-primary-foreground/85">
              Since 2001
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-script text-3xl text-primary block mb-2">
                The Beginning
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                How It All Started
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Grapevine Cottage began with a passion for creating beautiful things. 
                  The name itself comes from the handcrafted grapevine wreaths that 
                  our founder Joy used to make by hand.
                </p>
                <p>
                  What started as a small kiosk grew into the beloved downtown boutique 
                  you see today — a treasure trove of unique gifts, home décor, and 
                  carefully curated finds.
                </p>
                <p>
                  Both Joy and her daughter April had a fondness for gardening, vintage shopping, 
                  and upcycling — even the shop's original cash register counter was salvaged from 
                  Zellers when the Collingwood location closed.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elevated">
                <img
                  src={storefrontImg}
                  alt="Grapevine Cottage storefront"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-4 border-l-4 border-accent/50 rounded-bl-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            scriptTitle="What We Believe"
            title="Our Values"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A New Chapter */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-script text-3xl text-primary block mb-2">
                A New Chapter
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Continuing the Legacy
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  In 2025, Grapevine Cottage began an exciting new chapter under the care 
                  of new owner Kim Warburton. While the faces may have changed, our commitment 
                  to warm hospitality, unique treasures, and exceptional service remains the same.
                </p>
                <p>
                  We invite you to visit and experience the magic of Grapevine Cottage for yourself.
                </p>
              </div>

              <Button asChild size="lg" className="mt-8">
                <Link to="/visit">Come Visit Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
