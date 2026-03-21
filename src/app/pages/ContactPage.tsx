import { motion } from "motion/react";
import { Mail, Linkedin, Github, Twitter, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ThemeToggle } from "../components/ThemeToggle";

export function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/parth-sood/" },
    { icon: Github, label: "Github", href: "https://github.com/psood708" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/_welp_moriarty" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-900 dark:text-white flex items-center justify-center px-4 sm:px-8 py-20">
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
      <div className="w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-light mb-4 text-neutral-900 dark:text-white"
              >
                LET'S
                <br />
                CONNECT
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-0.5 bg-neutral-900 dark:bg-white"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xl text-neutral-600 dark:text-white/70 leading-relaxed">
                Bridging the gap between humans and digital experiences
              </p>

              <div className="space-y-4">
                <div className="text-sm text-neutral-500 dark:text-white/50 tracking-widest">
                  FOR WORK:
                </div>
                <a
                  href="mailto:huynguyen.tmdt@gmail.com"
                  className="flex items-center gap-3 text-lg text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-white/70 transition-colors group"
                >
                  <Mail size={20} />
                  <span>parthsood45@gmail.com</span>
                </a>
              </div>

              <div className="pt-8">
                <div className="text-sm text-neutral-500 dark:text-white/50 tracking-widest mb-4">
                  SOCIALS:
                </div>
                <div className="flex gap-6">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-neutral-600 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm tracking-widest text-neutral-500 dark:text-white/50 mb-3"
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-neutral-300 dark:border-white/20 focus:border-neutral-900 dark:focus:border-white py-3 outline-none transition-colors text-lg text-neutral-900 dark:text-white"
                  placeholder="First Last"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm tracking-widest text-neutral-500 dark:text-white/50 mb-3"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-neutral-300 dark:border-white/20 focus:border-neutral-900 dark:focus:border-white py-3 outline-none transition-colors text-lg text-neutral-900 dark:text-white"
                  placeholder="firstlast@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm tracking-widest text-neutral-500 dark:text-white/50 mb-3"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-neutral-300 dark:border-white/20 focus:border-neutral-900 dark:focus:border-white py-3 outline-none transition-colors resize-none text-lg text-neutral-900 dark:text-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-black font-light tracking-widest text-sm hover:bg-neutral-800 dark:hover:bg-white/90 transition-colors"
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}