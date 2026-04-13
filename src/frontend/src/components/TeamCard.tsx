import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="bg-card rounded-2xl p-8 shadow-soft flex flex-col items-center text-center gap-4 transition-smooth hover:shadow-elevated hover:-translate-y-1"
      data-ocid="team-card"
    >
      <Avatar className="w-20 h-20 ring-4 ring-primary/20">
        <AvatarFallback className="bg-primary/10 text-primary font-display text-xl font-semibold">
          {initials}
        </AvatarFallback>
      </Avatar>

      <div className="space-y-1">
        <h3 className="font-display text-lg font-semibold text-foreground">
          {member.name}
        </h3>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          {member.role}
        </p>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {member.bio}
      </p>
    </div>
  );
}
