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
        image: "/images/products/media__1770952942710.jpg",
        description: "An intricate laser-cut wooden puzzle featuring a breathtaking stained-glass butterfly design. Each piece is uniquely shaped, making for a challenging and beautiful experience.",
        items: ["High-quality wooden pieces", "Stained-glass aesthetic", "Laser-cut precision", "Display-ready box"],
        category: "puzzles"
    },
    {
        id: "vibrant-cat-puzzle",
        title: "Vibrant Kaleidoscope Cat Puzzle",
        price: 35.00,
        image: "/images/products/media__1770952942705.jpg",
        description: "A burst of color in every piece. This wooden puzzle showcases a majestic cat in a kaleidoscope of patterns. A perfect gift for puzzle lovers and cat enthusiasts alike.",
        items: ["Premium wood construction", "Intense vibrant colors", "Unique piece shapes", "Whimsical artwork"],
        category: "puzzles"
    },
    {
        id: "vertical-family-sign-new",
        title: "In Our Home Family Values Sign",
        price: 45.00,
        image: "/images/products/media__1770952942707.jpg",
        description: "A large vertical wooden sign celebrating the values that make a house a home. This rustic piece adds warmth and character to your entryway or living space.",
        items: ["Rustic wood planks", "Bold typography", "Motivational home values", "Horizontal hanging wire"],
        category: "signs"
    },
    {
        id: "sunflower-clock",
        title: "Gilded Sunflower Wall Clock",
        price: 68.00,
        image: "/images/products/media__1770950126264.jpg",
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
        id: "wind-chimes-set",
        title: "A Life Celebrated Wind Chimes",
        price: 42.00,
        image: "/images/products/media__1770950126258.jpg",
        description: "Elegant wooden and metal wind chimes available in paw print, feather, and butterfly designs. Each set is designed to bring a peaceful melody to your garden.",
        items: ["Tuned metal tubes", "Sturdy wooden top", "Weather-resistant", "Memorial gift-ready"],
        category: "garden"
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
