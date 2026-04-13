import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  function scrollToNext() {
    const el = document.getElementById("featured-items");
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/hero-cafe-interior.dim_1600x900.jpg')`,
        }}
        role="img"
        aria-label="Cozy Brew Haven cafe interior"
      />

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

      {/* Steam animation overlay */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="steam-wisp absolute bottom-24 opacity-0"
            style={{
              left: `${30 + i * 18}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary-foreground/80 bg-primary/30 backdrop-blur-sm border border-primary-foreground/20 px-4 py-1.5 rounded-full mb-6">
            Brooklyn's Favourite Café
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Where Every Cup{" "}
          <span className="text-primary italic">Feels Like Home</span>
        </motion.h1>

        <motion.p
          className="font-body text-lg sm:text-xl text-white/85 max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Freshly brewed coffee, artisan pastries, and warm moments.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/menu">
            <Button
              size="lg"
              data-ocid="hero-view-menu-btn"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated transition-smooth min-w-[160px] font-body font-semibold text-base h-12"
            >
              View Menu
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              data-ocid="hero-visit-us-btn"
              className="bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/20 hover:border-white/60 transition-smooth min-w-[160px] font-body font-semibold text-base h-12"
            >
              Visit Us
            </Button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          type="button"
          onClick={scrollToNext}
          aria-label="Scroll to featured items"
          data-ocid="hero-scroll-down"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 hover:text-white/90 transition-smooth"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-xs font-body tracking-widest uppercase">
            Discover
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.8,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>

      {/* Steam CSS */}
      <style>{`
        @keyframes steam-rise {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          20% { opacity: 0.15; }
          80% { opacity: 0.08; }
          100% { transform: translateY(-120px) scaleX(2.5); opacity: 0; }
        }
        .steam-wisp {
          width: 3px;
          height: 60px;
          background: linear-gradient(to top, rgba(255,255,255,0.3), transparent);
          border-radius: 50%;
          filter: blur(4px);
          animation: steam-rise 3.5s ease-out infinite;
        }
      `}</style>
    </section>
  );
}
