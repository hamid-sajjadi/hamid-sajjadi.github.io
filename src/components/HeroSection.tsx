import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-heading text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Data Scientist & Engineer
          </p>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
            <span className="text-foreground">Hamidreza</span>
            <br />
            <span className="text-gradient">Sajjadi</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            MSc in Data Science & Engineering at Politecnico di Torino. 
            Passionate about turning complex data into actionable insights through ML and analytics.
          </p>

          <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm mb-10">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Turin, Italy
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-primary" />
            <span className="hidden sm:block">Open to relocation (EU)</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:hamidrz.sajadi@gmail.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/hamidreza-sj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Hamidreza-Sj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
