import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Phone, Store, ShoppingBag, Filter, Sparkles, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Treasures" },
  { id: "clocks", label: "Clocks" },
  { id: "decor", label: "Home Decor" },
  { id: "wellness", label: "Wellness" },
  { id: "garden", label: "Garden" },
  { id: "glassware", label: "Glassware" },
  { id: "puzzles", label: "Puzzles" },
  { id: "signs", label: "Signs" },
];

const Shop = () => {
  const { addToCart } = useCart();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && categories.some(cat => cat.id === hash)) {
      setActiveCategory(hash);
    }
  }, [location.hash]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <Layout>
      <SEO
        title="Unique Shop | Curated Home Decor & Handcrafted Gifts"
        description="Explore the full collection at Grapevine Cottage. From vintage clocks to artisan glassware and unique wooden puzzles. Browse our curated selection today."
      />

      {/* Hero Section with Glassmorphism */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)] -z-10" />

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span>Curated Selection since 2001</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 leading-tight">
              A World of <span className="text-primary italic">Wonders</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
              "Every corner holds a treasure. Every visit, something new."
              Explore our boutique collection of hand-picked delights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Category Filter */}
      <section className="sticky top-[72px] z-40 bg-background/80 backdrop-blur-xl border-y border-border/50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8">
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Filter By:</span>
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 md:pb-0 flex-1 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border",
                    activeCategory === cat.id
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                      : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Bar */}
      <div className="bg-primary/5 py-4 border-b border-primary/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-primary text-sm font-medium">
            <Store className="w-4 h-4" />
            <motion.p
              animate={{ x: [20, 0] }}
              transition={{ duration: 0.5 }}
            >
              Shop Online for In-Store Pickup or Local Shipping!
            </motion.p>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </div>
        </div>
      </div>

      {/* Optimized Product List */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-40"
            >
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item, index) => (
                  <ProductItem
                    key={item.id}
                    item={item}
                    index={index}
                    addToCart={addToCart}
                  />
                ))
              ) : (
                <div className="py-20 text-center">
                  <p className="text-2xl text-muted-foreground italic">No treasures found in this category yet. Check back soon!</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Optimized Visit CTA */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(var(--primary-rgb),0.03)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <SectionHeading
            scriptTitle="Plan Your Visit"
            title="Experience the Magic"
            subtitle="The website is just the beginning. Our full collection of thousands of items awaits you in downtown Collingwood."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          >
            <Button asChild size="lg" className="h-14 px-10 rounded-full text-lg shadow-xl hover:shadow-primary/20 transition-all">
              <a
                href="https://maps.google.com/?q=191+Hurontario+Street+Unit+2+Collingwood+Ontario+L9Y+2M1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Find the Cottage
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-full text-lg border-2">
              <a href="tel:+17054458001">
                <Phone className="w-5 h-5 mr-2" />
                (705) 445-8001
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

interface ProductItemProps {
  item: Product;
  index: number;
  addToCart: (item: any) => void;
}

const ProductItem = ({ item, index, addToCart }: ProductItemProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.45, 0.32, 0.9] }}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
        index % 2 === 1 ? "lg:flex-row-reverse" : ""
      )}
    >
      <div className={cn("relative group", index % 2 === 1 ? "lg:order-2" : "")}>
        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <Button
              onClick={() => addToCart({ id: item.id, name: item.title, price: item.price, image: item.image })}
              className="h-14 px-8 rounded-full bg-white text-primary hover:bg-primary hover:text-white border-0 font-bold shadow-2xl transition-all active:scale-95"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Quick Add — ${item.price.toFixed(2)}
            </Button>
          </div>
        </div>

        {/* Decorative elements for premium feel */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full -z-10 blur-2xl" />
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/30 rounded-full -z-10 blur-2xl" />
      </div>

      <div className={cn("space-y-8", index % 2 === 1 ? "lg:order-1" : "")}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/10">
              {item.category}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1]">
              {item.title}
            </h2>
            <div className="text-3xl lg:text-4xl font-body text-primary font-bold">
              ${item.price.toFixed(2)}
            </div>
          </div>
        </div>

        <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary/20 pl-6 py-2">
          {item.description}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 py-4">
          {item.items.map((subItem) => (
            <motion.li
              key={subItem}
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-foreground/80 group"
            >
              <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
              <span className="text-base font-medium">{subItem}</span>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            size="lg"
            className="flex-1 h-14 text-lg rounded-full group shadow-lg hover:shadow-primary/20 transition-all"
            onClick={() => addToCart({ id: item.id, name: item.title, price: item.price, image: item.image })}
          >
            <ShoppingBag className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Add to Bag
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex-1 h-14 text-lg rounded-full border-2 hover:bg-secondary/20"
            asChild
          >
            <Link to="/contact">
              Inquire About Item
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;