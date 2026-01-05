import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 90, type: "Frontend" },
  { name: "Flutter / Dart", level: 85, type: "Mobile" },
  { name: "TypeScript", level: 88, type: "Language" },
  { name: "Tailwind CSS", level: 95, type: "Design" },
  { name: "Node.js", level: 75, type: "Backend" },
  { name: "Git / CI/CD", level: 80, type: "DevOps" },
];

const Skills = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="skills">
      <div className="section-container">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-2"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">System Diagnostics</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-mono"
          >
            Technical_Proficiency
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 border border-primary/20 bg-card/30 backdrop-blur-sm rounded-lg relative group hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-50" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary opacity-50" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary opacity-50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary opacity-50" />

            <h3 className="text-xl font-mono text-primary mb-4">&gt; ABOUT_ME</h3>
            <p className="text-muted-foreground leading-relaxed font-light">
              I am a passionate <span className="text-primary font-mono">Flutter_Developer</span> with a knack for building immersive mobile and web experiences.
              My expertise bridges the gap between functional logic and aesthetic design.
              I treat every project as a unique problem-solving mission, optimizing for performance and user delight.
            </p>
            <div className="mt-6 flex gap-2">
              <div className="h-1 w-8 bg-primary/20 rounded-full" />
              <div className="h-1 w-8 bg-primary/40 rounded-full" />
              <div className="h-1 w-8 bg-primary/60 rounded-full" />
              <div className="h-1 w-8 bg-primary/80 rounded-full" />
              <div className="h-1 w-8 bg-primary rounded-full" />
            </div>
          </motion.div>

          {/* Skill Bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="relative"
              >
                <div className="flex justify-between mb-2 font-mono text-sm">
                  <span className="text-foreground">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-primary relative"
                  >
                    <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
