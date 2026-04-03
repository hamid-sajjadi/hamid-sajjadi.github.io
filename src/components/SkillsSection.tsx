import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Microsoft Office & BI",
    skills: ["Excel", "PowerPoint", "Project", "Power BI", "Tableau"],
  },
  {
    title: "Programming & Data",
    skills: ["Python", "SQL", "AWS (Athena)", "Git", "SAP"],
  },
  {
    title: "Analytics & Modeling",
    skills: ["Minitab", "Predictive Modeling", "NLP", "Time-Series Analysis", "Anomaly Detection"],
  },
  {
    title: "Soft Skills",
    skills: ["Analytical Thinking", "Team Collaboration", "Problem Solving", "Communication"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Expertise</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Skills & Tools</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card-gradient border border-border rounded-xl p-6 glow-shadow"
          >
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
