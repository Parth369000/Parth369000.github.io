import { motion } from "framer-motion";
import { Quote as QuoteIcon } from "lucide-react";

const Quote = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[60px]" />
            </div>

            <div className="section-container max-w-4xl mx-auto text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative p-8 md:p-14 rounded-3xl glass-card border border-primary/10 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                >
                    <QuoteIcon className="w-16 h-16 text-primary/20 absolute -top-4 -left-4 transform -rotate-12" />
                    <QuoteIcon className="w-16 h-16 text-primary/20 absolute -bottom-4 -right-4 transform rotate-12 rotate-180" />

                    <blockquote className="text-xl md:text-3xl font-light leading-relaxed mb-8 relative z-10 text-foreground/90">
                        <span className="text-primary text-4xl leading-none align-top mr-2">"</span>
                        Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.
                        <span className="text-primary text-4xl leading-none align-bottom ml-2">"</span>
                    </blockquote>

                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-primary/50" />
                        <cite className="text-primary font-mono not-italic font-medium tracking-wide text-sm md:text-base">
                            Patrick McKenzie
                        </cite>
                        <div className="h-px w-12 bg-primary/50" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Quote;
