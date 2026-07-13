import { FileText, AlertTriangle, CheckCircle2, Brain } from "lucide-react";

const stats = [
  {
    title: "Slides",
    value: "24",
    icon: FileText,
    color: "text-cyan-400",
  },
  {
    title: "Issues",
    value: "18",
    icon: AlertTriangle,
    color: "text-red-400",
  },
  {
    title: "Fixed",
    value: "18",
    icon: CheckCircle2,
    color: "text-green-400",
  },
  {
    title: "Accuracy",
    value: "95%",
    icon: Brain,
    color: "text-indigo-400",
  },
];

function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-400">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-white">
                  {stat.value}
                </h2>
              </div>

              <Icon
                size={40}
                className={stat.color}
              />

            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsCards;