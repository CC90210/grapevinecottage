import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Store, ShoppingBag } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

// Category fallback images
import homeDecorImg from "@/assets/owl-collection.jpg";
import jewelryImg from "@/assets/jewelry-display.jpg";
import gardenImg from "@/assets/store-butterfly-markers.jpg";
import wellnessImg from "@/assets/product-display-cabinet.jpg";
import fashionImg from "@/assets/category-fashion.jpg";
import giftsImg from "@/assets/store-friends-sign.jpg";
import accessoriesImg from "@/assets/store-couples-keychains.jpg";

import { useCart } from "@/context/CartContext";

const shopItems = [
  {
    id: "stained-glass-butterfly-puzzle",
    title: "Stained Glass Butterfly Wooden Puzzle",
    price: 35.00,
    image: "/images/products/media__1770952942741.jpg",
    description: "An intricate laser-cut wooden puzzle featuring a breathtaking stained-glass butterfly design. Each piece is uniquely shaped, making for a challenging and beautiful experience.",
    items: ["High-quality wooden pieces", "Stained-glass aesthetic", "Laser-cut precision", "Display-ready box"],
  },
  {
    id: "vibrant-cat-puzzle",
    title: "Vibrant Kaleidoscope Cat Puzzle",
    price: 35.00,
    image: "/images/products/media__1770952942707.jpg",
    description: "A burst of color in every piece. This wooden puzzle showcases a majestic cat in a kaleidoscope of patterns. A perfect gift for puzzle lovers and cat enthusiasts alike.",
    items: ["Premium wood construction", "Intense vibrant colors", "Unique piece shapes", "Whimsical artwork"],
  },
  {
    id: "vertical-family-sign-new",
    title: "In Our Home Family Values Sign",
    price: 45.00,
    image: "/images/products/media__1770952942710.jpg",
    description: "A large vertical wooden sign celebrating the values that make a house a home. This rustic piece adds warmth and character to your entryway or living space.",
    items: ["Rustic wood planks", "Bold typography", "Motivational home values", "Horizontal hanging wire"],
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
    id: "industrial-sage-clock",
    title: "Grand Cafe Market Clock",
    price: 85.00,
    image: "/images/products/media__1770950754480.jpg",
    description: "A monumental oversized clock with a weathered green finish and Roman numerals. This piece captures the essence of a European vintage marketplace.",
    items: ["Oversized statement piece", "Weathered sage finish", "Roman numeral display", "Classic vintage design"],
  },
  {
    id: "square-gear-clock",
    title: "Modern Mechanical Wall Clock",
    price: 65.00,
    image: "/images/products/media__1770950754402.jpg",
    description: "A sleek square frame encasing a complex network of moving gears. This white and silver design blends modern industrial style with mechanical wonder.",
    items: ["Moving gear mechanism", "Square white frame", "Industrial modern style", "Battery operated"],
  },
  {
    id: "pinup-oval-clock",
    title: "Vintage Original Oval Clock",
    price: 48.00,
    image: "/images/products/media__1770950742735.jpg",
    description: "A classic oval wall clock with a retro pin-up style graphic and bold numerals. This piece adds a touch of 1950s nostalgia to your decor.",
    items: ["Retro oval shape", "Nostalgic graphics", "Bold legible numbers", "Easy to hang"],
  },
  {
    id: "seated-buddha",
    title: "Serenity Buddha Statue",
    price: 42.00,
    image: "/images/products/media__1770950126261.jpg",
    description: "Bring peace and tranquility to your home with this beautiful seated Buddha. The cream and gold finish highlights the intricate details of this spiritual accent.",
    items: ["Cream & gold finish", "Detailed craftsmanship", "Perfect for meditation spaces", "Stable base"],
  },
  {
    id: "bunny-basket-ceramic",
    title: "Floral Bunny Garden Figurine",
    price: 35.00,
    image: "/images/products/media__1770950126162.jpg",
    description: "A whimsical ceramic bunny wearing a crown of flowers and holding a woven basket. Perfect for spring decor or as a unique planter alternative.",
    items: ["Hand-painted details", "Floral crown accent", "Functional basket bowl", "Indoor/Outdoor safe"],
  },
  {
    id: "wishing-threads-set",
    title: "Eternity Crystal Wishing Threads",
    price: 20.00,
    image: "/images/products/media__1770951313247.jpg",
    description: "Beautifully boxed crystal suncatchers featuring angels, fairies, and unicorns. These 'Wishing Threads' catch the light and bring a touch of magic to any window.",
    items: ["Genuine crystal pendant", "Silver-tone charms", "Angels, Fairies & Unicorns", "Gift boxed with sentiment"],
  },
  {
    id: "milestone-glassware",
    title: "Milestone Celebration Beer Glass",
    price: 24.00,
    image: "/images/products/media__1770951392657.jpg",
    description: "Toast to the big milestones with our '30 Looks Good On You' glassware. Sparkling details for a sparkling celebration.",
    items: ["Milestone age designs", "Gold glitter accents", "Elegant tall glassware", "Perfect birthday gift"],
  },
  {
    id: "lolita-designer-glass",
    title: "Lolita Hand-Painted Wine Glasses",
    price: 38.00,
    image: "/images/products/media__1770951392658.jpg",
    description: "Exquisite hand-painted wine and stemless glasses by Lolita. Featuring vibrant 'Queen Bee' and 'Dragonfly' designs, each glass is a unique work of art.",
    items: ["Artist hand-painted", "Unique 'Lolita' designs", "Stemless & traditional options", "Signature decorative gift box"],
  },
  {
    id: "vintage-tea-set",
    title: "English Rose Porcelain Tea Set",
    price: 125.00,
    image: "/images/products/media__1770693836108.jpg",
    description: "A delicate porcelain tea set with fine gold trim and hand-painted English Rose details. Perfect for hosting your own elegant tea parties.",
    items: ["Fine porcelain", "24k gold trim", "Teapot, cups & saucers", "Includes matching stirrers"],
  },
  {
    id: "crystal-cauldron",
    title: "Obsidian Meditation Cauldron",
    price: 55.00,
    image: "/images/products/media__1770693838955.jpg",
    description: "A solid obsidian bowl carved in the shape of a traditional cauldron. Use it for crystals, incense, or as a focal point for your spiritual practice.",
    items: ["Hand-carved obsidian", "Polished finish", "Spiritual protection", "Perfect altar piece"],
  },
  {
    id: "garden-lantern-set",
    title: "Moroccan Copper Wind Lanterns",
    price: 78.00,
    image: "/images/products/media__1770693841059.jpg",
    description: "A pair of hammered copper lanterns with intricate cut-outs that cast beautiful shadows when lit. Stunning for both indoor alcoves and garden patios.",
    items: ["Weathered copper finish", "Intricate pattern work", "Pair of two sizes", "Candle-ready design"],
  },
  {
    id: "artisan-silk-scarf",
    title: "Botanical Print Silk Scarf",
    price: 42.00,
    image: "/images/products/media__1770693843334.jpg",
    description: "Luxurious 100% silk scarf featuring hand-pressed botanical prints. A unique fashion accessory that brings the beauty of the garden to your wardrobe.",
    items: ["100% Mulberry silk", "Hand-pressed designs", "Ethically sourced", "Gift-ready packaging"],
  },
  {
    id: "vintage-mirror-frame",
    title: "Gilded Baroque Accent Mirror",
    price: 110.00,
    image: "/images/products/media__1770693846771.jpg",
    description: "A stunning baroque-style mirror with an ornate gilded frame. This statement piece adds depth and vintage grandeur to any hallway or bedroom.",
    items: ["Ornate resin frame", "Antique gold finish", "Heavy-duty wall mounts", "Distortion-free glass"],
  },
  {
    id: "handwoven-basket-set",
    title: "Nantucket Seagrass Baskets",
    price: 65.00,
    image: "/images/products/media__1770755617780.jpg",
    description: "A nest of three handwoven baskets made from sustainable seagrass. Durable, functional, and naturally beautiful for organizing your cottage home.",
    items: ["Sustainable seagrass", "Nest of 3 sizes", "Reinforced handles", "Natural home organization"],
  },
  {
    id: "ceramic-herb-pots",
    title: "Tuscany Glazed Herb Planters",
    price: 32.00,
    image: "/images/products/media__1770755717429.jpg",
    description: "A set of three glazed ceramic pots in muted earth tones. Perfect for growing fresh herbs on a sunny windowsill or kitchen counter.",
    items: ["Crackled glaze finish", "Drainage holes included", "Matching saucers", "Set of 3 colors"],
  },
  {
    id: "vintage-birdcage",
    title: "Victorian Wire Garden Birdcage",
    price: 88.00,
    image: "/images/products/media__1770755725991.jpg",
    description: "A decorative wire birdcage with an antique white finish. A whimsical accent for displaying plants, fairy lights, or vintage books.",
    items: ["Antique white wire", "Latch-door opening", "Hanging loop", "Decorative floor piece"],
  },
  {
    id: "driftwood-wall-art",
    title: "Great Lakes Driftwood Sculpture",
    price: 145.00,
    image: "/images/products/media__1770755734227.jpg",
    description: "A one-of-a-kind wall sculpture crafted from authentic Great Lakes driftwood. Each piece is unique, bringing the rugged beauty of the shore to your home.",
    items: ["Authentic driftwood", "Artist-signed", "Natural textures", "Easy wall placement"],
  },
  {
    id: "mercantile-scale",
    title: "Vintage General Store Scale",
    price: 95.00,
    image: "/images/products/media__1770875138142.jpg",
    description: "A faithful reproduction of a classic mercantile scale. This cast-iron piece with brass accents brings industrial history to your kitchen or study.",
    items: ["Cast iron body", "Brass weighing pan", "Decorative only", "Heavyweight quality"],
  },
  {
    id: "jewelry-collection",
    title: "Handcrafted Jewelry",
    price: 58.00,
    description: "Our jewelry collection is full of little treasures — Hazelwood necklaces, snowflake earrings that come gift-boxed with poems, and one-of-a-kind pieces you won't find anywhere else.",
    image: jewelryImg,
    items: ["Handcrafted earrings & necklaces", "Bracelets & rings", "Local artisan pieces", "Statement & everyday jewelry"],
  },
  {
    id: "garden-outdoor-decor",
    title: "Garden & Outdoor",
    price: 39.00,
    description: "Wind chimes that sing, sun catchers that sparkle, solar butterflies that surprise — if it brings joy to your garden, we probably have it.",
    image: gardenImg,
    items: ["Planters & garden decor", "Wind chimes & bird feeders", "Patio accents", "Solar decorations"],
  },
  {
    id: "wellness-spiritual",
    title: "Wellness & Spirituality",
    price: 48.00,
    description: "Himalayan salt lamps, crystals, candles, and things that help you find your calm. Because we all need a little peace.",
    image: wellnessImg,
    items: ["Crystals & essential oils", "Sage & meditation tools", "Journals & self-care", "Himalayan salt lamps"],
  },
  {
    id: "boutique-fashion",
    title: "Clothing & Fashion",
    price: 65.00,
    description: "Unique clothing pieces and seasonal fashion items that feel as good as they look. Style with personality.",
    image: fashionImg,
    items: ["Unique clothing pieces", "Seasonal fashion items", "New arrivals coming soon!", "Fair trade options"],
  },
  {
    id: "seasonal-treasures",
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
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group border border-border/50 bg-accent/5">
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