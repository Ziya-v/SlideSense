import { motion } from "framer-motion";

function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Indigo Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-20 top-40 h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[140px]"
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]"
      />

    </div>
  );
}

export default Background;