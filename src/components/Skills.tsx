import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Flutter", level: 90, category: "core" },
  { name: "Dart", level: 88, category: "core" },
  { name: "State Management", level: 85, category: "core" },
  { name: "REST APIs", level: 87, category: "backend" },
  { name: "Firebase", level: 82, category: "backend" },
  { name: "UI/UX Implementation", level: 90, category: "frontend" },
  { name: "Git & Version Control", level: 85, category: "tools" },
  { name: "App Optimization", level: 80, category: "core" },
];

const technologies = [
  "Flutter", "Dart", "BLoC", "GetX", "Provider", "Riverpod",
  "Firebase", "REST APIs", "GraphQL", "SQLite", "Hive",
  "Git", "GitHub", "CI/CD", "Android Studio", "VS Code",
  "Figma", "Adobe XD", "Postman", "App Store", "Play Store"
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Skills & Expertise
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
              Technologies I Work With
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Skill Bars */}
            <div className="space-y-6">
              <h3 className="font-semibold text-lg mb-6">Core Competencies</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technology Tags */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.02 * index }}
                    className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
