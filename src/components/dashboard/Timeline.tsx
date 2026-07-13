import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  "Presentation Uploaded",
  "Reading Slides",
  "Detecting Fonts",
  "Checking Colors",
  "Analyzing Layout",
  "Generating Report",
];

function Timeline() {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
      <h2 className="mb-8 text-2xl font-bold text-white">
        AI Analysis Timeline
      </h2>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
              <CheckCircle2
                size={22}
                className="text-green-400"
              />
            </div>

            <div className="flex-1">
              <p className="font-medium text-white">
                {step}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;