import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";
import { cvData } from "../data/cv-data";
import { useLang } from "../data/LangContext";

const navKeys = ["about", "skills", "experience", "projects", "education", "contact"] as const;

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = saved || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const toggleLang = () => setLang(lang === "en" ? "ru" : "en");

  return (
    <>
      <motion.header
        className={`header ${scrolled ? "header--scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="header__inner">
          <a href="#" className="header__logo">
            {cvData.name.split(" ")[0]}
            <span>.</span>
          </a>

          <nav className="header__nav header__nav--desktop">
            {navKeys.map((key) => (
              <a key={key} href={`#${key}`} className="header__link">
                {t.nav[key]}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <button className="header__lang-btn" onClick={toggleLang} aria-label="Toggle language">
              {lang === "en" ? "RU" : "EN"}
            </button>

            <button className="header__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>

            <button
              className="header__menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />
            <motion.nav
              className="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="sidebar__header">
                <span className="sidebar__title">Menu</span>
                <button className="sidebar__close" onClick={closeMenu} aria-label="Close menu">
                  <HiX size={22} />
                </button>
              </div>
              <div className="sidebar__links">
                {navKeys.map((key, i) => (
                  <motion.a
                    key={key}
                    href={`#${key}`}
                    className="sidebar__link"
                    onClick={closeMenu}
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {t.nav[key]}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
