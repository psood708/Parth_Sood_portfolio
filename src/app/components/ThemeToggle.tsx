import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-colors ${
        theme === "dark"
          ? "bg-neutral-900 border-neutral-700 hover:border-neutral-500"
          : "bg-white border-orange-500 text-orange-700 hover:bg-orange-50"
      }`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-yellow-300" />
      ) : (
        <Moon size={20} className="text-orange-500" />
      )}
    </motion.button>
  );
}
