import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "An absolute gem in downtown Collingwood! The selection is wonderful and the staff is always so helpful.",
    author: "Local Customer",
    rating: 5,
  },
  {
    quote: "I never leave empty-handed. There's always something new to discover!",
    author: "Visitor from Toronto",
    rating: 5,
  },
  {
    quote: "My go-to shop for unique gifts. The jewelry selection is beautiful and everything is wrapped to perfection.",
    author: "Happy Customer",
    rating: 5,
  },
  {
    quote: "Such a charming boutique! Every time I visit, I find something special I didn't know I needed.",
    author: "Repeat Visitor",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-accent/20">
      <div className="container mx-auto px-4">
        <SectionHeading
          scriptTitle="Kind Words"
          title="What Our Customers Say"
        />

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4 md:px-12"
            >
              {/* Quote icon */}
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />

              {/* Quote text */}
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Author */}
              <p className="text-muted-foreground font-medium">
                — {testimonials[current].author}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              className="text-primary hover:bg-primary/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrent(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-primary w-6"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="text-primary hover:bg-primary/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
