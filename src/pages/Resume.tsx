import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Resume = () => {
  return (
    <div className="min-h-screen py-20 px-6 lg:px-20 flex items-center justify-center">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Download or view my professional experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="glass-card p-12 text-center">
            <FileText className="w-24 h-24 mx-auto text-primary mb-6 animate-float" />
            
            <h2 className="text-3xl font-bold mb-4">Professional Resume</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Complete overview of my skills, experience, and achievements
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan group"
                onClick={() => {
                  // Replace with your actual resume file path
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Resume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 group-hover:translate-y-1 transition-transform" />
                Download PDF
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => {
                  // Replace with your actual resume link
                  window.open('/resume.pdf', '_blank');
                }}
              >
                <ExternalLink className="mr-2" />
                View Online
              </Button>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-bold mb-2 text-primary">Education</h3>
                <p className="text-sm text-muted-foreground">Bachelor's in Computer Science</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-bold mb-2 text-secondary">Experience</h3>
                <p className="text-sm text-muted-foreground">5+ Years in Development</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-bold mb-2 text-accent">Certifications</h3>
                <p className="text-sm text-muted-foreground">Multiple Industry Certs</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
