import { Clock, Star, Wrench } from "lucide-react";
import { stats } from "@/lib/site";

const icons = [Wrench, Clock, Star];

export default function Stats({ variant = "card" }: { variant?: "card" | "band" }) {
  return (
    <div className={`stats stats-${variant}`}>
      {stats.map((s, i) => {
        const Icon = icons[i];
        return (
          <div className="stat" key={s.label}>
            <span className="stat-icon">
              <Icon size={22} />
            </span>
            <div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
