import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Scientist (Internship)",
    company: "Tierra S.p.A",
    location: "Torino, Italy",
    period: "Oct 2025 – Feb 2026",
    bullets: [
      "Performed exploratory data analysis and feature engineering on CAN-bus data for predictive maintenance",
      "Ran and analyzed the CAN-BERT baseline on company dataset using HPC, AWS, and MLflow",
      "Implemented an unsupervised LSTM-Autoencoder for time-series anomaly detection",
      "Evaluated models with precision, recall, and F1, reporting results to the team",
    ],
  },
  {
    role: "Smart Passenger Information System",
    company: "Hitachi Rail (University-Industry)",
    location: "Torino, Italy",
    period: "Sep 2023 – Feb 2024",
    bullets: [
      "Led a university-industry collaboration to develop a user-centric public transportation app",
      "Designed real-time feedback systems for cleanliness, crowding, and environmental conditions",
      "Analyzed crowdsourced feedback to drive data-informed improvements in inclusivity",
      "Boosted user engagement through interactive games and gamification elements",
    ],
  },
  {
    role: "Data Analyst (Full-time)",
    company: "Decamond",
    location: "Tehran",
    period: "Nov 2020 – Aug 2022",
    bullets: [
      "Built predictive models for customer lifetime value (LTV) and behavior forecasting",
      "Developed ML pipelines for delivery time, demand, and operational performance prediction",
      "Designed routing and optimization frameworks; communicated insights via reports",
    ],
  },
  {
    role: "Data Analyst (Internship)",
    company: "University of Tehran",
    location: "Tehran",
    period: "Sep 2019 – Oct 2020",
    bullets: [
      "Built customer churn prediction models achieving 87% accuracy",
      "Performed EDA and feature engineering on real-estate data (R² = 0.81)",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Career</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Experience</h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-10"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-primary" />
              </div>

              <div className="bg-card-gradient border border-border rounded-xl p-6 glow-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
                </div>
                <p className="text-primary text-sm mb-4">{exp.company} · {exp.location}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
