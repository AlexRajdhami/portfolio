import Design from './components/Design';
import Nav from './components/Nav';
import { About, Contact, Experience, Footer, Hero, Projects, Skills } from './components/Sections';

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink-950">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Design />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
