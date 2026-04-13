import type { GalleryImage } from "@/types";
import { motion } from "motion/react";

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "latte-art",
    src: "/assets/generated/gallery-latte-art.dim_600x800.jpg",
    alt: "Barista pouring beautiful latte art into a coffee cup",
  },
  {
    id: "window-seat",
    src: "/assets/generated/gallery-window-seat.dim_800x600.jpg",
    alt: "Cozy window seat with two steaming coffee mugs and warm sunlight",
  },
  {
    id: "coffee-shelf",
    src: "/assets/generated/gallery-coffee-shelf.dim_600x600.jpg",
    alt: "Rustic wooden shelf with vintage coffee accessories and glass jars of beans",
  },
  {
    id: "pastries",
    src: "/assets/generated/gallery-pastries.dim_600x800.jpg",
    alt: "Assorted artisan pastries beautifully arranged on a tiered wooden stand",
  },
  {
    id: "interior",
    src: "/assets/generated/gallery-interior.dim_800x600.jpg",
    alt: "Warm cozy coffee shop interior with exposed brick walls and hanging plants",
  },
  {
    id: "coffee-beans",
    src: "/assets/generated/gallery-coffee-beans.dim_600x600.jpg",
    alt: "Close up of freshly roasted coffee beans in a wooden scoop",
  },
];

function GalleryItem({ image, index }: { image: GalleryImage; index: number }) {
  // Create visual rhythm — alternate tall/wide spans
  const spanClasses = [
    "row-span-2", // tall
    "col-span-2", // wide
    "", // square
    "row-span-2", // tall
    "col-span-2", // wide
    "", // square
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-ocid={`gallery-item-${image.id}`}
      className={`relative overflow-hidden rounded-xl cursor-pointer ${spanClasses[index] ?? ""} min-h-[200px]`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-all duration-500 hover:scale-105 hover:brightness-110"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 rounded-xl" />
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section className="py-20 bg-muted/30" aria-label="Photo gallery">
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
            Moments at Brew Haven
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Life in the Café
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            A glimpse into the warmth, craft, and community that makes Brew
            Haven special.
          </p>
        </motion.div>

        {/* Masonry-style CSS grid */}
        <ul
          className="grid grid-cols-3 auto-rows-[200px] gap-3 sm:gap-4 max-w-5xl mx-auto list-none p-0 m-0"
          aria-label="Gallery images"
        >
          {GALLERY_IMAGES.map((image, index) => (
            <li key={image.id} className="contents">
              <GalleryItem image={image} index={index} />
            </li>
          ))}
        </ul>

        {/* Instagram CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="gallery-instagram-link"
            className="inline-flex items-center gap-2 text-sm font-body font-semibold text-accent hover:text-primary transition-colors duration-200 underline underline-offset-4"
          >
            Follow us on Instagram for daily moments
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
