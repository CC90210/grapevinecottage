import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Camera, Heart, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const Events = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-script text-3xl text-primary block mb-2">
              What's Happening
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              Events & Happenings
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us for special moments at Grapevine Cottage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Event - Valentine's Day */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-terracotta/10 rounded-2xl p-8 md:p-12 border border-primary/20 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="text-sm uppercase tracking-widest text-primary font-medium">
                    Featured Event
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground">
                    Valentine's Day Photo Session
                  </h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    💕 Capture the love! We're hosting a professional photographer 
                    in-store for Valentine's Day photos.
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="font-display text-xl text-foreground">Perfect for:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-terracotta" />
                        Couples photos
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-terracotta" />
                        Family portraits
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-terracotta" />
                        Galentine's celebrations
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-terracotta" />
                        Pet photos (fur babies welcome!)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-background rounded-xl p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-foreground">Date</h4>
                        <p className="text-muted-foreground">To be confirmed — stay tuned!</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-foreground">Location</h4>
                        <p className="text-muted-foreground">
                          Grapevine Cottage<br />
                          191 Hurontario St, Unit #2
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Camera className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-foreground">Book Your Spot</h4>
                        <a 
                          href="tel:+17054458001"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          Call (705) 445-8001
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-foreground font-medium">
                    ✨ Space is limited — reserve your session today!
                  </p>

                  <Button asChild size="lg" className="w-full">
                    <a href="tel:+17054458001" className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Reserve Your Spot
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            scriptTitle="Don't Miss Out"
            title="Stay Updated"
            subtitle="Follow us on social media to be the first to know about upcoming events, new arrivals, and special moments at the shop."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" variant="outline">
              <a
                href="https://www.facebook.com/p/Grapevine-Cottage-61577257586575/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Follow on Facebook
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://www.instagram.com/grapevinecottage/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Follow on Instagram
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* More Events Coming */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="font-script text-3xl text-primary block mb-2">
              Coming Soon
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              More Events on the Horizon
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're planning more special events throughout the year — from seasonal 
              celebrations to exclusive shopping nights. Check back often or follow 
              us on social media to stay in the loop!
            </p>
            <Button asChild size="lg">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;