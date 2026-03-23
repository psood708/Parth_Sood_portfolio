import { motion } from "motion/react";
import { Code2, Palette, Zap, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { ThemeToggle } from "../components/ThemeToggle";

export function AboutPage() {
  const navigate = useNavigate();
  const skills = [
    {
      icon: Code2,
      title: "Development",
      description: "Proficient in modern web technologies including React, TypeScript, and Node.js",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful, user-friendly interfaces with attention to detail",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, optimized applications that deliver great user experiences",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-900 dark:text-white py-20 px-4 sm:px-8">
      <div className="fixed top-16 left-6 z-50">
        <motion.button
          onClick={() => window.history.back()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-white/90 transition-colors"
        >
          <ArrowLeft size={20} />
        </motion.button>
      </div>
      <ThemeToggle />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light mb-6">
            ABOUT ME
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 bg-neutral-900 dark:bg-white"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-xl text-neutral-600 dark:text-white/70 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of
              experience in creating web applications. I love turning complex
              problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-neutral-500 dark:text-white/60 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through technical writing and mentoring.
            </p>
            <p className="text-lg text-neutral-500 dark:text-white/60 leading-relaxed">
              My goal is to build products that not only meet user needs but
              exceed their expectations through thoughtful design and robust
              functionality.
            </p>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="aspect-square bg-neutral-200 dark:bg-white/5 flex items-center justify-center border border-neutral-300 dark:border-white/10">
              <div className="text-8xl">👨‍💻</div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-3xl font-light mb-12 text-neutral-900 dark:text-white tracking-wider">
            CAPABILITIES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="border-t border-neutral-300 dark:border-white/20 pt-6 transition-all"
              >
                <skill.icon size={32} className="text-neutral-900 dark:text-white mb-4" />
                <h3 className="text-xl mb-3 text-neutral-900 dark:text-white tracking-wide">
                  {skill.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-white/60 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Auto-moving technology logo carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-light mb-6 text-neutral-900 dark:text-white tracking-wider">
            TECH STACK
          </h2>
          <div className="relative overflow-hidden rounded-2xl bg-white/80 dark:bg-black/30 p-5">
            <div className="flex gap-10 items-center whitespace-nowrap animate-marquee">
              {[
                { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
                { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
              ].concat([
                { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
                { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
              ]).map((tech) => (
                <div key={tech.name + Math.random()} className="flex flex-col items-center justify-center min-w-[100px]">
                  <img src={tech.logo} alt={`${tech.name} logo`} className="h-12 w-12 object-contain" />
                  <span className="mt-2 text-xs text-neutral-800 dark:text-neutral-200 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white dark:from-black via-white/0 dark:via-black/0 to-white dark:to-black" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
