import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import photo2 from "@/assets/photo2.webp";

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <ParticlesBackground />
      
      {/* Animated gradient blurs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 lg:px-20 flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-8"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.5)",
                "0 0 40px rgba(168, 85, 247, 0.6)",
                "0 0 20px rgba(236, 72, 153, 0.5)",
                "0 0 20px rgba(6, 182, 212, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full p-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
          >
            <Avatar className="w-48 h-48 lg:w-56 lg:h-56">
              <AvatarImage src={photo2} alt="Profile photo of Hariesh" className="object-cover" />
              <AvatarFallback className="text-4xl">H</AvatarFallback>
            </Avatar>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-center max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl lg:text-7xl font-bold"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Hariesh</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl lg:text-2xl text-muted-foreground"
          >
            Hardware Developer & Creative Technologist
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-muted-foreground/80"
          >
            Crafting exceptional digital experiences with cutting-edge technologies.
            Passionate about creating innovative solutions that make a difference.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan group"
              >
                Hire Me
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/resume">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Download className="mr-2" />
                Download Resume
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
