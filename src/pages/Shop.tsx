import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Store } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import homeDecorImg from "@/assets/owl-collection.jpg";
import fashionImg from "@/assets/category-fashion.jpg";
import jewelryImg from "@/assets/jewelry-display.jpg";
import wellnessImg from "@/assets/product-display-cabinet.jpg";
import gardenImg from "@/assets/store-butterfly-markers.jpg";
import giftsImg from "@/assets/store-friends-sign.jpg";
import accessoriesImg from "@/assets/store-couples-keychains.jpg";

import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";

const collections = [
  {
    id: "home-decor",
    title: "Home Décor",
    price: 45.00,
    description: "From metal wall art to vintage-style frames, these are the pieces that turn a house into your home. I'm always on the hunt for things that make you stop and say, 'I need that.'",
    image: homeDecorImg,
    items: ["Wall art & candles", "Mirrors & decorative pieces", "Vintage-inspired accents", "Modern home touches"],
  },
  {
    id: "jewelry",
    title: "Jewelry",
    price: 58.00,
    description: "Our jewelry collection is full of little treasures — Hazelwood necklaces, snowflake earrings that come gift-boxed with poems, and one-of-a-kind pieces you won't find anywhere else.",
    image: jewelryImg,
    items: ["Handcrafted earrings & necklaces", "Bracelets & rings", "Local artisan pieces", "Statement & everyday jewelry"],
  },
  {
    id: "accessories",
    title: "Accessories & Gifts",
    price: 32.00,
    description: "The perfect present for the person who has everything. Keychains, bags, wallets, scarves — small treasures that make big impressions.",
    image: accessoriesImg,
    items: ["Keychains", "Bags & wallets", "Scarves & accessories", "Hostess gifts & trinkets"],
  },
  {
    id: "garden",
    title: "Garden & Outdoor",
    price: 39.00,
    description: "Wind chimes that sing, sun catchers that sparkle, solar butterflies that surprise — if it brings joy to your garden, we probably have it.",
    image: gardenImg,
    items: ["Planters & garden decor", "Wind chimes & bird feeders", "Patio accents", "Solar decorations"],
  },
  {
    id: "wellness",
    title: "Wellness & Spirituality",
    price: 48.00,
    description: "Himalayan salt lamps, crystals, candles, and things that help you find your calm. Because we all need a little peace.",
    image: wellnessImg,
    items: ["Crystals & essential oils", "Sage & meditation tools", "Journals & self-care", "Himalayan salt lamps"],
  },
  {
    id: "fashion",
    title: "Clothing & Fashion",
    price: 65.00,
    description: "Unique clothing pieces and seasonal fashion items that feel as good as they look. Style with personality.",
    image: fashionImg,
    items: ["Unique clothing pieces", "Seasonal fashion items", "New arrivals coming soon!", "Fair trade options"],
  },
  {
    id: "seasonal",
    title: "Seasonal & Holiday",
    price: 28.00,
    description: "Rotating seasonal decor and holiday-specific items that make every celebration special. Limited edition pieces you won't want to miss.",
    image: giftsImg,
    items: ["Rotating seasonal decor", "Holiday-specific items", "Limited edition pieces", "Festive treasures"],
  },
];

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <Layout>
      <SEO
        title="Unique Shop | Home Decor, Jewelry & Handcrafted Gifts"
        description="Browse our curated collections of home decor, handcrafted jewelry, garden accessories, and unique gifts. Visit Grapevine Cottage in Collingwood to discover the unexpected."
      />
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-script text-3xl text-primary block mb-2">
              Browse Our
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              Discover the Unexpected
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every corner holds a treasure. Every visit, something new.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop Experience Banner */}
      <section className="py-8 bg-accent/30 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left"
          >
            <Store className="w-8 h-8 text-primary" />
            <div>
              <p className="text-foreground font-medium">
                🛍️ New: Shop Online for In-Store Pickup or Local Shipping!
              </p>
              <p className="text-muted-foreground text-sm">
                You can now add items to your digital bag and checkout securely. We'll handle the rest!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                id={collection.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-card relative group">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-4 right-4 animate-in fade-in slide-in-from-bottom-2">
                      <Button
                        onClick={() => addToCart({ id: collection.id, name: collection.title, price: collection.price, image: collection.image })}
                        className="shadow-xl"
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" /> Add to Bag — ${collection.price.toFixed(2)}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-3xl md:text-4xl text-foreground">
                      {collection.title}
                    </h2>
                    <span className="text-2xl font-body text-primary font-semibold">
                      ${collection.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 italic">
                    {collection.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-8">
                    {collection.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={() => addToCart({ id: collection.id, name: collection.title, price: collection.price, image: collection.image })}
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" /> Purchase {collection.title}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            scriptTitle="See It All"
            title="Visit Us In-Store"
            subtitle="Our full selection is available at our downtown Collingwood location. Come browse, discover, and find your next treasure!"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg">
              <a
                href="https://maps.google.com/?q=191+Hurontario+Street+Unit+2+Collingwood+Ontario+L9Y+2M1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+17054458001" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (705) 445-8001
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;