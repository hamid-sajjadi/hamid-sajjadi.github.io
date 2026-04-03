import { motion } from "framer-motion";
import { Award, Brain, Building2, Activity } from "lucide-react";

const projects = [
  {
    title: "AI Financial Education Platform",
    tag: "Business Strategy — 3rd Place",
    description:
      "Analyzed global demand for financial education and developed a B2C strategy for an AI-powered learning platform. Conducted demand analysis, strategy planning, and cost analysis.",
    icon: Award,
  },
  {
    title: "Intent Classification Pipeline",
    tag: "NLP / Audio ML",
    description:
      "Built an end-to-end pipeline using MFCC feature extraction and data balancing to evaluate and deploy the optimal classification model.",
    icon: Brain,
  },
  {
    title: "Diabetes Prediction System",
    tag: "Healthcare Analytics",
    description:
      "Developed a predictive system for diabetes onset using the Pima Indians Database and IBM SPSS Modeler to identify high-risk clinical factors.",
    icon: Activity,
  },
  {
    title: "Tehran Cement Company Strategy",
    tag: "Business Intelligence",
    description:
      "Conducted strategic market analysis and business plan using public stock market data to identify growth opportunities and competitive positioning.",
    icon: Building2,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Portfolio</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Notable Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, i) => {
          const Icon = proj.icon;
          return (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card-gradient border border-border rounded-xl p-6 glow-shadow hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {proj.title}
                  </h3>
                  <span className="text-xs text-primary/80 font-mono">{proj.tag}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{proj.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
