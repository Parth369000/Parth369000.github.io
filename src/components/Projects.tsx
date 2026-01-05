import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce App",
    description: "A full-featured shopping app with cart, payments, and order tracking. Built with clean architecture and BLoC pattern.",
    tech: ["Flutter", "Dart", "Firebase", "Stripe", "BLoC"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    playStore: "#",
    github: "#",
  },
  {
    title: "Fitness Tracker",
    description: "Health and workout tracking app with goal setting, progress charts, and personalized workout plans.",
    tech: ["Flutter", "Provider", "SQLite", "Health Kit"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    playStore: "#",
    github: "#",
  },
  {
    title: "Food Delivery App",
    description: "Real-time food ordering with live tracking, multiple payment options, and restaurant management.",
    tech: ["Flutter", "GetX", "Firebase", "Google Maps"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    playStore: "#",
  },
  {
    title: "Task Management",
    description: "Productivity app with task scheduling, reminders, team collaboration, and progress analytics.",
    tech: ["Flutter", "Riverpod", "Hive", "Notifications"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    github: "#",
  },
  {
    title: "Social Media App",
    description: "Community platform with posts, stories, real-time messaging, and content moderation features.",
    tech: ["Flutter", "BLoC", "Firebase", "Cloud Functions"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    playStore: "#",
    github: "#",
  },
  {
    title: "Finance Dashboard",
    description: "Personal finance app with expense tracking, budgeting, bill reminders, and financial insights.",
    tech: ["Flutter", "Provider", "Charts", "Biometrics"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    github: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of mobile applications I've built, showcasing various 
              technologies and problem-solving approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card rounded-2xl overflow-hidden group hover-lift"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    {project.playStore && (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                        aria-label="View on Play Store"
                      >
                        <Play className="h-4 w-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
