import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { SiNpm } from "react-icons/si";
import { cvData } from "../data/cv-data";
import { useLang } from "../data/LangContext";

function getLinkIcon(label: string) {
  if (label.toLowerCase() === "npm") return <SiNpm size={16} />;
  return <HiExternalLink size={16} />;
}

export default function Projects() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const total = cvData.projects.length;

  const go = (idx: number) => setCurrent(((idx % total) + total) % total);

  const tProject = t.projects.items[current];
  const dataProject = cvData.projects[current];

  return (
    <section className="section" id="projects" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div className="projects__header">
          <div>
            <p className="section-label">{t.projects.label}</p>
            <h2 className="section-title">{t.projects.title}</h2>
          </div>
          <div className="projects__nav">
            <button className="projects__nav-btn" onClick={() => go(current - 1)} aria-label="Previous">
              <HiChevronLeft size={20} />
            </button>
            <span className="projects__nav-count">
              {String(current + 1).padStart(2, "0")}
              <span> / {String(total).padStart(2, "0")}</span>
            </span>
            <button className="projects__nav-btn" onClick={() => go(current + 1)} aria-label="Next">
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="projects__viewport">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="projects__card card gradient-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <h3 className="projects__card-title">{tProject.title}</h3>
              <p className="projects__card-description">{tProject.description}</p>

              {"note" in tProject && tProject.note && (
                <p className="projects__card-note">{tProject.note}</p>
              )}

              <div className="projects__card-links">
                {dataProject.links.map((link) => (
                  <a key={link.url + link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="projects__link-btn">
                    {getLinkIcon(link.label)}
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="projects__card-tech">
                {dataProject.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="projects__dots">
          {cvData.projects.map((_, i) => (
            <button key={i} className={`projects__dot ${i === current ? "projects__dot--active" : ""}`} onClick={() => go(i)} aria-label={`Project ${i + 1}`} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
