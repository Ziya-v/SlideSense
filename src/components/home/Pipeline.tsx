import { motion } from "framer-motion";
import {
  Upload,
  FileSearch,
  ScanSearch,
  BrainCircuit,
  CheckCircle2,
  Sparkles,
  Download,
} from "lucide-react";

const pipeline = [
  {
    title: "Upload PPT",
    subtitle: "Secure Presentation Upload",
    icon: Upload,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Parser",
    subtitle: "Read Slides & Extract Content",
    icon: FileSearch,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Feature Extraction",
    subtitle: "Fonts • Sizes • Colors • Layout",
    icon: ScanSearch,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Random Forest",
    subtitle: "ML Classification Engine",
    icon: BrainCircuit,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Consistency Checker",
    subtitle: "Detect Formatting Issues",
    icon: CheckCircle2,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Auto Fix Engine",
    subtitle: "Apply Professional Formatting",
    icon: Sparkles,
    color: "from-fuchsia-500 to-violet-500",
  },
  {
    title: "Download PPT",
    subtitle: "Ready-to-use Presentation",
    icon: Download,
    color: "from-cyan-500 to-indigo-500",
  },
];

function Pipeline() {
  return (
    <section id="pipeline" className="bg-slate-950 py-28">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            ✨ AI Architecture
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Interactive{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Pipeline
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Every uploaded presentation passes through multiple intelligent
            processing stages before SlideSense generates a perfectly
            formatted PowerPoint.
          </p>
        </motion.div>

        {/* Pipeline */}

        <div className="relative">

          {pipeline.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title}>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="group rounded-3xl border border-white/10 bg-slate-900/60 p-7 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-5">

                      <div
                        className={`rounded-2xl bg-gradient-to-r ${step.color} p-4`}
                      >
                        <Icon
                          size={30}
                          className="text-white"
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {step.title}
                        </h3>

                        <p className="mt-1 text-slate-400">
                          {step.subtitle}
                        </p>
                      </div>

                    </div>

                    <div className="text-right">
                      <p className="text-sm text-slate-500">
                        Step
                      </p>

                      <h2 className="text-3xl font-bold text-indigo-400">
                        0{index + 1}
                      </h2>
                    </div>

                  </div>
                </motion.div>

                {/* Connector */}

                {index !== pipeline.length - 1 && (

                  <div className="flex justify-center">

                    <motion.div
                      animate={{
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="h-14 w-1 rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400"
                    />

                  </div>

                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Pipeline;