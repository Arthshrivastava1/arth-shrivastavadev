import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About, Skills, Timeline, Experience, Projects,
  Achievements, Certificates, Services, Contact, Footer,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <CustomCursor />

      {/* Global background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[10%] h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-[50%] h-[36rem] w-[36rem] rounded-full bg-secondary/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.05] noise" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Experience />
        <Projects />
        <Achievements />
        <Certificates />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
