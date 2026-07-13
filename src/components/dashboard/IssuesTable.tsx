import { AlertTriangle } from "lucide-react";

const issues = [
  {
    slide: 2,
    issue: "Different Font Family",
    severity: "High",
    status: "Pending",
  },
  {
    slide: 5,
    issue: "Heading Size Mismatch",
    severity: "High",
    status: "Pending",
  },
  {
    slide: 8,
    issue: "Color Inconsistency",
    severity: "Medium",
    status: "Pending",
  },
  {
    slide: 12,
    issue: "Alignment Difference",
    severity: "Low",
    status: "Fixed",
  },
];

function IssuesTable() {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
      <div className="mb-8 flex items-center gap-3">
        <AlertTriangle className="text-red-400" />
        <h2 className="text-2xl font-bold text-white">
          Detected Issues
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="border-b border-white/10 text-left text-slate-400">
              <th className="pb-4">Slide</th>
              <th className="pb-4">Issue</th>
              <th className="pb-4">Severity</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {issues.map((item) => (
              <tr
                key={item.slide}
                className="border-b border-white/5"
              >
                <td className="py-5 text-white">
                  {item.slide}
                </td>

                <td className="py-5 text-slate-300">
                  {item.issue}
                </td>

                <td className="py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      item.severity === "High"
                        ? "bg-red-500/20 text-red-400"
                        : item.severity === "Medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {item.severity}
                  </span>
                </td>

                <td className="py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      item.status === "Fixed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-orange-500/20 text-orange-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default IssuesTable;