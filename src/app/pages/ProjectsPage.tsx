import { motion } from "motion/react";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { ThemeToggle } from "../components/ThemeToggle";

export function ProjectsPage() {
  const navigate = useNavigate();
  const projects = [
    {
      title: "HNSW_Vector_DB",
      description:
        "A high-performance vector database implementation in Rust optimized for approximate nearest neighbor search and low-latency retrieval.",
      tags: ["Rust", "Vector Search", "ANN"],
      year: "2026",
      liveLink: "https://github.com/psood708/HNSW_Vector_DB",
      githubLink: "https://github.com/psood708/HNSW_Vector_DB",
    },
    {
      title: "flower",
      description:
        "Forked and contributed enhancements to the Flower federated learning framework, improving integration and deployment workflows.",
      tags: ["Python", "Federated Learning", "ML"],
      year: "2025",
      liveLink: "https://flower.dev",
      githubLink: "https://github.com/psood708/flower",
    },
    {
      title: "fastpage",
      description:
        "A performant static site generator with a modern React-based build pipeline and optimized SSR.",
      tags: ["TypeScript", "Vite", "React"],
      year: "2024",
      liveLink: "https://github.com/psood708/fastpage",
      githubLink: "https://github.com/psood708/fastpage",
    },
    {
      title: "LLM-Workflow",
      description:
        "An orchestrator for LLM-based automation workflows with custom prompt templates and monitoring.",
      tags: ["Node.js", "TypeScript", "AI"],
      year: "2024",
      liveLink: "https://github.com/psood708/llm-workflow",
      githubLink: "https://github.com/psood708/llm-workflow",
    },
    {
      title: "portfolio-wireframe",
      description:
        "This personal portfolio project with custom animations, theme toggling, and section-based interactions.",
      tags: ["React", "Tailwind", "Vite"],
      year: "2024",
      liveLink: "https://github.com/psood708/portfolio-wireframe",
      githubLink: "https://github.com/psood708/portfolio-wireframe",
    },
    {
      title: "fast-analytics",
      description:
        "A dashboard and analytics tool for real-time metrics with dynamic visualizations and filters.",
      tags: ["React", "D3", "TypeScript"],
      year: "2023",
      liveLink: "https://github.com/psood708/fast-analytics",
      githubLink: "https://github.com/psood708/fast-analytics",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather dashboard with forecasts, maps, and location-based alerts.",
      tags: ["React", "TypeScript", "Weather API"],
      year: "2023",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Social Media Analytics",
      description:
        "Analytics platform for tracking social media engagement and audience insights.",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      year: "2022",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system for creative professionals to showcase their work.",
      tags: ["Next.js", "Sanity", "Tailwind CSS"],
      year: "2022",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "Mobile-responsive fitness tracking app with workout plans and progress visualization.",
      tags: ["React Native", "Redux", "Chart.js"],
      year: "2021",
      liveLink: "#",
      githubLink: "#",
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
            PROJECTS
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 bg-neutral-900 dark:bg-white"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="border-t border-neutral-300 dark:border-white/20 pt-6 group cursor-pointer transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-sm tracking-widest text-neutral-400 dark:text-white/40">
                  {project.year}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="text-neutral-600 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-neutral-600 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl mb-3 text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-white/80 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-white/60 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-wider text-neutral-500 dark:text-white/50 border border-neutral-300 dark:border-white/20 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
