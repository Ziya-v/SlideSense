import { useEffect, useState } from "react";
import {
  UploadCloud,
  FileText,
  LoaderCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function UploadCard() {
    const navigate = useNavigate();
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
const [uploaded, setUploaded] = useState(false);
const [analyzing, setAnalyzing] = useState(false);
  const handleFileChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const file = event.target.files?.[0];
  setUploaded(false);

  if (!file) return;

  setFileName(file.name);
  setProgress(0);

  let current = 0;

  const interval = setInterval(() => {
    current += 10;
    setProgress(current);

    if (current >= 100) {
  clearInterval(interval);
  setUploaded(true);
setAnalyzing(true);
}
  }, 200);
};
useEffect(() => {
  if (!analyzing) return;

  const timer = setTimeout(() => {
    setAnalyzing(false);

    navigate("/dashboard");
  }, 3500);

  return () => clearTimeout(timer);
}, [analyzing, navigate]);

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
          Drag & Drop or Choose a File
        </h3>

        <p className="mt-2 text-slate-400">
          Supported format: .pptx
        </p>

        <label className="mt-8 inline-block cursor-pointer rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105">

          Choose File

          <input
            type="file"
            accept=".pptx"
            onChange={handleFileChange}
            className="hidden"
          />

        </label>

       {fileName && !uploaded && (
  <div className="mt-6">
    <div className="mb-2 flex justify-between text-sm text-slate-400">
      <span>Uploading...</span>
      <span>{progress}%</span>
    </div>

    <div className="h-3 overflow-hidden rounded-full bg-slate-800">
      <div
        className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
)}
{uploaded && (
  <div className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4">
    <FileText className="text-green-400" size={22} />
    <div>
      <p className="font-medium text-white">{fileName}</p>
      <p className="text-sm text-green-400">
        Upload completed successfully ✓
      </p>
    </div>
  </div>
)}
{analyzing && (
  <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

    <div className="flex items-center gap-3">

      <LoaderCircle
        size={24}
        className="animate-spin text-cyan-400"
      />

      <div>

        <p className="font-semibold text-white">
          AI is analyzing your presentation...
        </p>

        <p className="text-sm text-slate-400">
          Reading slides, detecting fonts, colors and layouts.
        </p>

      </div>

    </div>

  </div>
)}

      </div>
    </motion.div>
  );
}

export default UploadCard;