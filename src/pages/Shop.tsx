import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Store, Plus } from "lucide-react";
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

const shopItems = [
  {
    id: "industrial-clock",
    title: "Vintage Sage Industrial Clock",
    price: 75.00,
    image: "/images/products/media__1770950126162.jpg",
    description: "Striking industrial-style wall clock with exposed moving gears. The muted sage green frame adds a touch of cottage charm to this mechanical statement piece.",
    items: ["Exposed moving gears", "Sage green metal frame", "Vintage-chic aesthetic", "Battery operated"],
  },
  {
    id: "sunflower-clock",
    title: "Gilded Sunflower Wall Clock",
    price: 50.00,
    image: "/images/products/media__1770950126258.jpg",
    description: "A radiant burst of sunshine for your walls. This large gold-finished petal clock brings natural elegance and a touch of glam to any room.",
    items: ["Gold/bronze finish", "Large petal design", "Quiet movement", "Easy wall mount"],
  },
  {
    id: "buddha-statue",
    title: "Serenity Buddha Statue",
    price: 42.00,
    image: "/images/products/media__1770950126261.jpg",
    description: "Bring peace and tranquility to your home with this beautiful seated Buddha. The cream and gold finish highlights the intricate details of this spiritual accent.",
    items: ["Cream & gold finish", "Detailed craftsmanship", "Perfect for meditation spaces", "Stable base"],
  },
  {
    id: "believe-sign-pink",
    title: "Vintage 'Believe' Sign",
    price: 15.00,
    image: "/images/products/media__1770950126264.jpg",
    description: "A sweet daily reminder in a distressed pink block lettering style. Perfectly at home in a nursery, bedroom, or any cozy nook.",
    items: ["Distressed wooden finish", "Pink glitter accents", "Free-standing display", "Shabby-chic style"],
  },
  {
    id: "grand-cafe-clock",
    title: "Grand Cafe Market Clock",
    price: 85.00,
    image: "/images/products/media__1770950754480.jpg",
    description: "A monumental oversized clock with a weathered green finish and Roman numerals. This piece captures the essence of a European vintage marketplace.",
    items: ["Oversized statement piece", "Weathered sage finish", "Roman numeral display", "Classic vintage design"],
  },
  {
    id: "home-family-sign",
    title: "In Our Home Family Sign",
    price: 45.00,
    image: "/images/products/media__1770950317651.jpg",
    description: "A large vertical wooden sign celebrating the values that make a house a home. This rustic piece adds warmth and character to your entryway or living space.",
    items: ["Rustic wood planks", "Bold typography", "Motivational home values", "Horizontal hanging wire"],
  },
  {
    id: "bunny-basket",
    title: "Floral Bunny Garden Figurine",
    price: 35.00,
    image: "/images/products/media__1770950317645.jpg",
    description: "A whimsical ceramic bunny wearing a crown of flowers and holding a woven basket. Perfect for spring decor or as a unique planter alternative.",
    items: ["Hand-painted details", "Floral crown accent", "Functional basket bowl", "Indoor/Outdoor safe"],
  },
  {
    id: "vintage-oval-clock",
    title: "Vintage Original Oval Clock",
    price: 48.00,
    image: "/images/products/media__1770950742735.jpg",
    description: "A classic oval wall clock with a retro pin-up style graphic and bold numerals. This piece adds a touch of 1950s nostalgia to your decor.",
    items: ["Retro oval shape", "Nostalgic graphics", "Bold legible numbers", "Easy to hang"],
  },
  {
    id: "white-gear-clock",
    title: "Modern Mechanical Wall Clock",
    price: 65.00,
    image: "/images/products/media__1770950754402.jpg",
    description: "A sleek square frame encasing a complex network of moving gears. This white and silver design blends modern industrial style with mechanical wonder.",
    items: ["Moving gear mechanism", "Square white frame", "Industrial modern style", "Battery operated"],
  },
  {
    id: "home-decor",
    title: "Home Décor Collections",
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

      {/* Shop Items Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {shopItems.map((item, index) => (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group border border-border/50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <Button
                        onClick={() => addToCart({ id: item.id, name: item.title, price: item.price, image: item.image })}
                        className="shadow-2xl bg-white text-primary hover:bg-primary hover:text-white border-0 h-12 px-6 rounded-full font-bold"
                      >
                        <ShoppingBag className="w-5 h-5 mr-2" /> Add to Bag — ${item.price.toFixed(2)}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-4xl md:text-5xl text-foreground">
                      {item.title}
                    </h2>
                    <span className="text-3xl font-body text-primary font-bold">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xl text-muted-foreground mb-8 italic leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-y-4 mb-12">
                    {item.items.map((subItem) => (
                      <li
                        key={subItem}
                        className="flex items-center gap-3 text-foreground/90"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary/40 flex-shrink-0" />
                        <span className="text-base font-medium">{subItem}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <Button
                      size="lg"
                      className="flex-1 h-14 text-lg rounded-full"
                      onClick={() => addToCart({ id: item.id, name: item.title, price: item.price, image: item.image })}
                    >
                      <ShoppingBag className="w-6 h-6 mr-2" /> Purchase {item.title}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 h-14 text-lg rounded-full border-2"
                      asChild
                    >
                      <Link to="/contact">Ask About This Item</Link>
                    </Button>
                  </div>
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