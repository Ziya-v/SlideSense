import { motion } from "framer-motion";
import { Upload, Play } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row">

        {/* Left Side */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            ✨ AI Powered Presentation Assistant
          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">
            AI-Powered
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              PowerPoint
            </span>
            <br />
            Formatting Consistency Checker
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Upload your presentation and let AI automatically detect
            inconsistent fonts, colors, sizes and formatting. Generate a
            professional presentation with one click.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-7 py-4 font-semibold text-white transition hover:scale-105">
              <Upload size={18} />
              Upload Presentation
            </button>

            <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
              <Play size={18} />
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="relative flex flex-1 justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -left-8 top-20 z-20 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-3 backdrop-blur-xl"
          >
            <p className="font-medium text-green-400">✓ Font Fixed</p>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -right-8 bottom-20 z-20 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-3 backdrop-blur-xl"
          >
            <p className="font-medium text-cyan-400">
              ✓ Ready to Download
            </p>
          </motion.div>

          {/* Dashboard */}
          <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl backdrop-blur-xl">

            {/* Browser */}
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>

              <span className="ml-4 text-sm text-slate-400">
                SlideSense Dashboard
              </span>
            </div>

            <div className="space-y-6 p-6">

              <div>
                <p className="text-sm text-slate-400">
                  Presentation
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  Final_Project.pptx
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-slate-800/60 p-5">
                  <p className="text-sm text-slate-400">Slides</p>
                  <h2 className="mt-2 text-3xl font-bold text-white">
                    24
                  </h2>
                </div>

                <div className="rounded-2xl bg-slate-800/60 p-5">
                  <p className="text-sm text-slate-400">Issues</p>
                  <h2 className="mt-2 text-3xl font-bold text-red-400">
                    18
                  </h2>
                </div>

                <div className="rounded-2xl bg-slate-800/60 p-5">
                  <p className="text-sm text-slate-400">Fixed</p>
                  <h2 className="mt-2 text-3xl font-bold text-green-400">
                    18
                  </h2>
                </div>

                <div className="rounded-2xl bg-slate-800/60 p-5">
                  <p className="text-sm text-slate-400">
                    Confidence
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-cyan-400">
                    95%
                  </h2>
                </div>

              </div>

              {/* Progress */}

              <div>
                <div className="mb-2 flex justify-between text-sm text-slate-400">
                  <span>Formatting Progress</span>
                  <span>95%</span>
                </div>

                <div className="h-3 rounded-full bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "95%" }}
                    transition={{ duration: 2 }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
                  />
                </div>
              </div>

              {/* Activity */}

              <div className="rounded-2xl bg-slate-800/50 p-5">
                <h4 className="mb-3 font-semibold text-white">
                  Recent Activity
                </h4>

                <div className="space-y-2 text-sm text-slate-300">
                  <p>✓ Heading standardized</p>
                  <p>✓ Font corrected</p>
                  <p>✓ Colors unified</p>
                  <p>✓ Layout optimized</p>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;