import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, Sparkles, Gift, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import storefrontImg from "@/assets/store-be-mine.jpg";
import heroImg from "@/assets/store-pitch-black.jpg";

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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
              A Story Written in Treasures
            </h1>
            <p className="text-xl text-primary-foreground/85 max-w-2xl mx-auto">
              From a mother's grapevine wreaths to a community landmark — and now, a new chapter.
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
                Where It All Started
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  In 2001, Grapevine Cottage opened its doors in downtown Collingwood. 
                  The name came from the handcrafted grapevine wreaths our founder Joy Edwards 
                  used to make by hand.
                </p>
                <p>
                  What started as a small shop filled with passion became something more — 
                  a place where neighbors became friends, where gifts meant something, 
                  and where you could always find something you never knew you needed.
                </p>
                <p>
                  For over two decades, Joy and her daughter April filled this space with love, 
                  laughter, and an endless stream of unique treasures.
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
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-4 border-l-4 border-terracotta/50 rounded-bl-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* A New Chapter - Kim's Story */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="font-script text-3xl text-primary block mb-2">
                A New Chapter
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Continuing the Legacy
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background rounded-xl p-8 md:p-12 shadow-card"
            >
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p className="text-xl">
                  In 2025, I was given an unexpected gift.
                </p>
                <p>
                  After spending my career in service — working for the federal government 
                  and at Children's Aid — I retired in January. I wasn't quite ready, 
                  but life had other plans.
                </p>
                <p>
                  When the opportunity came to take over Grapevine Cottage, I felt something 
                  I can only describe as <em className="text-foreground">meant to be</em>. 
                  This store has been part of our community for so long. I felt honored 
                  to be the one to carry it forward.
                </p>
                <p className="text-foreground font-medium">
                  My name is Kim, and I'm the new guardian of this special place.
                </p>
                <p>
                  I moved to Collingwood full-time in 2019 to help my father, though I've been 
                  coming here my whole life. This town, this community, this store — 
                  they're part of who I am now.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Promise */}
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
                The Promise
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                What We're About
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-left md:text-center">
                <p className="text-xl text-foreground italic">
                  People tell me all the time that they don't know where we find the things we find.
                </p>
                <p className="font-medium text-primary text-2xl font-display">
                  That's the magic of Grapevine Cottage.
                </p>
                <p>
                  You come in looking for a gift and leave with something for yourself. 
                  You browse the shelves and discover a treasure you never knew existed. 
                  You walk out with a story to tell.
                </p>
                <p>
                  That's what we do here. We find the unexpected, the unique, the special — 
                  so you can too.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-accent/20">
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

      {/* What's Ahead */}
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
                What's Ahead
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                Growing Together
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  My hope is simple: that people realize we're here, that they come back, 
                  and that we keep growing together as a community.
                </p>
                <p>
                  We're planning events, welcoming new treasures, and keeping the doors open 
                  for anyone who wants to wander in and discover something wonderful.
                </p>
                <p className="text-xl text-foreground font-medium pt-4">
                  Come see us. I'd love to meet you.
                </p>
                <p className="font-script text-3xl text-primary">
                  — Kim
                </p>
              </div>

              <Button asChild size="lg" className="mt-8">
                <Link to="/visit" className="flex items-center gap-2">
                  Come Visit Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
