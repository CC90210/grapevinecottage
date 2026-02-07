import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

// Import all cottage finds images
import hotAirBalloonLantern from "@/assets/cottage-finds/hot-air-balloon-lantern.jpg";
import birchForestArt from "@/assets/cottage-finds/birch-forest-art.jpg";
import wishingThreadCrystals from "@/assets/cottage-finds/wishing-thread-crystals.jpg";
import umbrellaHooks from "@/assets/cottage-finds/umbrella-hooks.jpg";
import meowCatTshirt from "@/assets/cottage-finds/meow-cat-tshirt.jpg";
import mapleLeafDecor from "@/assets/cottage-finds/maple-leaf-decor.jpg";
import jewelryDisplay from "@/assets/cottage-finds/jewelry-display.jpg";
import turquoiseCabinetGifts from "@/assets/cottage-finds/turquoise-cabinet-gifts.jpg";

const cottageFinds = [
  { id: 1, image: hotAirBalloonLantern, alt: "Blue and purple gradient hot air balloon glass lantern" },
  { id: 2, image: birchForestArt, alt: "Textured birch forest canvas art" },
  { id: 3, image: wishingThreadCrystals, alt: "Eternity Crystal Wishing Thread display" },
  { id: 4, image: umbrellaHooks, alt: "Colorful umbrella wall hooks" },
  { id: 5, image: meowCatTshirt, alt: "Purple cat graphic t-shirt" },
  { id: 6, image: mapleLeafDecor, alt: "Red maple leaf metal wall art" },
  { id: 7, image: jewelryDisplay, alt: "Artisan jewelry and necklace display" },
  { id: 8, image: turquoiseCabinetGifts, alt: "Turquoise cabinet with curated gifts and soaps" },
];

const CottageFinds = () => {
  return (
    <Layout>
      <SEO
        title="Cottage Finds | Unique Treasures & Local Artisan Crafts"
        description="Discover our curated gallery of Cottage Finds. From handcrafted lanterns to local art and specialty jewelry, explore the unique items that make Grapevine Cottage special."
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
              Cottage Finds
            </h1>
            <p className="font-script text-2xl md:text-3xl text-accent mb-6">
              Where you find things you never knew you wanted
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Each piece in our shop has a story waiting to become part of yours.
              Browse our curated collection of unique treasures, handpicked with love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {cottageFinds.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground text-lg mb-4">
              Want to see more? New treasures arrive weekly!
            </p>
            <p className="font-script text-2xl text-primary">
              Visit us in-store to discover the full collection
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CottageFinds;
