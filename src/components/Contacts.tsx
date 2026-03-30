import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { cvData } from "../data/cv-data";
import { useLang } from "../data/LangContext";

const contactItems = [
  { icon: <HiPhone size={22} />, label: "Phone", value: cvData.contacts.phone, href: `tel:${cvData.contacts.phone.replace(/\s/g, "")}` },
  { icon: <HiMail size={22} />, label: "Email", value: cvData.contacts.email, href: `mailto:${cvData.contacts.email}` },
  { icon: <FaLinkedinIn size={22} />, label: "LinkedIn", value: "LinkedIn Profile", href: cvData.contacts.linkedin },
];

export default function Contacts() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section" id="contact" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="section-label">{t.contact.label}</p>
        <h2 className="section-title">{t.contact.title}</h2>

        <p className="contacts__subtitle">{t.contact.subtitle}</p>

        <div className="contacts__grid">
          {contactItems.map((item, i) => (
            <motion.a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="contacts__card card" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }} whileHover={{ scale: 1.03 }}>
              <div className="contacts__card-icon">{item.icon}</div>
              <div className="contacts__card-info">
                <p className="contacts__card-label">{item.label}</p>
                <p className="contacts__card-value">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
