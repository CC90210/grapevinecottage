import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  scriptTitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  scriptTitle,
  centered = true,
  className,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      {scriptTitle && (
        <span className="font-script text-3xl md:text-4xl text-primary block mb-2">
          {scriptTitle}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      
      {/* Decorative flourish */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="w-12 h-px bg-primary/30" />
        <svg
          className="w-6 h-6 text-primary/50"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C13.5 4 15 5.5 17 6C15 7.5 13.5 9 12 11C10.5 9 9 7.5 7 6C9 5.5 10.5 4 12 2Z" />
          <path d="M12 13C13.5 15 15 16.5 17 17C15 18.5 13.5 20 12 22C10.5 20 9 18.5 7 17C9 16.5 10.5 15 12 13Z" opacity="0.5" />
        </svg>
        <div className="w-12 h-px bg-primary/30" />
      </div>
    </motion.div>
  );
};

export default SectionHeading;
