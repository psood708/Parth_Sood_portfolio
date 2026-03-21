import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { ThemeToggle } from "../components/ThemeToggle";

export function ExperiencesPage() {
  const navigate = useNavigate();
  const experiences = [
    {
      company: "Aspect Ratio Pvt. Ltd.",
      position: "Data Science Analyst",
      period: "Jan'2025 - Present",
      description:
        "Designed and delivered high-throughput AI vector search pipelines using Rust and PostgreSQL. Built full-stack web experiences for enterprise analytics.",
      achievements: [
        "Reduced query latency by 70% through Rust-based vector DB optimizations",
        "Implemented robust CI/CD with automated testing and deployments",
        "Mentored 4 engineers and led architecture reviews",
      ],
    },
    {
      company: "Space Applications Centre, ISRO",
      position: "Machine Learning Researcher",
      period: "June'2024 - Sept'2024",
      description:
        "Built scalable data processing systems and modern React/TypeScript dashboards for operational metrics.",
      achievements: [
        "Delivered 5+ production applications with 99.9% uptime",
        "Established reusable component library and design system",
        "Collaborated with product and design teams to launch new features monthly",
      ],
    },
    {
      company: "MoMacMo",
      position: "Software Engineer Intern",
      period: "Apr'2023 - Mar'2024",
      description:
        "Contributed to open-source infrastructure projects and supported full-stack development efforts.",
      achievements: [
        "Published multiple reusable libraries and templates",
        "Improved developer onboarding documentation and workflows",
        "Automated release processes to reduce cycle time",
      ],
    },
    {
      company: "Creative Solutions Ltd.",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client-facing applications. Collaborated with design team to create seamless user experiences.",
      achievements: [
        "Built 15+ responsive web applications",
        "Implemented CI/CD pipelines",
        "Increased test coverage to 85%",
      ],
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
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light mb-6">
            EXPERIENCE
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 bg-neutral-900 dark:bg-white"
          />
        </motion.div>

        {/* Timeline */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="border-l-2 border-neutral-300 dark:border-white/20 pl-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-neutral-900 dark:bg-white rounded-full" />

              <div className="space-y-4">
                <div>
                  <div className="text-sm tracking-widest text-neutral-500 dark:text-white/50 mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-2xl sm:text-3xl mb-1 text-neutral-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <div className="text-lg text-neutral-600 dark:text-white/60">
                    {exp.company}
                  </div>
                </div>

                <p className="text-neutral-600 dark:text-white/70 leading-relaxed">
                  {exp.description}
                </p>

                <div className="pt-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-neutral-500 dark:text-white/60"
                    >
                      <span className="text-neutral-400 dark:text-white/40">—</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
