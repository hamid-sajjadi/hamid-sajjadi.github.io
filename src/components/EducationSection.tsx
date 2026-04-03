import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "MSc in Data Science and Engineering",
    school: "Politecnico di Torino",
    period: "Sep 2022 – Expected Jul 2026",
    location: "Torino, Italy",
  },
  {
    degree: "BSc in Management / Industrial Engineering",
    school: "Mazandaran University of Science & Technology",
    period: "Sep 2012 – Feb 2016",
    location: "Babol, Iran",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Academic</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Education</h2>
      </motion.div>

      <div className="grid gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card-gradient border border-border rounded-xl p-6 glow-shadow flex gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{edu.degree}</h3>
              <p className="text-primary text-sm">{edu.school}</p>
              <p className="text-muted-foreground text-sm mt-1">
                {edu.period} · {edu.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
