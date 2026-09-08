import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
// import Experience from "./components/Experience";
import ExperienceCard from "./components/ExperienceCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DemoVideos from "./components/DemoVideos";
import Bottomnav from "./components/Bottomnav";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-[#0B0D14] min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <DemoVideos />
        <ExperienceCard />
        <Contact />
        <Footer />
        <Bottomnav/>
      </div>
    </ThemeProvider>
  );
}

export default App;