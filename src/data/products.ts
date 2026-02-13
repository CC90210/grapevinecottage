export interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    description: string;
    items: string[];
    category: "clocks" | "signs" | "puzzles" | "glassware" | "decor" | "jewelry" | "garden" | "wellness" | "fashion" | "seasonal";
}

export const products: Product[] = [
    {
        id: "stained-glass-butterfly-puzzle",
        title: "Stained Glass Butterfly Wooden Puzzle",
        price: 35.00,
        image: "/images/products/media__1770952942741.jpg",
        description: "An intricate laser-cut wooden puzzle featuring a breathtaking stained-glass butterfly design. Each piece is uniquely shaped, making for a challenging and beautiful experience.",
        items: ["High-quality wooden pieces", "Stained-glass aesthetic", "Laser-cut precision", "Display-ready box"],
        category: "puzzles"
    },
    {
        id: "vibrant-cat-puzzle",
        title: "Vibrant Kaleidoscope Cat Puzzle",
        price: 35.00,
        image: "/images/products/media__1770952942707.jpg",
        description: "A burst of color in every piece. This wooden puzzle showcases a majestic cat in a kaleidoscope of patterns. A perfect gift for puzzle lovers and cat enthusiasts alike.",
        items: ["Premium wood construction", "Intense vibrant colors", "Unique piece shapes", "Whimsical artwork"],
        category: "puzzles"
    },
    {
        id: "vertical-family-sign-new",
        title: "In Our Home Family Values Sign",
        price: 45.00,
        image: "/images/products/media__1770952942710.jpg",
        description: "A large vertical wooden sign celebrating the values that make a house a home. This rustic piece adds warmth and character to your entryway or living space.",
        items: ["Rustic wood planks", "Bold typography", "Motivational home values", "Horizontal hanging wire"],
        category: "signs"
    },
    {
        id: "sunflower-clock",
        title: "Gilded Sunflower Wall Clock",
        price: 50.00,
        image: "/images/products/media__1770950126258.jpg",
        description: "A radiant burst of sunshine for your walls. This large gold-finished petal clock brings natural elegance and a touch of glam to any room.",
        items: ["Gold/bronze finish", "Large petal design", "Quiet movement", "Easy wall mount"],
        category: "clocks"
    },
    {
        id: "industrial-sage-clock",
        title: "Grand Cafe Market Clock",
        price: 85.00,
        image: "/images/products/media__1770950754480.jpg",
        description: "A monumental oversized clock with a weathered green finish and Roman numerals. This piece captures the essence of a European vintage marketplace.",
        items: ["Oversized statement piece", "Weathered sage finish", "Roman numeral display", "Classic vintage design"],
        category: "clocks"
    },
    {
        id: "square-gear-clock",
        title: "Modern Mechanical Wall Clock",
        price: 65.00,
        image: "/images/products/media__1770950754402.jpg",
        description: "A sleek square frame encasing a complex network of moving gears. This white and silver design blends modern industrial style with mechanical wonder.",
        items: ["Moving gear mechanism", "Square white frame", "Industrial modern style", "Battery operated"],
        category: "clocks"
    },
    {
        id: "pinup-oval-clock",
        title: "Vintage Original Oval Clock",
        price: 48.00,
        image: "/images/products/media__1770950742735.jpg",
        description: "A classic oval wall clock with a retro pin-up style graphic and bold numerals. This piece adds a touch of 1950s nostalgia to your decor.",
        items: ["Retro oval shape", "Nostalgic graphics", "Bold legible numbers", "Easy to hang"],
        category: "clocks"
    },
    {
        id: "seated-buddha",
        title: "Serenity Buddha Statue",
        price: 42.00,
        image: "/images/products/media__1770950126261.jpg",
        description: "Bring peace and tranquility to your home with this beautiful seated Buddha. The cream and gold finish highlights the intricate details of this spiritual accent.",
        items: ["Cream & gold finish", "Detailed craftsmanship", "Perfect for meditation spaces", "Stable base"],
        category: "decor"
    },
    {
        id: "bunny-basket-ceramic",
        title: "Floral Bunny Garden Figurine",
        price: 35.00,
        image: "/images/products/media__1770950126162.jpg",
        description: "A whimsical ceramic bunny wearing a crown of flowers and holding a woven basket. Perfect for spring decor or as a unique planter alternative.",
        items: ["Hand-painted details", "Floral crown accent", "Functional basket bowl", "Indoor/Outdoor safe"],
        category: "garden"
    },
    {
        id: "wishing-threads-set",
        title: "Eternity Crystal Wishing Threads",
        price: 20.00,
        image: "/images/products/media__1770951313247.jpg",
        description: "Beautifully boxed crystal suncatchers featuring angels, fairies, and unicorns. These 'Wishing Threads' catch the light and bring a touch of magic to any window.",
        items: ["Genuine crystal pendant", "Silver-tone charms", "Angels, Fairies & Unicorns", "Gift boxed with sentiment"],
        category: "wellness"
    },
    {
        id: "milestone-glassware",
        title: "Milestone Celebration Beer Glass",
        price: 24.00,
        image: "/images/products/media__1770951392657.jpg",
        description: "Toast to the big milestones with our '30 Looks Good On You' glassware. Sparkling details for a sparkling celebration.",
        items: ["Milestone age designs", "Gold glitter accents", "Elegant tall glassware", "Perfect birthday gift"],
        category: "glassware"
    },
    {
        id: "lolita-designer-glass",
        title: "Lolita Hand-Painted Wine Glasses",
        price: 38.00,
        image: "/images/products/media__1770951392658.jpg",
        description: "Exquisite hand-painted wine and stemless glasses by Lolita. Featuring vibrant 'Queen Bee' and 'Dragonfly' designs, each glass is a unique work of art.",
        items: ["Artist hand-painted", "Unique 'Lolita' designs", "Stemless & traditional options", "Signature decorative gift box"],
        category: "glassware"
    },
    {
        id: "vintage-tea-set",
        title: "English Rose Porcelain Tea Set",
        price: 125.00,
        image: "/images/products/media__1770693836108.jpg",
        description: "A delicate porcelain tea set with fine gold trim and hand-painted English Rose details. Perfect for hosting your own elegant tea parties.",
        items: ["Fine porcelain", "24k gold trim", "Teapot, cups & saucers", "Includes matching stirrers"],
        category: "decor"
    },
    {
        id: "crystal-cauldron",
        title: "Obsidian Meditation Cauldron",
        price: 55.00,
        image: "/images/products/media__1770693838955.jpg",
        description: "A solid obsidian bowl carved in the shape of a traditional cauldron. Use it for crystals, incense, or as a focal point for your spiritual practice.",
        items: ["Hand-carved obsidian", "Polished finish", "Spiritual protection", "Perfect altar piece"],
        category: "wellness"
    },
    {
        id: "garden-lantern-set",
        title: "Moroccan Copper Wind Lanterns",
        price: 78.00,
        image: "/images/products/media__1770693841059.jpg",
        description: "A pair of hammered copper lanterns with intricate cut-outs that cast beautiful shadows when lit. Stunning for both indoor alcoves and garden patios.",
        items: ["Weathered copper finish", "Intricate pattern work", "Pair of two sizes", "Candle-ready design"],
        category: "garden"
    },
    {
        id: "artisan-silk-scarf",
        title: "Botanical Print Silk Scarf",
        price: 42.00,
        image: "/images/products/media__1770693843334.jpg",
        description: "Luxurious 100% silk scarf featuring hand-pressed botanical prints. A unique fashion accessory that brings the beauty of the garden to your wardrobe.",
        items: ["100% Mulberry silk", "Hand-pressed designs", "Ethically sourced", "Gift-ready packaging"],
        category: "fashion"
    },
    {
        id: "vintage-mirror-frame",
        title: "Gilded Baroque Accent Mirror",
        price: 110.00,
        image: "/images/products/media__1770693846771.jpg",
        description: "A stunning baroque-style mirror with an ornate gilded frame. This statement piece adds depth and vintage grandeur to any hallway or bedroom.",
        items: ["Ornate resin frame", "Antique gold finish", "Heavy-duty wall mounts", "Distortion-free glass"],
        category: "decor"
    },
    {
        id: "handwoven-basket-set",
        title: "Nantucket Seagrass Baskets",
        price: 65.00,
        image: "/images/products/media__1770755617780.jpg",
        description: "A nest of three handwoven baskets made from sustainable seagrass. Durable, functional, and naturally beautiful for organizing your cottage home.",
        items: ["Sustainable seagrass", "Nest of 3 sizes", "Reinforced handles", "Natural home organization"],
        category: "decor"
    },
    {
        id: "ceramic-herb-pots",
        title: "Tuscany Glazed Herb Planters",
        price: 32.00,
        image: "/images/products/media__1770755717429.jpg",
        description: "A set of three glazed ceramic pots in muted earth tones. Perfect for growing fresh herbs on a sunny windowsill or kitchen counter.",
        items: ["Crackled glaze finish", "Drainage holes included", "Matching saucers", "Set of 3 colors"],
        category: "garden"
    },
    {
        id: "vintage-birdcage",
        title: "Victorian Wire Garden Birdcage",
        price: 88.00,
        image: "/images/products/media__1770755725991.jpg",
        description: "A decorative wire birdcage with an antique white finish. A whimsical accent for displaying plants, fairy lights, or vintage books.",
        items: ["Antique white wire", "Latch-door opening", "Hanging loop", "Decorative floor piece"],
        category: "garden"
    },
    {
        id: "driftwood-wall-art",
        title: "Great Lakes Driftwood Sculpture",
        price: 145.00,
        image: "/images/products/media__1770755734227.jpg",
        description: "A one-of-a-kind wall sculpture crafted from authentic Great Lakes driftwood. Each piece is unique, bringing the rugged beauty of the shore to your home.",
        items: ["Authentic driftwood", "Artist-signed", "Natural textures", "Easy wall placement"],
        category: "decor"
    },
    {
        id: "mercantile-scale",
        title: "Vintage General Store Scale",
        price: 95.00,
        image: "/images/products/media__1770875138142.jpg",
        description: "A faithful reproduction of a classic mercantile scale. This cast-iron piece with brass accents brings industrial history to your kitchen or study.",
        items: ["Cast iron body", "Brass weighing pan", "Decorative only", "Heavyweight quality"],
        category: "decor"
    },
    {
        id: "jewelry-collection",
        title: "Handcrafted Jewelry",
        price: 58.00,
        image: "/assets/jewelry-display.jpg",
        description: "Our jewelry collection is full of little treasures — Hazelwood necklaces, snowflake earrings that come gift-boxed with poems, and one-of-a-kind pieces you won't find anywhere else.",
        items: ["Handcrafted earrings & necklaces", "Bracelets & rings", "Local artisan pieces", "Statement & everyday jewelry"],
        category: "jewelry"
    },
    {
        id: "garden-outdoor-decor",
        title: "Garden & Outdoor",
        price: 39.00,
        image: "/assets/store-butterfly-markers.jpg",
        description: "Wind chimes that sing, sun catchers that sparkle, solar butterflies that surprise — if it brings joy to your garden, we probably have it.",
        items: ["Planters & garden decor", "Wind chimes & bird feeders", "Patio accents", "Solar decorations"],
        category: "garden"
    },
    {
        id: "wellness-spiritual",
        title: "Wellness & Spirituality",
        price: 48.00,
        image: "/assets/product-display-cabinet.jpg",
        description: "Himalayan salt lamps, crystals, candles, and things that help you find your calm. Because we all need a little peace.",
        items: ["Crystals & essential oils", "Sage & meditation tools", "Journals & self-care", "Himalayan salt lamps"],
        category: "wellness"
    },
    {
        id: "boutique-fashion",
        title: "Clothing & Fashion",
        price: 65.00,
        image: "/assets/category-fashion.jpg",
        description: "Unique clothing pieces and seasonal fashion items that feel as good as they look. Style with personality.",
        items: ["Unique clothing pieces", "Seasonal fashion items", "New arrivals coming soon!", "Fair trade options"],
        category: "fashion"
    },
    {
        id: "seasonal-treasures",
        title: "Seasonal & Holiday",
        price: 28.00,
        image: "/assets/store-friends-sign.jpg",
        description: "Rotating seasonal decor and holiday-specific items that make every celebration special. Limited edition pieces you won't want to miss.",
        items: ["Rotating seasonal decor", "Holiday-specific items", "Limited edition pieces", "Festive treasures"],
        category: "seasonal"
    },
];
