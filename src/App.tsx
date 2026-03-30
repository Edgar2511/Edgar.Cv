import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import "./App.css";
import "./styles/sections.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Languages />
        <div className="divider" />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
