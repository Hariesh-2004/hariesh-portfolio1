import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const profiles = [
  {
    name: "GitHub",
    username: "@yourusername",
    description: "Open source contributions and personal projects",
    stats: "150+ repositories",
    color: "from-purple-500 to-pink-500",
    link: "https://github.com",
  },
  {
    name: "LeetCode",
    username: "@yourusername",
    description: "Algorithmic problem solving",
    stats: "500+ problems solved",
    color: "from-orange-500 to-yellow-500",
    link: "https://leetcode.com",
  },
  {
    name: "SkillRack",
    username: "@yourusername",
    description: "Programming challenges and contests",
    stats: "Top 5% rank",
    color: "from-green-500 to-teal-500",
    link: "https://skillrack.com",
  },
  {
    name: "Stack Overflow",
    username: "@yourusername",
    description: "Helping the developer community",
    stats: "2k+ reputation",
    color: "from-orange-600 to-red-500",
    link: "https://stackoverflow.com",
  },
  {
    name: "CodePen",
    username: "@yourusername",
    description: "Creative coding experiments",
    stats: "50+ pens",
    color: "from-blue-500 to-cyan-500",
    link: "https://codepen.io",
  },
  {
    name: "Dev.to",
    username: "@yourusername",
    description: "Technical writing and tutorials",
    stats: "25+ articles",
    color: "from-purple-600 to-blue-600",
    link: "https://dev.to",
  },
];

const Profiles = () => {
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
            Coding <span className="gradient-text">Profiles</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find me across various coding platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="glass-card p-6 h-full group cursor-pointer relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {profile.name}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">{profile.username}</p>
                  <p className="text-muted-foreground mb-4">{profile.description}</p>

                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${profile.color} rounded-lg text-sm font-medium text-white`}>
                    {profile.stats}
                  </div>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
