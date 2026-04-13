import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { MenuItem } from "@/types";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <Card
      className="group overflow-hidden border-border bg-card transition-smooth hover:shadow-elevated hover:-translate-y-1"
      data-ocid={`menu-item-${item.id}`}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>
      <CardContent className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-card-foreground leading-tight">
            {item.name}
          </h3>
          <Badge
            variant="secondary"
            className="shrink-0 bg-primary/10 text-primary border-primary/20 font-semibold font-body"
          >
            {item.price}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
}
