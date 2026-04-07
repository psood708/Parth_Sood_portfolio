import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ThemeToggle } from "../components/ThemeToggle";
import experience from "../../assets/experience.jpg";
import projects from "../../assets/projects.jpg";
import contact from "../../assets/contact.jpg";
import about from "../../assets/bout.png";

export function SectionsPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [previousSection, setPreviousSection] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollCooldown = useRef(false);

  const sections = [
    {
      number: "01",
      title: "ABOUT",
      keywords: [
        "CREATIVE MIND",
        "PROBLEM SOLVER",
        "DETAIL ORIENTED",
        "KNOW ME",
        "INNOVATIVE",
        "PASSIONATE",
      ],
      image: about,
      route: "/about",
    },
    {
      number: "02",
      title: "EXPERIENCE",
      keywords: [
        "SOFTWARE ENGINEER",
        "DATA ANALYST",
        "OPEN SOURCE CONTRIBUTOR",
        "DATA SCIENTIST",
        "ML ENGINEER",
        "TECH ENTHUSIAST",
      ],
      image: experience,
      route: "/experiences",
    },
    {
      number: "03",
      title: "PROJECTS",
      keywords: [
        "RAG",
        "AI-POWERED",
        "LLM-BASED",
        "BUILDING COOL STUFF",
        "INNOVATIVE SOLUTIONS",
        "CODE IS ART",
      ],
      image: projects,
      route: "/projects",
    },
    {
      number: "04",
      title: "CONTACT",
      keywords: [
        "STAY STRONG",
        "GO ALL IN",
        "NEVER QUIT",
        "REACH OUT",
        "CONNECT NOW",
        "LET'S TALK",
      ],
      image: contact,
      route: "/contact",
    },
  ];

  const currentSection = sections[activeSection];

  const setSection = (index: number) => {
    setPreviousSection(activeSection);
    setDirection(index > activeSection ? 1 : -1);
    setActiveSection(index);
  };

  const moveSection = (direction: 1 | -1) => {
    if (scrollCooldown.current) return;
    scrollCooldown.current = true;
    setTimeout(() => {
      scrollCooldown.current = false;
    }, 500);

    if (direction === -1 && activeSection === 0) {
      navigate("/");
      return;
    }

    const next = activeSection + direction;
    if (next < 0 || next >= sections.length) return;
    setPreviousSection(activeSection);
    setDirection(direction);
    setActiveSection(next);
  };

  // Section wheel/touch navigation
  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (event.deltaY > 20) moveSection(1);
      else if (event.deltaY < -20) moveSection(-1);
    };

    let startY = 0;
    const onTouchStart = (event: TouchEvent) => {
      startY = event.touches[0]?.clientY ?? 0;
    };
    const onTouchEnd = (event: TouchEvent) => {
      const endY = event.changedTouches[0]?.clientY ?? 0;
      if (startY - endY > 40) moveSection(1);
      else if (endY - startY > 40) moveSection(-1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [activeSection, navigate, sections.length]);

  return (
    <div className="h-screen bg-neutral-50 dark:bg-black relative overflow-hidden">
      <ThemeToggle />

      {/* Section Title - Fixed top right */}
      <div className="fixed top-8 right-8 text-right z-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-sm tracking-widest text-neutral-400 dark:text-white/50">
              {currentSection.number}
            </div>
            <div className="text-lg tracking-wider text-neutral-900 dark:text-white">
              {currentSection.title}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 space-y-4">
        {sections.map((section, index) => (
          <button
            key={section.number}
            onClick={() => setSection(index)}
            className="block group"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeSection
                    ? "bg-neutral-900 dark:bg-white scale-125"
                    : "bg-neutral-400 dark:bg-white/30"
                }`}
              />
              <span
                className={`text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity ${
                  index === activeSection
                    ? "text-neutral-900 dark:text-white"
                    : "text-neutral-500 dark:text-white/50"
                }`}
              >
                {section.number}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="h-full flex items-center justify-center px-16 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left side - Number and Image */}
            <div className="space-y-8 relative">
              <div className="text-9xl lg:text-[12rem] font-light text-neutral-200 dark:text-white/10">
                {currentSection.number}
              </div>

              <motion.div
                key={`image-${activeSection}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => navigate(currentSection.route)}
                className="relative aspect-video overflow-hidden cursor-pointer group"
              >
                <ImageWithFallback
                  src={currentSection.image}
                  alt={currentSection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{objectPosition: "40% 40%" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            </div>

            {/* Right side - Scrolling Keywords */}
            <div className="relative h-[60vh] overflow-hidden">
              <motion.div
                key={activeSection}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-4"
              >
                {currentSection.keywords.map((keyword, i) => {
                  const isHighlighted = i === Math.floor(currentSection.keywords.length / 2);
                  return (
                    <motion.div
                      key={keyword}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: isHighlighted ? 1 : 0.25, x: 0 }}
                      transition={{ duration: 0.28, delay: i * 0.02 }}
                      whileHover={{ opacity: 1, x: 10 }}
                      onClick={() => navigate(currentSection.route)}
                      className={`cursor-pointer transition-all duration-200 ${
                        isHighlighted
                          ? "text-5xl lg:text-6xl text-neutral-900 dark:text-white"
                          : "text-3xl lg:text-4xl text-neutral-400 dark:text-white/30"
                      }`}
                    >
                      <span className="font-light tracking-wider">{keyword}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
