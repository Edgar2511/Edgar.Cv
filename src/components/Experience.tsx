import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase } from "react-icons/hi";
import { cvData } from "../data/cv-data";
import { useLang } from "../data/LangContext";

export default function Experience() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section" id="experience" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="section-label">{t.experience.label}</p>
        <h2 className="section-title">{t.experience.title}</h2>

        <div className="timeline">
          {t.experience.items.map((item, i) => (
            <motion.div key={i} className="timeline__item" initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}>
              <div className="timeline__dot"><HiBriefcase size={14} /></div>
              <div className="timeline__content card">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{item.role}</h3>
                    <p className="timeline__company">{item.company}</p>
                  </div>
                  <span className="timeline__period">{item.period}</span>
                </div>
                <ul className="timeline__highlights">
                  {item.highlights.map((point, j) => (
                    <motion.li key={j} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 + i * 0.2 + j * 0.05, duration: 0.4 }}>
                      {point}
                    </motion.li>
                  ))}
                </ul>
                <div className="timeline__tech">
                  {cvData.experience[i].tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
