import { cvData } from "../data/cv-data";
import { useLang } from "../data/LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          &copy; {new Date().getFullYear()} {cvData.name}. {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
