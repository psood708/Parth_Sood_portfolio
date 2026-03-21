import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface RollingTextProps {
  text: string;
  delay?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export function RollingText({ text, delay = 0 }: RollingTextProps) {
  const [displayText, setDisplayText] = useState(
    text.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
  );
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText((prev) =>
          text.split("").map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
        );

        iteration += 1 / 3;

        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplayText(text.split(""));
          setIsComplete(true);
        }
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className="inline-block relative">
      {displayText.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: delay / 1000 + index * 0.02 }}
          className={isComplete ? "text-white" : "text-white/70"}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}