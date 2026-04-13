import type { Testimonial } from "@/types";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "alice",
    name: "Alice M.",
    avatar: "AM",
    rating: 5,
    text: "The best espresso I have ever had — rich, smooth, and perfectly balanced. I come here every morning before work and it sets the tone for my whole day.",
    date: "March 2026",
  },
  {
    id: "james",
    name: "James T.",
    avatar: "JT",
    rating: 5,
    text: "A cozy corner of the city. My daily retreat. There's something about Brew Haven that feels like home the moment you walk through the door.",
    date: "February 2026",
  },
  {
    id: "sofia",
    name: "Sofia L.",
    avatar: "SL",
    rating: 5,
    text: "Their croissants are to die for! I come every weekend just for those. The lavender latte paired with the almond croissant is an absolute must-try.",
    date: "April 2026",
  },
];

const STAR_IDS = ["s1", "s2", "s3", "s4", "s5"];

function StarRating({ count }: { count: number }) {
  return (
    <div
      className="flex gap-0.5"
      aria-label={`${count} out of 5 stars`}
      role="img"
    >
      {STAR_IDS.slice(0, count).map((id) => (
        <Star key={id} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: { testimonial: Testimonial; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-ocid={`testimonial-card-${testimonial.id}`}
      className="bg-card rounded-2xl p-7 shadow-soft border border-border flex flex-col gap-4 hover:shadow-elevated transition-smooth"
    >
      <StarRating count={testimonial.rating} />
      <blockquote className="font-body text-base text-foreground/90 leading-relaxed italic flex-1">
        "{testimonial.text}"
      </blockquote>
      <footer className="flex items-center gap-3 pt-2 border-t border-border">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0"
          aria-hidden="true"
        >
          <span className="font-display text-sm font-bold text-primary">
            {testimonial.avatar}
          </span>
        </div>
        <div>
          <p className="font-body text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="font-body text-xs text-muted-foreground">
            {testimonial.date}
          </p>
        </div>
      </footer>
    </motion.article>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 bg-background" aria-label="Customer testimonials">
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
            Guest Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Loved by Our Community
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            Don't just take our word for it — hear from the regulars who make
            Brew Haven what it is.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, index) => (
            <TestimonialCard key={t.id} testimonial={t} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
