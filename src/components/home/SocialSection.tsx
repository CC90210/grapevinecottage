import { motion } from "framer-motion";
import { Facebook, Instagram, Heart, MessageCircle, Send } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const socialImages = [
  { url: "/images/products/media__1770950126258.jpg", label: "Golden Sunflowers" },
  { url: "/images/products/media__1770952942741.jpg", label: "Butterfly Magic" },
  { url: "/images/products/media__1770950754480.jpg", label: "Vintage Time" },
  { url: "/images/products/media__1770951392658.jpg", label: "Hand-painted Stemware" },
  { url: "/images/products/media__1770950126162.jpg", label: "Garden Bunnies" },
  { url: "/images/products/media__1770952942707.jpg", label: "Kaleidoscope Cat" },
];

const SocialSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4">
        <SectionHeading
          scriptTitle="Join the Community"
          title="Follow Our New Chapter"
          subtitle="Same heart, new home. See what's arriving daily at the shop."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {socialImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group border border-white/50"
            >
              <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                <Heart className="w-6 h-6 fill-white" />
                <MessageCircle className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 font-light italic">
            "As we begin our fresh start in 2025, we've created new spaces to share the journey.
            Join our growing community of treasure seekers and be the first to see our weekly arrivals."
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <a
              href="https://www.facebook.com/p/Grapevine-Cottage-61577257586575/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 rounded-[2rem] bg-white flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-primary/20 group-hover:-translate-y-2">
                <Facebook className="w-10 h-10 transition-transform group-hover:scale-110" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/grapevinecottage/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 rounded-[2rem] bg-white flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-primary/20 group-hover:-translate-y-2">
                <Instagram className="w-10 h-10 transition-transform group-hover:scale-110" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Instagram</span>
            </a>
          </div>

          <div className="mt-16 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium">
            <Send className="w-4 h-4" />
            <span>@grapevinecottage</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
