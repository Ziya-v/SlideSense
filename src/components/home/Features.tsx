import { motion } from "framer-motion";
import {
  BrainCircuit,
  Palette,
  Zap,
  BarChart3,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const features = [
  {
    title: "AI Role Classification",
    description:
      "Automatically classifies headings, subheadings and body text using Machine Learning.",
    icon: BrainCircuit,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Formatting Consistency",
    description:
      "Detects inconsistent fonts, colors, sizes and formatting across all slides.",
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "One Click Auto Fix",
    description:
      "Correct every formatting issue instantly while preserving your original content.",
    icon: Zap,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Detailed Analysis",
    description:
      "Generate a slide-wise report highlighting every detected inconsistency.",
    icon: BarChart3,
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    title: "Secure Processing",
    description:
      "Your presentations remain private and are processed securely.",
    icon: ShieldCheck,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Lightning Fast",
    description:
      "Analyze presentations in just a few seconds using an optimized AI pipeline.",
    icon: Rocket,
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mx-auto mb-16 max-w-3xl text-center"
>
  <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
    ✨ Features
  </span>

  <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
    Everything you need for{" "}
    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
      flawless slides
    </span>
  </h2>

  <p className="mt-6 text-lg text-slate-400">
    A focused AI toolkit designed to detect, analyze, and automatically fix
    PowerPoint formatting inconsistencies.
  </p>
</motion.div>
<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {features.map((feature, index) => {
    const Icon = feature.icon;

    return (
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
      >
        {/* Icon */}
        <div
          className={`inline-flex rounded-2xl bg-gradient-to-r ${feature.gradient} p-4`}
        >
          <Icon className="text-white" size={32} />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-bold text-white">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-slate-400">
          {feature.description}
        </p>
      </motion.div>
    );
  })}
</div>
      </div>
    </section>
  );
}

export default Features;