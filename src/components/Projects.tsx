import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "avd-assets",
    description: "Asset management system built with Flutter. Tracks organization resources with authentication and product lifecycle management.",
    tech: ["Dart", "Flutter", "Mobile"],
    link: "https://github.com/Parth369000/avd-assets",
    github: "https://github.com/Parth369000/avd-assets"
  },
  {
    title: "tuition",
    description: "Multi-role tuition management platform. Role-based access for Admins, Teachers, and Students requiring complex backend logic.",
    tech: ["Dart", "Flutter", "PostgreSQL"],
    link: "https://github.com/Parth369000/tuition",
    github: "https://github.com/Parth369000/tuition"
  },
  {
    title: "jookebox_task",
    description: "Specialized reminder application focusing on local notifications and chime scheduling functionality.",
    tech: ["C++", "Dart", "Notification"],
    link: "https://github.com/Parth369000/jookebox_task",
    github: "https://github.com/Parth369000/jookebox_task"
  },
  {
    title: "Event_Management",
    description: "Comprehensive event planning solution. Backend repository for managing event logistics and data.",
    tech: ["Backend", "Database", "API"],
    link: "https://github.com/Parth369000/Event_Management",
    github: "https://github.com/Parth369000/Event_Management"
  },
  {
    title: "decoration_backend",
    description: "Backend services powering a decoration business platform. Handles data persistence and business logic.",
    tech: ["Backend", "Services", "Logic"],
    link: "https://github.com/Parth369000/decoration_backend",
    github: "https://github.com/Parth369000/decoration_backend"
  },
  {
    title: "Parth369000",
    description: "My personal configuration repository. Contains profile metadata and special README configuration.",
    tech: ["Config", "Markdown", "Git"],
    link: "https://github.com/Parth369000/Parth369000",
    github: "https://github.com/Parth369000/Parth369000"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-background/50 relative" id="projects">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-mono">
            <span className="text-primary">&gt;</span> Executed_Protocols
          </h2>
          <div className="h-px flex-1 bg-border/50" />
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-4 bg-card/30 border border-primary/20 rounded-lg text-center backdrop-blur-sm">
            <h4 className="text-4xl font-bold text-primary mb-1">7+</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Total Projects</p>
          </div>
          <div className="p-4 bg-card/30 border border-primary/20 rounded-lg text-center backdrop-blur-sm">
            <h4 className="text-4xl font-bold text-primary mb-1">3</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Live Production</p>
          </div>
          <div className="p-4 bg-card/30 border border-primary/20 rounded-lg text-center backdrop-blur-sm">
            <h4 className="text-4xl font-bold text-primary mb-1">5+</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">From Scratch</p>
          </div>
          <div className="p-4 bg-card/30 border border-primary/20 rounded-lg text-center backdrop-blur-sm">
            <h4 className="text-4xl font-bold text-primary mb-1">Flutter</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Primary Focus</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card/50 border border-primary/20 hover:border-primary/60 rounded-lg p-6 backdrop-blur-sm transition-all hover:bg-card/80 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,157,0.1)]"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <Folder className="w-8 h-8 text-primary/40" />
              </div>

              <h3 className="text-xl font-mono font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 font-light text-sm h-20">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a href={project.github} className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href={project.link} className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live_View
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
