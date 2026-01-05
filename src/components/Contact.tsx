import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background relative" id="contact">
      {/* Background Graphic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card/30 border border-primary/20 backdrop-blur-md rounded-lg p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-6">
            Initialize_Connection
          </h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Ready to collaborate on the next big digital innovation?
            Transmission lines are open.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="https://github.com/Parth369000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-background border border-border hover:border-primary/50 hover:bg-primary/5 rounded font-mono transition-all group w-full md:w-auto text-center justify-center"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span>/github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/parth-prajapati-b988ab319"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-background border border-border hover:border-primary/50 hover:bg-primary/5 rounded font-mono transition-all group w-full md:w-auto text-center justify-center"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span>/linkedin</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded font-mono transition-all w-full md:w-auto text-center justify-center font-bold"
            >
              <Mail className="w-5 h-5" />
              <span>Send_Packet</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 text-sm text-muted-foreground font-mono">
            <p>&copy; {new Date().getFullYear()} Parth Prajapati. System.AllRightsReserved(true)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
