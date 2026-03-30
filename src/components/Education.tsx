import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap } from "react-icons/hi";
import { useLang } from "../data/LangContext";

export default function Education() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section" id="education" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="section-label">{t.education.label}</p>
        <h2 className="section-title">{t.education.title}</h2>

        <div className="education__list">
          {t.education.items.map((item, i) => (
            <motion.div key={i} className="education__item card" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}>
              <div className="education__icon"><HiAcademicCap size={28} /></div>
              <div className="education__info">
                <h3>{item.degree}</h3>
                <p className="education__institution">{item.institution}</p>
                <p className="education__desc">{item.description}</p>
              </div>
              <span className="education__period">{item.period}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
