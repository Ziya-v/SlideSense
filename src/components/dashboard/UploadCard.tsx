import { UploadCloud } from "lucide-react";
import { motion } from "framer-motion";

function UploadCard() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl"
    >
      <h2 className="text-2xl font-bold text-white">
        Upload Presentation
      </h2>

      <p className="mt-3 text-slate-400">
        Upload your PowerPoint (.pptx) to start AI analysis.
      </p>

      <div className="mt-8 rounded-2xl border-2 border-dashed border-indigo-500/30 bg-slate-950/50 p-10 text-center">

        <UploadCloud
          size={60}
          className="mx-auto text-indigo-400"
        />

        <h3 className="mt-6 text-xl font-semibold text-white">
          Drag & Drop your PPT
        </h3>

        <p className="mt-2 text-slate-400">
          or click below to browse
        </p>

        <button className="mt-8 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
          Choose File
        </button>

      </div>
    </motion.div>
  );
}

export default UploadCard;