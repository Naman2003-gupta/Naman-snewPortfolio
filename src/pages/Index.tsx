import { Loader } from "@/components/Loader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MouseGlow } from "@/components/MouseGlow";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { RecruiterBrief } from "@/components/sections/RecruiterBrief";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <MouseGlow />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <RecruiterBrief />
        <Contact />
      </main>
    </>
  );
};

export default Index;
