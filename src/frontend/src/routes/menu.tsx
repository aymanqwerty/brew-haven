import { MenuCard } from "@/components/MenuCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuCategories, menuItems } from "@/data/menuData";
import type { MenuCategory } from "@/data/menuData";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
});

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("coffee");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <>
      {/* Page Header */}
      <section className="bg-card border-b border-border py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-3">
            Our Offerings
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            The Brew Haven Menu
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Every item crafted with care — from our single-origin espresso to
            our house-baked pastries.
          </p>
        </div>
      </section>

      {/* Menu Tabs */}
      <section className="bg-background py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={activeCategory}
            onValueChange={(val) => setActiveCategory(val as MenuCategory)}
            data-ocid="menu-tabs"
          >
            {/* Tab Navigation */}
            <div className="overflow-x-auto pb-2 mb-8 -mx-4 px-4">
              <TabsList className="inline-flex bg-muted/60 border border-border rounded-xl p-1 gap-1 min-w-max">
                {menuCategories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    data-ocid={`tab-${cat.id}`}
                    className="px-4 py-2 rounded-lg font-body font-medium text-sm transition-smooth data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-soft"
                  >
                    <span className="mr-1.5">{cat.emoji}</span>
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab Content */}
            {menuCategories.map((cat) => (
              <TabsContent
                key={cat.id}
                value={cat.id}
                className="mt-0 focus-visible:outline-none"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-muted/40 border-t border-border py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Ready to Order?
          </h2>
          <p className="text-muted-foreground font-body mb-6">
            Visit us in-store or place your order online. We prepare everything
            fresh to order.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              data-ocid="order-online-btn"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-body font-semibold transition-smooth hover:shadow-elevated hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Order Online
            </a>
            <a
              href="/contact"
              data-ocid="reserve-table-btn"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border bg-card text-foreground font-body font-semibold transition-smooth hover:bg-muted/60 hover:shadow-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
