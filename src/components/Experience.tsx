import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Flutter Developer Intern",
    company: "eDigillence Infosolutions",
    period: "Sep 2025 – Present",
    description: [
      "Developed production-ready Flutter UI screens following clean architecture principles",
      "Implemented GetX for state management, navigation, and dependency injection",
      "Improved app performance by reducing unnecessary widget rebuilds and optimizing API calls",
      "Collaborated with team members using proper branching workflows",
      "Fixed UI, logic, and performance issues in existing modules",
    ],
  },
  {
    type: "work",
    title: "Freelance Flutter Developer (Decoration App)",
    company: "Freelance Project",
    period: "Jun 2025 – Aug 2025",
    description: [
      "Built a multi-role event decoration management application",
      "Developed features for event listings, decoration designs, cost tracking, and details",
      "Implemented an inventory system to manage tools and item availability",
      "Handled Flutter frontend, Node.js APIs, and PostgreSQL database design",
    ],
  },
  {
    type: "work",
    title: "Freelance Flutter Developer (Tuition App)",
    company: "Freelance Project",
    period: "Apr 2025 – Jun 2025",
    description: [
      "Built a role-based application for Admins, Teachers, and Students",
      "Implemented attendance tracking, material sharing, and test management",
      "Added screenshot and screen-recording prevention for better data security",
      "Designed a responsive and clean mobile UI using Flutter and Dart",
    ],
  },
  {
    type: "education",
    title: "Master of Computer Applications (MCA)",
    company: "CHARUSAT",
    period: "2024 – 2026",
    description: [
      "Current CGPA: 8.0",
      "Focus on Advanced Software Development and Architecture",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    company: "Sardar Patel University",
    period: "2021 – 2024",
    description: [
      "CGPA: 8.61",
      "Foundation in Computer Science and Programming",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Career
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
              Experience & Education
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.title}-${exp.company}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                    {exp.type === "work" ? (
                      <Briefcase className="h-4 w-4 text-primary" />
                    ) : (
                      <GraduationCap className="h-4 w-4 text-primary" />
                    )}
                  </div>

                  <div className="glass-card p-6 rounded-2xl hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-semibold text-lg">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
