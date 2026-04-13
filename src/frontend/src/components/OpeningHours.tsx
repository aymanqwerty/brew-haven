import { Clock } from "lucide-react";

interface HoursRow {
  day: string;
  hours: string;
}

const hours: HoursRow[] = [
  { day: "Monday – Friday", hours: "7:00 am – 6:00 pm" },
  { day: "Saturday", hours: "8:00 am – 5:00 pm" },
  { day: "Sunday", hours: "8:00 am – 4:00 pm" },
  { day: "Public Holidays", hours: "Closed" },
];

export function OpeningHours() {
  return (
    <div className="bg-card rounded-2xl shadow-soft border border-border p-6 md:p-8">
      <div className="flex items-center gap-2 mb-5">
        <Clock className="h-5 w-5 text-primary" />
        <h3 className="font-display text-xl font-semibold text-foreground">
          Opening Hours
        </h3>
      </div>
      <ul className="space-y-3">
        {hours.map((row) => (
          <li
            key={row.day}
            className="flex items-center justify-between gap-4 py-2 border-b border-border/50 last:border-0"
          >
            <span className="text-sm font-medium text-foreground">
              {row.day}
            </span>
            <span
              className={`text-sm font-body ${
                row.hours === "Closed"
                  ? "text-destructive font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {row.hours}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
