import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Heart, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";

// Image imports
import hotAirBalloonLantern from "@/assets/cottage-finds/hot-air-balloon-lantern.jpg";
import birchForestArt from "@/assets/cottage-finds/birch-forest-art.jpg";
import wishingThreadCrystals from "@/assets/cottage-finds/wishing-thread-crystals.jpg";
import umbrellaHooks from "@/assets/cottage-finds/umbrella-hooks.jpg";
import meowCatTshirt from "@/assets/cottage-finds/meow-cat-tshirt.jpg";
import mapleLeafDecor from "@/assets/cottage-finds/maple-leaf-decor.jpg";
import jewelryDisplay from "@/assets/cottage-finds/jewelry-display.jpg";
import turquoiseCabinetGifts from "@/assets/cottage-finds/turquoise-cabinet-gifts.jpg";

const cottageFinds = [
  {
    id: "find-1",
    name: "Glass Hot Air Balloon Lantern",
    price: 48.00,
    image: hotAirBalloonLantern,
    category: "Decor",
    description: "Whimsical hand-blown glass lanterns that catch the morning light."
  },
  {
    id: "find-2",
    name: "Birch Forest Canvas Art",
    price: 85.00,
    image: birchForestArt,
    category: "Art",
    description: "Textured mixed-media canvas capturing the peace of our local forests."
  },
  {
    id: "find-3",
    name: "Eternity Wishing Thread",
    price: 24.00,
    image: wishingThreadCrystals,
    category: "Spiritual",
    description: "Crystal suncatchers that fill your room with rainbows."
  },
  {
    id: "find-4",
    name: "Umbrella Wall Hooks",
    price: 32.00,
    image: umbrellaHooks,
    category: "Home",
    description: "Cheerful organization for your entryway or cottage mudroom."
  },
  {
    id: "find-5",
    name: "Meow Graphic Tee",
    price: 38.00,
    image: meowCatTshirt,
    category: "Apparel",
    description: "Soft cotton comfort with a touch of feline personality."
  },
  {
    id: "find-6",
    name: "Maple Leaf Metal Art",
    price: 65.00,
    image: mapleLeafDecor,
    category: "Art",
    description: "Locally inspired metalwork with a brilliant crimson finish."
  },
  {
    id: "find-7",
    name: "Artisan Jewelry Set",
    price: 42.00,
    image: jewelryDisplay,
    category: "Jewelry",
    description: "One-of-a-kind necklaces and earrings from local craftspeople."
  },
  {
    id: "find-8",
    name: "Handcrafted Gift Set",
    price: 55.00,
    image: turquoiseCabinetGifts,
    category: "Curated",
    description: "A thoughtful selection of artisanal soaps and cottage essentials."
  },
];

const CottageFinds = () => {
  const { addToCart } = useCart();

  return (
    <Layout>
      <SEO
        title="Cottage Finds Gallery | Unique Treasures in Collingwood"
        description="Discover our rotating gallery of curated cottage finds. Hand-picked treasures from local artisans and global discoveries."
      />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-script text-3xl text-primary block mb-2">Curated With Love</span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              The Gallery of <span className="text-primary italic">Finds</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic font-light">
              "A collection that changes like the seasons, always holding a new discovery."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {cottageFinds.map((find, index) => (
              <motion.div
                key={find.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500 mb-8 border border-border/40">
                  <img
                    src={find.image}
                    alt={find.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-4 right-4 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-primary flex items-center justify-center hover:bg-primary hover:text-white shadow-lg transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-[80%]">
                    <Button
                      onClick={() => addToCart({ id: find.id, name: find.name, price: find.price, image: find.image })}
                      className="w-full h-12 rounded-full shadow-2xl bg-white text-primary hover:bg-primary hover:text-white border-0 font-bold"
                    >
                      Quick Bag — ${find.price.toFixed(2)}
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
                    {find.category}
                  </span>
                  <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                    {find.name}
                  </h3>
                  <p className="text-sm text-muted-foreground italic leading-relaxed px-4">
                    {find.description}
                  </p>
                  <Button
                    variant="link"
                    className="text-primary font-bold h-auto p-0 hover:no-underline group/link"
                    onClick={() => addToCart({ id: find.id, name: find.name, price: find.price, image: find.image })}
                  >
                    Experience This Treasure
                    <ExternalLink className="w-3 h-3 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-12 rounded-[3rem] bg-accent/10 border border-accent/20 text-center relative overflow-hidden"
          >
            <Sparkles className="absolute top-10 left-10 w-12 h-12 text-accent/20 animate-pulse" />
            <Sparkles className="absolute bottom-10 right-10 w-8 h-8 text-accent/20 animate-pulse delay-700" />

            <h2 className="font-script text-4xl text-primary mb-6">Discovery Awaits</h2>
            <p className="text-2xl font-display text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Our online gallery is just a glimpse. New treasures arrive weekly in-store that never even make it to the website.
            </p>
            <Button asChild size="lg" className="h-14 px-10 rounded-full text-lg">
              <a href="https://maps.google.com/?q=191+Hurontario+Street+Unit+2+Collingwood+Ontario+L9Y+2M1" target="_blank" rel="noreferrer">
                Plan a Treasure Hunt
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CottageFinds;
