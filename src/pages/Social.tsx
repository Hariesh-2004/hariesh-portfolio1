import { motion } from "framer-motion";
import { Linkedin, Instagram, Github, Youtube, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "hover:text-[#0A66C2]",
    glow: "hover:drop-shadow-[0_0_15px_rgba(10,102,194,0.5)]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com",
    color: "hover:text-[#E4405F]",
    glow: "hover:drop-shadow-[0_0_15px_rgba(228,64,95,0.5)]",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    color: "hover:text-primary",
    glow: "hover:drop-shadow-[0_0_15px_rgba(6,214,160,0.5)]",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com",
    color: "hover:text-[#FF0000]",
    glow: "hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    color: "hover:text-[#1DA1F2]",
    glow: "hover:drop-shadow-[0_0_15px_rgba(29,161,242,0.5)]",
  },
];

const Social = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow me on social media for updates and insights
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`glass-card p-8 rounded-2xl transition-all duration-300 ${social.color} ${social.glow}`}
            >
              <social.icon className="w-16 h-16" />
              <p className="mt-4 font-medium">{social.name}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 glass-card p-8 rounded-2xl max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Follow me for the latest projects, tech insights, and creative content
          </p>
          <div className="flex gap-4 justify-center">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Social;
