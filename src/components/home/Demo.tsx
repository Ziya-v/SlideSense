import { motion } from "framer-motion";
import { CheckCircle2, Clock3, Sparkles } from "lucide-react";

function Demo() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            ✨ Live Demo
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Before{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              vs
            </span>{" "}
            After
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            SlideSense automatically detects inconsistent formatting and
            transforms your presentation into a polished professional deck.
          </p>
        </motion.div>

        {/* Browser */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-2xl backdrop-blur-xl"
        >
          {/* Browser Header */}

          <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>

            <div className="ml-6 flex-1 rounded-lg bg-slate-800 py-2 text-center text-sm text-slate-400">
              slidesense.ai/demo
            </div>
          </div>

          {/* Before & After */}

          <div className="grid lg:grid-cols-2">
            {/* BEFORE */}

            <div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r">
              <h3 className="mb-8 text-center text-2xl font-bold text-red-400">
                Before
              </h3>

              <div className="space-y-5 rounded-3xl bg-white p-8 shadow-lg">
                <h2 className="font-serif text-4xl text-red-600">
                  Annual Report
                </h2>

                <div className="h-3 w-40 rounded bg-yellow-300"></div>

                <div className="h-3 w-56 rounded bg-gray-400"></div>

                <div className="h-3 w-32 rounded bg-blue-400"></div>

                <div className="h-3 w-48 rounded bg-green-400"></div>

                <div className="mt-6 rounded-xl bg-red-100 p-3 text-center font-semibold text-red-600">
                  ❌ Mixed Fonts
                </div>

                <div className="rounded-xl bg-yellow-100 p-3 text-center font-semibold text-yellow-700">
                  ❌ Wrong Colors
                </div>

                <div className="rounded-xl bg-orange-100 p-3 text-center font-semibold text-orange-700">
                  ❌ Random Sizes
                </div>
              </div>
            </div>

            {/* AFTER */}

            <div className="p-10">
              <h3 className="mb-8 text-center text-2xl font-bold text-green-400">
                After
              </h3>

              <div className="space-y-5 rounded-3xl bg-white p-8 shadow-lg">
                <h2 className="text-4xl font-bold text-indigo-600">
                  Annual Report
                </h2>

                <div className="h-3 w-40 rounded bg-indigo-400"></div>

                <div className="h-3 w-56 rounded bg-indigo-300"></div>

                <div className="h-3 w-48 rounded bg-indigo-300"></div>

                <div className="h-3 w-44 rounded bg-indigo-300"></div>

                <div className="mt-6 rounded-xl bg-green-100 p-3 text-center font-semibold text-green-600">
                  ✓ Consistent Fonts
                </div>

                <div className="rounded-xl bg-green-100 p-3 text-center font-semibold text-green-600">
                  ✓ Standard Colors
                </div>

                <div className="rounded-xl bg-green-100 p-3 text-center font-semibold text-green-600">
                  ✓ Perfect Formatting
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Slider */}

          <div className="relative px-12 py-8">
            <div className="h-2 rounded-full bg-slate-700">
              <motion.div
                initial={{ width: "15%" }}
                animate={{ width: ["15%", "85%", "15%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
              />
            </div>

            <motion.div
              animate={{
                x: [0, 520, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-5 h-6 w-6 rounded-full border-4 border-white bg-indigo-500 shadow-xl"
            />
          </div>

          {/* Floating Stats */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -right-6 top-16 hidden w-72 rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl xl:block"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-400" />
                <span className="text-white">
                  24 Issues Detected
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Sparkles className="text-cyan-400" />
                <span className="text-white">
                  24 Issues Fixed
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 className="text-yellow-400" />
                <span className="text-white">
                  Processing Time: 3.1 sec
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Demo;