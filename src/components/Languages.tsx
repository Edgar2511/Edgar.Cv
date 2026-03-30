import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiTranslate } from "react-icons/hi";
import { cvData } from "../data/cv-data";
import { useLang } from "../data/LangContext";

export default function Languages() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section" id="languages" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="section-label">{t.languages.label}</p>
        <h2 className="section-title">{t.languages.title}</h2>

        <div className="languages__grid">
          {t.languages.items.map((lang, i) => (
            <motion.div key={lang.name} className="languages__card card" initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}>
              <div className="languages__card-icon"><HiTranslate size={24} /></div>
              <h3>{lang.name}</h3>
              <p className="languages__level">{lang.level}</p>
              <div className="languages__bar">
                <motion.div className="languages__bar-fill" initial={{ width: 0 }} animate={inView ? { width: `${cvData.languages[i].percent}%` } : {}} transition={{ delay: 0.4 + i * 0.15, duration: 0.8, ease: "easeOut" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
