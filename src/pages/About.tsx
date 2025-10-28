import { motion } from "framer-motion";
import { Award, Code2, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: Code2,
    title: "100+ Projects Completed",
    description: "Successfully delivered diverse web applications",
  },
  {
    icon: Award,
    title: "Hackathon participation",
    description: "Recognition for innovative solutions",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Optimized performance in every project",
  },
];

const About = () => {
  return (
    <div className="min-h-screen py-20 px-6 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer dedicated to creating exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card p-8 lg:p-12 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">My Story</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              I'm a hardware and IoT enthusiast focused on embedded systems and real-world automation. I combine my skills in C and Java to design intelligent, efficient, and connected devices that bridge the gap between hardware and software.
            </p>
            <p>
  My journey in technology began with a curiosity for how hardware and software work together, 
  and it has grown into a passion for creating smart, connected, and efficient embedded solutions. 
  I enjoy exploring microcontrollers, sensors, and IoT systems to solve real-world challenges and bring innovative ideas to life.
</p>
<p>
  When I'm not working on circuits or code, you'll find me experimenting with new hardware modules, 
  learning emerging IoT technologies, or collaborating with others to share knowledge and build impactful projects.
</p>

          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            >
              <Card className="glass-card p-6 hover:glow-cyan transition-all duration-300 group cursor-pointer">
                <achievement.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
