import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowDown, HiMail } from "react-icons/hi";
import { cvData } from "../data/cv-data";
import { useLang } from "../data/LangContext";

export default function Hero() {
  const { t } = useLang();
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-glow" />

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.p className="hero__greeting" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
          {t.hero.greeting}
        </motion.p>

        <motion.h1 className="hero__name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
          {cvData.name}
        </motion.h1>

        <motion.p className="hero__title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
          {cvData.title}
        </motion.p>

        <motion.p className="hero__tagline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
          {cvData.tagline}
        </motion.p>

        <motion.div className="hero__buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
          <a href="#projects" className="hero__btn hero__btn--primary">
            <HiArrowDown size={18} />
            {t.hero.viewWork}
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            <HiMail size={18} />
            {t.hero.contactMe}
          </a>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {atTop && (
          <motion.div className="hero__scroll-hint" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.4 }}>
            <div className="hero__scroll-mouse">
              <div className="hero__scroll-wheel" />
            </div>
            <span className="hero__scroll-text">{t.hero.scroll}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
