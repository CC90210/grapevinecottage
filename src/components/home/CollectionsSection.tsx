import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/section-heading";
import homeDecorImg from "@/assets/store-vintage-decor.jpg";
import fashionImg from "@/assets/category-fashion.jpg";
import jewelryImg from "@/assets/category-jewelry.jpg";
import wellnessImg from "@/assets/category-wellness.jpg";
import gardenImg from "@/assets/store-butterfly-markers.jpg";
import giftsImg from "@/assets/store-friends-sign.jpg";
import accessoriesImg from "@/assets/store-couples-keychains.jpg";

const collections = [
  {
    title: "Home Décor",
    description: "Things that make your space feel like you",
    image: homeDecorImg,
    link: "/shop#home-decor",
  },
  {
    title: "Jewelry",
    description: "Little treasures that tell stories",
    image: jewelryImg,
    link: "/shop#jewelry",
  },
  {
    title: "Accessories & Gifts",
    description: "Keychains, bags & perfect presents",
    image: accessoriesImg,
    link: "/shop#accessories",
  },
  {
    title: "Garden & Outdoor",
    description: "Magic for your outdoor spaces",
    image: gardenImg,
    link: "/shop#garden",
  },
  {
    title: "Wellness & Spirituality",
    description: "Peace for your soul",
    image: wellnessImg,
    link: "/shop#wellness",
  },
  {
    title: "Clothing & Fashion",
    description: "Style that feels as good as it looks",
    image: fashionImg,
    link: "/shop#fashion",
  },
  {
    title: "Seasonal & Holiday",
    description: "The perfect 'just because'",
    image: giftsImg,
    link: "/shop#seasonal",
  },
];

const CollectionsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          scriptTitle="Browse Our"
          title="Collections"
          subtitle="Every corner holds a treasure. Every visit, something new."
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
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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