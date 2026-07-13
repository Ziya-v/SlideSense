import { motion } from "framer-motion";
import {
  Upload,
  BrainCircuit,
  SearchCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Presentation",
    description:
      "Upload any .pptx presentation securely. Your files remain private throughout the analysis.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    description:
      "Machine Learning identifies headings, subheadings, body text and formatting patterns.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: SearchCheck,
    title: "Consistency Detection",
    description:
      "Detects inconsistent fonts, colors, sizes, bold text and layout issues across slides.",
    color: "from-cyan-500 to-sky-500",
  },
  {
    icon: Sparkles,
    title: "Auto Fix",
    description:
      "Automatically generates a corrected PowerPoint while preserving your original content.",
    color: "from-emerald-500 to-green-500",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            ✨ How it Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            From messy deck to{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              polished
            </span>{" "}
            in 4 steps
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Four intelligent steps to transform an inconsistent presentation
            into a polished professional deck.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative flex h-full flex-col"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex w-fit rounded-2xl bg-gradient-to-r ${step.color} p-5`}
                  >
                    <Icon size={34} className="text-white" />
                  </div>

                  {/* Big Number */}
                  <span className="mt-8 text-6xl font-bold text-white/5">
                    0{index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="-mt-8 text-3xl font-bold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 flex-1 leading-8 text-slate-400">
                    {step.description}
                  </p>
                </motion.div>

                {/* Desktop Arrow */}
                {index !== steps.length - 1 && (
                  <div className="absolute -right-6 top-1/2 hidden -translate-y-1/2 lg:block">
                    <ArrowRight
                      className="text-indigo-400"
                      size={32}
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

export default HowItWorks;