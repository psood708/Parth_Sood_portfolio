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
        "Optimized patient data retrieval and physician targeting through advanced NLP and graph-based modeling",
      achievements: [
        "Constructed a patient cohort extraction pipeline from scratch, reducing analyst query time by 55% across 10M+ structured and free-text clinical records",
        "Integrated a physician referral graph using PubMedBERT embeddings that surfaced 2x more high-value targets compared to previous rule-based methods",
        "Applied BioBERT and clustering techniques to 500K+ EHR notes, uncovering distinct prescribing patterns that reduced client targeting spend by 20%",
      ],
    },
    {
      company: "Space Applications Centre, ISRO",
      position: "Machine Learning Researcher",
      period: "June'2024 - Sept'2024",
      description:
        "Reconstructed large-scale satellite telemetry ingestion and implemented real-time anomaly detection using distributed computing",
      achievements: [
        "Reconstructed telemetry ingestion using PySpark distributed pipelines over 10TB+ of satellite data, achieving a 60% increase in end-to-end throughput",
        "Implemented a real-time anomaly detection layer using Kalman Filters that reduced false-positive alerts by 38% for streaming telemetry",
        "Optimized resource orchestration for Spark training jobs, saving 12+ GPU-hours per weekly run through targeted performance tuning",
      ],
    },
    {
      company: "MoMacMo",
      position: "Software Engineer Intern",
      period: "Apr'2023 - Mar'2024",
      description:
        "Transitioned seismic-data systems to cloud-native AWS environments, resulting in substantial gains in model accuracy and revenue",
      achievements: [
        "Migrated a monolithic Spring Boot stack to a cloud-native AWS environment, lifting seismic-data ML model accuracy by 40% with zero production downtime",
        "Designed and launched RESTful APIs via AWS Elastic Beanstalk and Cognito, which directly supported a 35% increase in quarterly profitability",
        "Transitioned core services to a cloud-native architecture within a 6-week timeframe to support live high-stakes client demonstrations",
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
