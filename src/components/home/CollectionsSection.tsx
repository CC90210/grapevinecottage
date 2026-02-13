import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/section-heading";
import homeDecorImg from "@/assets/store-vintage-decor.jpg";
import clockImg from "/images/products/media__1770950126264.jpg";
import puzzleImg from "/images/products/media__1770952942710.jpg";
import glasswareImg from "/images/products/media__1770951392657.jpg";
import gardenImg from "@/assets/store-butterfly-markers.jpg";
import wellnessImg from "/images/products/media__1770951313247.jpg";

const collections = [
  {
    title: "Home Décor",
    description: "Unique accents that make your space feel like home",
    image: homeDecorImg,
    link: "/shop#decor",
  },
  {
    title: "Vintage Clocks",
    description: "Timeless statement pieces for every room",
    image: clockImg,
    link: "/shop#clocks",
  },
  {
    title: "Artisan Puzzles",
    description: "Intricate laser-cut wooden challenges",
    image: puzzleImg,
    link: "/shop#puzzles",
  },
  {
    title: "Glassware",
    description: "Celebration-ready glass with gold detailing",
    image: glasswareImg,
    link: "/shop#glassware",
  },
  {
    title: "Garden & Outdoor",
    description: "Peaceful melodies and garden magic",
    image: gardenImg,
    link: "/shop#garden",
  },
  {
    title: "Wellness",
    description: "Crystal suncatchers and serene find",
    image: wellnessImg,
    link: "/shop#wellness",
  },
];

const CollectionsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary" aria-labelledby="collections-heading">
      <div className="container mx-auto px-4">
        <SectionHeading
          scriptTitle="Browse Our"
          title="Collections at Grapevine Cottage"
          subtitle="Every corner holds a treasure. Every visit, something new to discover in Collingwood."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={collection.link}
                className="group block relative aspect-square overflow-hidden rounded-lg shadow-card"
              >
                <img
                  src={collection.image}
                  alt={`${collection.title} at Grapevine Cottage Collingwood`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="font-display text-xl md:text-2xl text-primary-foreground mb-1">
                    {collection.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm font-body italic">
                    {collection.description}
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-primary-foreground/0 group-hover:border-primary-foreground/30 rounded-lg transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;