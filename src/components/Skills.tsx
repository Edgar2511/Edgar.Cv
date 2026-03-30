import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiNextdotjs,
  SiGit, SiVite, SiWebpack, SiFigma, SiTailwindcss, SiStyledcomponents,
  SiDocker, SiEslint,
} from "react-icons/si";
import { HiGlobe, HiCube } from "react-icons/hi";
import { cvData } from "../data/cv-data";
import { useLang } from "../data/LangContext";

const iconMap: Record<string, React.ReactNode> = {
  React: <SiReact />, TypeScript: <SiTypescript />, JavaScript: <SiJavascript />,
  HTML5: <SiHtml5 />, "CSS3 / SCSS": <SiCss />, "Tailwind CSS": <SiTailwindcss />,
  "Styled Components": <SiStyledcomponents />, "Next.js": <SiNextdotjs />,
  Git: <SiGit />, Vite: <SiVite />, Webpack: <SiWebpack />, Figma: <SiFigma />,
  "REST API": <HiGlobe />, "npm / yarn": <HiCube />, Docker: <SiDocker />,
  "ESLint / Prettier": <SiEslint />,
};

export default function Skills() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section" id="skills" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="section-label">{t.skills.label}</p>
        <h2 className="section-title">{t.skills.title}</h2>

        <div className="skills__grid">
          <div className="skills__group">
            <h3 className="skills__group-title">{t.skills.frontend}</h3>
            <div className="skills__cards">
              {cvData.skills.frontend.map((skill, i) => (
                <motion.div key={skill.name} className="skills__card card" initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }} whileHover={{ scale: 1.03 }}>
                  <div className="skills__card-icon">{iconMap[skill.name] || <HiCube />}</div>
                  <span className="skills__card-name">{skill.name}</span>
                  <div className="skills__bar">
                    <motion.div className="skills__bar-fill" initial={{ width: 0 }} animate={inView ? { width: `${skill.level}%` } : {}} transition={{ delay: 0.3 + i * 0.08, duration: 0.8, ease: "easeOut" }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="skills__group">
            <h3 className="skills__group-title">{t.skills.tools}</h3>
            <div className="skills__cards">
              {cvData.skills.tools.map((skill, i) => (
                <motion.div key={skill.name} className="skills__card card" initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }} whileHover={{ scale: 1.03 }}>
                  <div className="skills__card-icon">{iconMap[skill.name] || <HiCube />}</div>
                  <span className="skills__card-name">{skill.name}</span>
                  <div className="skills__bar">
                    <motion.div className="skills__bar-fill" initial={{ width: 0 }} animate={inView ? { width: `${skill.level}%` } : {}} transition={{ delay: 0.4 + i * 0.08, duration: 0.8, ease: "easeOut" }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills__other">
          <h3 className="skills__group-title">{t.skills.other}</h3>
          <div className="skills__tags">
            {cvData.skills.other.map((skill, i) => (
              <motion.span key={skill} className="tech-tag" initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}>
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
