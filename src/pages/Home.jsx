import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Achievements from "../components/Achievements";
import Training from "../components/Training";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Training />
      <Contact />
    </>
  );
}