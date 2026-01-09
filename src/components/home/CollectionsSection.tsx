import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/section-heading";
import homeDecorImg from "@/assets/category-home-decor.jpg";
import fashionImg from "@/assets/category-fashion.jpg";
import jewelryImg from "@/assets/category-jewelry.jpg";
import wellnessImg from "@/assets/category-wellness.jpg";
import gardenImg from "@/assets/category-garden.jpg";
import giftsImg from "@/assets/category-gifts.jpg";

const collections = [
  {
    title: "Home Décor",
    image: homeDecorImg,
    link: "/shop#home-decor",
  },
  {
    title: "Fashion & Accessories",
    image: fashionImg,
    link: "/shop#fashion",
  },
  {
    title: "Jewelry",
    image: jewelryImg,
    link: "/shop#jewelry",
  },
  {
    title: "Wellness & Crystals",
    image: wellnessImg,
    link: "/shop#wellness",
  },
  {
    title: "Garden Treasures",
    image: gardenImg,
    link: "/shop#garden",
  },
  {
    title: "Perfect Gifts",
    image: giftsImg,
    link: "/shop#gifts",
  },
];

const CollectionsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          scriptTitle="Browse Our"
          title="Featured Collections"
          subtitle="Discover treasures for every style and occasion"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="font-display text-2xl md:text-3xl text-primary-foreground">
                    {collection.title}
                  </h3>
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
