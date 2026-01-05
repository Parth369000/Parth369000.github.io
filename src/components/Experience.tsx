import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Flutter Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2024 - Present",
    description: [
      "Developed and maintained 3+ production mobile applications with 50,000+ combined downloads",
      "Implemented complex UI designs with pixel-perfect accuracy using custom widgets",
      "Optimized app performance, reducing load times by 40% through efficient state management",
      "Collaborated with cross-functional teams to deliver features on tight deadlines",
    ],
  },
  {
    type: "work",
    title: "Flutter Developer Intern",
    company: "Mobile First Studios",
    period: "Jun 2023 - Dec 2023",
    description: [
      "Built reusable UI components and implemented responsive designs",
      "Integrated RESTful APIs and handled complex data parsing",
      "Participated in code reviews and adopted clean architecture practices",
      "Contributed to 2 app launches on both Play Store and App Store",
    ],
  },
  {
    type: "education",
    title: "Bachelor's in Computer Science",
    company: "University of Technology",
    period: "2019 - 2023",
    description: [
      "Specialized in Mobile Application Development",
      "Completed final year project on cross-platform development with Flutter",
      "Dean's List recipient for academic excellence",
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
