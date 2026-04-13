import { FeaturedItems } from "@/components/FeaturedItems";
import { Gallery } from "@/components/Gallery";
import { HeroSection } from "@/components/HeroSection";
import { Testimonials } from "@/components/Testimonials";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <>
      <HeroSection />
      <FeaturedItems />
      <Testimonials />
      <Gallery />
    </>
  );
}
