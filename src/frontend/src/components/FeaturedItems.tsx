import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { MenuItem } from "@/types";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const FEATURED: MenuItem[] = [
  {
    id: "espresso",
    name: "Signature Espresso",
    description:
      "Bold, velvety, and full-bodied — our house blend pulled to perfection with a honey-sweet crema.",
    price: "$4.50",
    category: "coffee",
    imageUrl: "/assets/generated/espresso-cup.dim_600x600.jpg",
    featured: true,
  },
  {
    id: "lavender-latte",
    name: "Lavender Latte",
    description:
      "Silky steamed milk infused with house-made lavender syrup and a double shot of smooth espresso.",
    price: "$5.50",
    category: "coffee",
    imageUrl: "/assets/generated/lavender-latte.dim_600x600.jpg",
    featured: true,
  },
  {
    id: "croissant",
    name: "Almond Croissant",
    description:
      "Flaky, buttery, filled with rich almond cream and topped with toasted sliced almonds and powdered sugar.",
    price: "$3.75",
    category: "pastries",
    imageUrl: "/assets/generated/almond-croissant.dim_600x600.jpg",
    featured: true,
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    description:
      "Thick-cut sourdough with smashed avocado, heirloom tomatoes, microgreens, and a perfectly poached egg.",
    price: "$8.50",
    category: "breakfast",
    imageUrl: "/assets/generated/avocado-toast.dim_600x600.jpg",
    featured: true,
  },
];

const CATEGORY_LABELS: Record<string, string> = {
  coffee: "Coffee",
  tea: "Tea",
  pastries: "Pastry",
  breakfast: "Breakfast",
  desserts: "Dessert",
};

function FeaturedCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-ocid={`featured-card-${item.id}`}
      className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.imageUrl}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge
            variant="secondary"
            className="bg-card/90 backdrop-blur-sm text-muted-foreground text-xs font-body font-medium border border-border/50"
          >
            {CATEGORY_LABELS[item.category]}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
            {item.name}
          </h3>
          <span className="font-display text-lg font-bold text-primary shrink-0 mt-0.5">
            {item.price}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function FeaturedItems() {
  return (
    <section
      id="featured-items"
      className="py-20 bg-muted/30"
      aria-label="Featured menu items"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-accent mb-3 block">
            House Favourites
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            A Taste of Brew Haven
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            Crafted with seasonal ingredients, locally sourced produce, and a
            whole lot of love.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED.map((item, index) => (
            <FeaturedCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/menu">
            <Button
              variant="outline"
              size="lg"
              data-ocid="featured-view-full-menu"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-body font-semibold"
            >
              Explore the Full Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
