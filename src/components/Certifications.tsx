import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Flutter Dart – The Complete Guide",
    issuer: "Udemy",
    year: "2025",
  },
  {
    title: "Flutter Development Bootcamp",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "AWS Students Community Day",
    issuer: "Participation Certificate",
    year: "2024",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
        <div className="section-container">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4">
            Crital_Certifications
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-primary/20 p-6 rounded-lg flex items-start gap-4 hover:border-primary/50 transition-colors"
            >
                <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                <span className="text-xs font-mono text-primary mt-2 block">{cert.year}</span>
                </div>
            </motion.div>
            ))}
        </div>
        </div>
    </section>
  );
};

export default Certifications;
