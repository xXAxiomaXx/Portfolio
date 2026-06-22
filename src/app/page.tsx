import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  );
}