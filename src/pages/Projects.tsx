import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack online shopping platform with payment integration",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses",
    tech: ["Next.js", "OpenAI", "Socket.io", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management with team features",
    tech: ["React", "TypeScript", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500",
  },
  {
    title: "Portfolio Website",
    description: "Animated portfolio with 3D graphics and smooth transitions",
    tech: ["React", "Three.js", "Framer Motion", "Vite"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics",
    tech: ["Vue.js", "D3.js", "Express", "MySQL"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather updates with beautiful visualizations",
    tech: ["React Native", "OpenWeather API", "Redux"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-6 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Card className="glass-card overflow-hidden group cursor-pointer h-full">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-muted/50 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
