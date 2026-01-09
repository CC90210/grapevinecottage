import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "10 AM – 4 PM" },
  { day: "Wednesday", hours: "10 AM – 4 PM" },
  { day: "Thursday", hours: "10 AM – 5:30 PM" },
  { day: "Friday", hours: "10 AM – 4 PM" },
  { day: "Saturday", hours: "10 AM – 4 PM" },
  { day: "Sunday", hours: "Closed" },
];

const VisitSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          scriptTitle="Come See Us"
          title="Visit Our Shop"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Store Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary rounded-lg p-8 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground">Store Hours</h3>
            </div>
            <ul className="space-y-3">
              {hours.map((item) => (
                <li
                  key={item.day}
                  className={`flex justify-between text-sm ${
                    item.hours === "Closed"
                      ? "text-muted-foreground"
                      : "text-foreground"
                  }`}
                >
                  <span className="font-medium">{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-secondary rounded-lg p-8 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground">Find Us</h3>
            </div>
            <div className="space-y-4">
              <p className="text-foreground">
                191 Hurontario Street, Unit 2<br />
                Collingwood, Ontario<br />
                L9Y 2M1
              </p>
              <p className="text-muted-foreground text-sm">
                Located in the heart of Downtown Collingwood
              </p>
              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://maps.google.com/?q=191+Hurontario+Street+Unit+2+Collingwood+Ontario+L9Y+2M1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-secondary rounded-lg p-8 shadow-soft md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground">Call Us</h3>
            </div>
            <div className="space-y-4">
              <a
                href="tel:+17054458001"
                className="text-2xl font-display text-primary hover:text-primary/80 transition-colors block"
              >
                (705) 445-8001
              </a>
              <p className="text-muted-foreground text-sm">
                Give us a call for product inquiries, gift ideas, or just to say hello!
              </p>
              <Button asChild className="w-full">
                <a href="tel:+17054458001">
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
