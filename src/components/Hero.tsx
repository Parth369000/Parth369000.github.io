import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Parth Prajapati";
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowSubtitle(true), 500);
    }
  }, [text]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background pt-16">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff9d0a_1px,transparent_1px),linear-gradient(to_bottom,#00ff9d0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm"
        >
          <span className="text-primary font-mono text-sm tracking-wide">
            Welcome to my portfolio
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-7xl font-bold font-mono tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-accent h-[1.2em]">
          {text}
          <span className="animate-pulse text-primary">|</span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showSubtitle ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            <span className="text-primary font-mono">&lt;Flutter_Developer&gt;</span>{" "}
            I build clean, scalable, and high-performance mobile applications.
            <span className="text-primary font-mono">&lt;/Flutter_Developer&gt;</span>
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary rounded font-mono transition-all hover:shadow-[0_0_20px_rgba(0,255,157,0.3)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border border-muted-foreground/20 hover:border-primary/50 text-foreground rounded font-mono transition-all"
            >
              Contact_Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
