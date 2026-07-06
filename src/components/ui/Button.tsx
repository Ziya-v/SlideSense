import { motion } from "framer-motion";
import type { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
}

function Button({ children, primary = false }: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={`rounded-2xl px-7 py-4 font-semibold transition-all duration-300 ${
        primary
          ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/30"
          : "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10"
      }`}
    >
      {children}
    </motion.button>
  );
}

export default Button;