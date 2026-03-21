import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { RollingText } from "../components/RollingText";
import { ThemeToggle } from "../components/ThemeToggle";

export function LandingPage() {
  const navigate = useNavigate();
  const [showSubtext, setShowSubtext] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubtext(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const triggerExit = () => {
    if (exiting) return;
    setExiting(true);
    setTimeout(() => {
      navigate("/sections");
    }, 1120);
  };

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (event.deltaY > 20) {
        triggerExit();
      }
    };
    let startY = 0;
    const onTouchStart = (event: TouchEvent) => {
      startY = event.touches[0]?.clientY ?? 0;
    };
    const onTouchEnd = (event: TouchEvent) => {
      const endY = event.changedTouches[0]?.clientY ?? 0;
      if (startY - endY > 50) {
        triggerExit();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [exiting]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-400 via-orange-600 to-black dark:from-orange-400 dark:via-orange-600 dark:to-black flex items-center justify-center">
      <ThemeToggle />
      
      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2)_0.5px,transparent_20px),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.12)_0.4px,transparent_16px),radial-gradient(circle_at_50%_75%,rgba(255,255,255,0.14)_0.6px,transparent_18px)] opacity-20" />

      {/* Animated gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-tl from-black via-transparent to-orange-300 dark:from-black dark:via-transparent dark:to-orange-300"
      />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(0px)" }}
          animate={exiting ? { opacity: 0, y: -120, filter: "blur(10px)", scale: 0.95 } : { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: exiting ? 1.1 : 1, ease: "easeInOut" }}
        >
          <h1 className="text-6xl sm:text-8xl lg:text-9xl mb-8 tracking-wider text-white" style={{ fontFamily: "var(--font-monoton)" }}>
            <RollingText text="Parth Sood" delay={500} />
          </h1>
        </motion.div>

        {showSubtext && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={exiting ? { opacity: 0, y: -40, filter: "blur(4px)" } : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: exiting ? 0.9 : 1, ease: "easeInOut" }}
            className="text-xl sm:text-2xl tracking-widest text-white/90 font-light"
          >
            <RollingText text="SOFTWARE ENGINEER" delay={0} />
            <br />
            <RollingText text="DATA SCIENTIST" delay={100} />
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={exiting ? { y: -12, opacity: 0, filter: "blur(6px)" } : { y: [0, 10, 0] }}
          transition={{ duration: exiting ? 0.8 : 2, repeat: exiting ? 0 : Infinity }}
          className="text-white/50 text-sm tracking-widest cursor-pointer"
          onClick={triggerExit}
        >
          SCROLL
        </motion.div>
      </motion.div>
    </div>
  );
}