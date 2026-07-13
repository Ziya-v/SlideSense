import { Download, FileCheck2 } from "lucide-react";
import { motion } from "framer-motion";

function DownloadCard() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3">
        <FileCheck2 className="text-green-400" size={32} />

        <h2 className="text-2xl font-bold text-white">
          Analysis Complete
        </h2>
      </div>

      <p className="mt-5 text-slate-400">
        Your presentation has been analyzed successfully.
      </p>

      <div className="mt-8 rounded-2xl bg-slate-950/60 p-6">

        <div className="flex justify-between py-2">
          <span className="text-slate-400">File</span>
          <span className="text-white">
            presentation.pptx
          </span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-slate-400">Issues Fixed</span>
          <span className="text-green-400">
            18
          </span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-slate-400">Confidence</span>
          <span className="text-cyan-400">
            95%
          </span>
        </div>

      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]">
        <Download size={22} />
        Download Corrected PPT
      </button>

    </motion.div>
  );
}

export default DownloadCard;