import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  { id: "find-1", name: "Glass Hot Air Balloon Lantern", price: 48.00, image: hotAirBalloonLantern, alt: "Blue and purple gradient hot air balloon glass lantern" },
  { id: "find-2", name: "Birch Forest Canvas Art", price: 85.00, image: birchForestArt, alt: "Textured birch forest canvas art" },
  { id: "find-3", name: "Eternity Wishing Thread", price: 24.00, image: wishingThreadCrystals, alt: "Eternity Crystal Wishing Thread display" },
  { id: "find-4", name: "Umbrella Wall Hooks", price: 32.00, image: umbrellaHooks, alt: "Colorful umbrella wall hooks" },
  { id: "find-5", name: "Meow Graphic Tee", price: 38.00, image: meowCatTshirt, alt: "Purple cat graphic t-shirt" },
  { id: "find-6", name: "Maple Leaf Metal Art", price: 65.00, image: mapleLeafDecor, alt: "Red maple leaf metal wall art" },
  { id: "find-7", name: "Artisan Jewelry Set", price: 42.00, image: jewelryDisplay, alt: "Artisan jewelry and necklace display" },
  { id: "find-8", name: "Handcrafted Gift Set", price: 55.00, image: turquoiseCabinetGifts, alt: "Turquoise cabinet with curated gifts and soaps" },
];

const CottageFinds = () => {
  const { addToCart } = useCart();
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

      {/* Featured Finds Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cottageFinds.map((find, index) => (
              <motion.div
                key={find.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-secondary relative mb-4 shadow-sm border border-border">
                  <img
                    src={find.image}
                    alt={find.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      onClick={() => addToCart({ id: find.id, name: find.name, price: find.price, image: find.image })}
                      className="rounded-full shadow-lg"
                    >
                      Add to Bag
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                      {find.name}
                    </h3>
                  </div>
                  <p className="text-primary font-body font-semibold text-lg mb-3">
                    ${find.price.toFixed(2)}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-auto w-fit px-0 text-primary hover:text-primary/80 hover:bg-transparent"
                    onClick={() => addToCart({ id: find.id, name: find.name, price: find.price, image: find.image })}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" /> Add to Bag
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

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
