import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, User, FileText, Briefcase, Code, Mail, BookOpen, Github, Share2, Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/about", icon: User, label: "About" },
  { path: "/resume", icon: FileText, label: "Resume" },
  { path: "/projects", icon: Briefcase, label: "Projects" },
  { path: "/skills", icon: Code, label: "Skills" },
  { path: "/contact", icon: Mail, label: "Contact" },
  { path: "/articles", icon: BookOpen, label: "Articles" },
  { path: "/profiles", icon: Github, label: "Profiles" },
  { path: "/social", icon: Share2, label: "Social" },
];

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 w-full glass-card border-b border-border/30 z-50 flex flex-row items-center justify-center px-4 md:px-6 py-3 md:py-4 gap-2 md:gap-3 lg:gap-4"
      >
        <Link to="/" className="mr-2">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center glow-cyan"
          >
            <Sparkles className="w-5 h-5 text-white" />
          </motion.div>
        </Link>
        
        {/* Desktop & Tablet Navigation */}
        <div className="hidden md:flex flex-row items-center gap-2 md:gap-3 lg:gap-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 md:p-3 rounded-xl transition-all relative group ${
                    isActive
                      ? "bg-primary text-primary-foreground glow-cyan"
                      : "bg-muted/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-card rounded-lg text-xs md:text-sm whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {item.label}
                  </motion.span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto p-2 rounded-xl bg-muted/50 text-muted-foreground hover:text-foreground transition-all"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[73px] left-0 right-0 glass-card border-b border-border/30 z-40 py-4 px-4"
          >
            <div className="flex flex-col items-center gap-3">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="w-full"
                  >
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl transition-all flex items-center gap-3 justify-center ${
                        isActive
                          ? "bg-primary text-primary-foreground glow-cyan"
                          : "bg-muted/50 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm">{item.label}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
