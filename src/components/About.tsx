import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Zap, Palette } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Building apps that work seamlessly on iOS and Android",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Writing maintainable, scalable, and testable code",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing apps for speed and smooth user experience",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Translating designs into pixel-perfect interfaces",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
              Passionate About Mobile Development
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I’m currently pursuing my MCA while working as a Flutter Developer Intern at eDigillence Infosolutions. Over the last 1.5+ years, I’ve built multiple applications from scratch and contributed to live production projects.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My core focus is Flutter development with clean architecture, structured codebases, and smooth UI experiences. I regularly work with state management using GetX, API integration, Firebase services, and performance optimization techniques. I enjoy solving UI and logic bugs and refining apps until they feel reliable and polished.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4 font-display">What I'm Looking For</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m looking for opportunities where I can work on real products, improve app architecture, and build scalable Flutter applications while learning from experienced developers. I aim to grow by tackling complex challenges and collaborating with teams that value code quality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="glass-card p-6 rounded-2xl hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
