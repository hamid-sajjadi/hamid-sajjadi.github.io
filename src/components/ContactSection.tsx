import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Connect</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          I'm open to Data-driven Strategy and Business Analysis roles across the EU. Feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hamidrz.sajadi@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            hamidrz.sajadi@gmail.com
          </a>
          <a
            href="tel:+393516630367"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-heading font-medium text-sm hover:border-primary/50 transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            +39 351 663 0367
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <a
            href="https://linkedin.com/in/hamidreza-sj"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg border border-border hover:border-primary/50 flex items-center justify-center transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Hamidreza-Sj"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg border border-border hover:border-primary/50 flex items-center justify-center transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      <div className="mt-20 pt-8 border-t border-border text-muted-foreground text-xs">
        © {new Date().getFullYear()} Hamid Sajjadi. All rights reserved.
      </div>
    </section>
  );
};

export default ContactSection;
