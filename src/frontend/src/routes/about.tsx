import { TeamCard } from "@/components/TeamCard";
import type { TeamMember } from "@/types";
import { createFileRoute } from "@tanstack/react-router";
import { Award, Coffee, Leaf, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "emma",
    name: "Emma Clarke",
    role: "Head Barista",
    photo: "",
    bio: "Emma has 8 years in specialty coffee and leads our brewing program with passion and precision.",
  },
  {
    id: "daniel",
    name: "Daniel Park",
    role: "Pastry Chef",
    photo: "",
    bio: "Daniel trained in Paris and brings European technique to every bake that leaves our kitchen.",
  },
  {
    id: "priya",
    name: "Priya Nair",
    role: "Cafe Manager",
    photo: "",
    bio: "Priya makes sure every guest feels at home from the moment they walk in our doors.",
  },
];

const STATS = [
  { icon: Coffee, value: "3", label: "Origin Countries" },
  { icon: Leaf, value: "100%", label: "Organic Certified" },
  { icon: RefreshCw, value: "Weekly", label: "Small-Batch Roasted" },
];

function AboutPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <img
          src="/assets/generated/about-hero-interior.dim_1600x900.jpg"
          alt="Brew Haven cafe interior"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary-foreground/70 text-sm uppercase tracking-widest font-semibold mb-3"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold text-card leading-tight"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="bg-secondary/30 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <p className="text-primary text-sm uppercase tracking-widest font-semibold">
                  Since 2018
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-snug">
                  The Brew Haven Story
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Brew Haven was born in 2018 from a simple dream — to create a
                  space where great coffee meets genuine warmth. Nestled in the
                  heart of the city, our cafe is more than a coffee shop; it is
                  a community, a refuge, and a ritual.
                </p>
                <p>
                  We opened our doors with one espresso machine, three tables,
                  and a belief that every cup deserves to be crafted with
                  intention. Today, we still hold those values close to every
                  drink we serve.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
                <img
                  src="/assets/generated/about-story-pour.dim_800x600.jpg"
                  alt="Barista crafting latte art at Brew Haven"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* decorative accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-primary/15 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Organic Sourcing Section ── */}
      <section className="bg-accent py-24" data-ocid="sourcing-section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Text column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-accent-foreground" />
                </div>
                <p className="text-accent-foreground/70 text-sm uppercase tracking-widest font-semibold">
                  Ethical Sourcing
                </p>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground leading-snug">
                From Seed to Cup,
                <br />
                Organically
              </h2>

              <p className="text-accent-foreground/80 leading-relaxed">
                We partner directly with small-scale organic farmers in
                Ethiopia, Colombia, and Guatemala. Every bean is shade-grown,
                hand-picked, and ethically traded. We roast in small batches to
                capture the full character of each origin — earthy, floral, and
                always extraordinary.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <Award className="w-4 h-4 text-accent-foreground/60 flex-shrink-0" />
                <p className="text-accent-foreground/60 text-sm">
                  Rainforest Alliance & Fair Trade certified partners
                </p>
              </div>
            </motion.div>

            {/* Stats column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-1 gap-4"
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-accent-foreground/10 rounded-2xl p-6 flex items-center gap-5 border border-accent-foreground/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-foreground/15 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-accent-foreground">
                      {stat.value}
                    </p>
                    <p className="text-accent-foreground/70 text-sm">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Meet the Team ── */}
      <section className="bg-background py-24" data-ocid="team-section">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3 mb-14"
          >
            <p className="text-primary text-sm uppercase tracking-widest font-semibold">
              The People
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-base">
              Behind every great cup is a passionate person. Say hello to the
              heart of Brew Haven.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
