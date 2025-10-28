import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for creating maintainable and performant React apps",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "React",
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies shaping the web",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Web Dev",
  },
  {
    title: "TypeScript Tips and Tricks",
    excerpt: "Advanced TypeScript patterns for better code quality",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "TypeScript",
  },
  {
    title: "Optimizing Performance in Next.js",
    excerpt: "Techniques to make your Next.js applications lightning fast",
    date: "February 28, 2024",
    readTime: "12 min read",
    category: "Next.js",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use What",
    excerpt: "A comprehensive guide to modern CSS layout systems",
    date: "February 20, 2024",
    readTime: "7 min read",
    category: "CSS",
  },
  {
    title: "Introduction to GraphQL",
    excerpt: "Getting started with GraphQL for modern API development",
    date: "February 15, 2024",
    readTime: "9 min read",
    category: "GraphQL",
  },
];

const Articles = () => {
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
            Featured <span className="gradient-text">Articles</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Card className="glass-card p-6 h-full flex flex-col group cursor-pointer">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted-foreground mb-6 flex-grow">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/50 pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="mt-4 group-hover:text-primary transition-colors w-full"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
