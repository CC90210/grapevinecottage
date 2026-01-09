import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday", hours: "Closed", closed: true },
  { day: "Tuesday", hours: "10:00 AM – 4:00 PM", closed: false },
  { day: "Wednesday", hours: "10:00 AM – 4:00 PM", closed: false },
  { day: "Thursday", hours: "10:00 AM – 5:30 PM", closed: false },
  { day: "Friday", hours: "10:00 AM – 4:00 PM", closed: false },
  { day: "Saturday", hours: "10:00 AM – 4:00 PM", closed: false },
  { day: "Sunday", hours: "Closed", closed: true },
];

const Visit = () => {
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
              Come See Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              Visit Our Shop
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of downtown Collingwood
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Info Cards */}
            <div className="space-y-8">
              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-secondary rounded-lg p-8 shadow-soft"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl text-foreground">Our Location</h2>
                </div>
                <div className="space-y-4 pl-[70px]">
                  <p className="text-lg text-foreground">
                    191 Hurontario Street, Unit 2<br />
                    Collingwood, Ontario<br />
                    L9Y 2M1
                  </p>
                  <p className="text-muted-foreground">
                    In the heart of Downtown Collingwood, just steps from local restaurants and shops.
                  </p>
                  <Button asChild className="mt-4">
                    <a
                      href="https://maps.google.com/?q=191+Hurontario+Street+Unit+2+Collingwood+Ontario+L9Y+2M1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-secondary rounded-lg p-8 shadow-soft"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl text-foreground">Call Us</h2>
                </div>
                <div className="pl-[70px]">
                  <a
                    href="tel:+17054458001"
                    className="text-3xl font-display text-primary hover:text-primary/80 transition-colors"
                  >
                    (705) 445-8001
                  </a>
                  <p className="text-muted-foreground mt-3">
                    Give us a call for product inquiries, gift ideas, or to check if we have something special in stock!
                  </p>
                </div>
              </motion.div>

              {/* Hours Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-secondary rounded-lg p-8 shadow-soft"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl text-foreground">Store Hours</h2>
                </div>
                <ul className="space-y-3 pl-[70px]">
                  {hours.map((item) => (
                    <li
                      key={item.day}
                      className={`flex justify-between ${
                        item.closed ? "text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      <span className="font-medium">{item.day}</span>
                      <span>{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full min-h-[500px] rounded-lg overflow-hidden shadow-card"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.6389367845!2d-80.2183!3d44.5004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882a4eaed7555555%3A0x1234567890abcdef!2s191%20Hurontario%20St%20Unit%202%2C%20Collingwood%2C%20ON%20L9Y%202M1%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grapevine Cottage Location"
                className="min-h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Visit;
