import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiLightningBolt, HiUsers } from "react-icons/hi";
import { useLang } from "../data/LangContext";

const icons = [<HiCode size={24} />, <HiLightningBolt size={24} />, <HiUsers size={24} />];

export default function About() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section" id="about" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="section-label">{t.about.label}</p>
        <h2 className="section-title">{t.about.title}</h2>

        <div className="about__content">
          <div className="about__text">
            {t.about.paragraphs.map((paragraph, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}>
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="about__highlights">
            {t.about.highlights.map((item, i) => (
              <motion.div key={item.title} className="about__highlight card" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}>
                <div className="about__highlight-icon">{icons[i]}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
