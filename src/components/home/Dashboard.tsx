import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

const data = [
  { name: "Fixed", value: 24 },
  { name: "Remaining", value: 6 },
];

const COLORS = ["#4F46E5", "#334155"];

const progress = [
  { label: "Font Consistency", value: 95 },
  { label: "Color Consistency", value: 92 },
  { label: "Layout Consistency", value: 98 },
];

function Dashboard() {
  return (
    <section
      id="dashboard"
      className="relative bg-slate-950 py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            📊 Dashboard Preview
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            AI Analysis{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Get detailed insights about your presentation with intelligent
            formatting analysis and confidence scoring.
          </p>
        </motion.div>

        {/* Dashboard */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[32px] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl"
        >

          {/* Top Row */}

          <div className="grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-slate-800/70 p-6">
              <FileText className="mb-4 text-indigo-400" />
              <p className="text-sm text-slate-400">
                Presentation
              </p>

              <h3 className="mt-2 font-semibold text-white">
                Quarterly_Report.pptx
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-800/70 p-6">
              <p className="text-sm text-slate-400">
                Slides
              </p>

              <h2 className="mt-3 text-4xl font-bold text-white">
                24
              </h2>
            </div>

            <div className="rounded-2xl bg-slate-800/70 p-6">
              <p className="text-sm text-slate-400">
                Issues Found
              </p>

              <h2 className="mt-3 text-4xl font-bold text-red-400">
                24
              </h2>
            </div>

            <div className="rounded-2xl bg-slate-800/70 p-6">
              <p className="text-sm text-slate-400">
                Confidence
              </p>

              <h2 className="mt-3 text-4xl font-bold text-green-400">
                95%
              </h2>
            </div>

          </div>

          {/* Bottom */}

          <div className="mt-10 grid gap-8 lg:grid-cols-2">

            {/* Chart */}

            <div className="rounded-3xl bg-slate-800/60 p-6">

              <h3 className="mb-6 text-xl font-bold text-white">
                Formatting Status
              </h3>

              <div className="h-72">

                <ResponsiveContainer width="100%" height="100%">

                  <PieChart>

                    <Pie
                      data={data}
                      innerRadius={70}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {data.map((_, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index]}
                        />
                      ))}
                    </Pie>

                  </PieChart>

                </ResponsiveContainer>

              </div>

            </div>

            {/* Progress */}

            <div className="space-y-6">

              <div className="rounded-3xl bg-slate-800/60 p-6">

                <h3 className="mb-6 text-xl font-bold text-white">
                  Analysis Progress
                </h3>

                {progress.map((item) => (

                  <div
                    key={item.label}
                    className="mb-6"
                  >
                    <div className="mb-2 flex justify-between">

                      <span className="text-slate-300">
                        {item.label}
                      </span>

                      <span className="text-indigo-400">
                        {item.value}%
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-slate-700">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${item.value}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                        }}
                        className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                      />

                    </div>

                  </div>

                ))}

              </div>

              {/* Suggestions */}

              <div className="rounded-3xl bg-slate-800/60 p-6">

                <h3 className="mb-5 text-xl font-bold text-white">
                  Suggested Corrections
                </h3>

                <div className="space-y-4">

                  <div className="flex items-center gap-3">

                    <CheckCircle2 className="text-green-400" />

                    <span className="text-slate-300">
                      Fonts standardized
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <Sparkles className="text-cyan-400" />

                    <span className="text-slate-300">
                      Theme colors updated
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <AlertTriangle className="text-yellow-400" />

                    <span className="text-slate-300">
                      Heading sizes aligned
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Dashboard;