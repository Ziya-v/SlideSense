import { motion } from "framer-motion";
import {
  SiPython,
  SiFastapi,
  SiReact,
  SiDocker,
  SiGithub,
  SiTailwindcss,
  SiScikitlearn,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

const techs = [
  {
    name: "Python",
    icon: SiPython,
    color: "text-yellow-400",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "text-green-400",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-cyan-400",
  },
  {
    name: "Machine Learning",
    icon: FaBrain,
    color: "text-purple-400",
  },
  {
    name: "Scikit-Learn",
    icon: SiScikitlearn,
    color: "text-orange-400",
  },
  {
    name: "Random Forest",
    icon: TbBrandVscode,
    color: "text-emerald-400",
  },
  {
    name: "python-pptx",
    icon: SiPython,
    color: "text-yellow-400",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-400",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "text-blue-400",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-white",
  },
];

function TechStack() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-4xl font-bold text-white"
        >
          Powered by Modern Technologies
        </motion.h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
          Built with a modern AI stack for fast, secure and intelligent
          PowerPoint formatting analysis.
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {techs.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <Icon
                  className={`mx-auto text-5xl ${tech.color} transition-transform duration-300 group-hover:scale-110`}
                />

                <h3 className="mt-5 text-center font-semibold text-white">
                  {tech.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default TechStack;