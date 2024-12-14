import About from "@/components/about/page";
import Contact from "@/components/contact/page";
import Footer from "@/components/footer/page";
import Hero from "@/components/hero/page";
import Navbar from "@/components/navbar/page";
import Projects from "@/components/project/page";
import Image from "next/image";

export default function Home() {
  return (
  <>
  
  <Hero />
  <About />
  <Projects />
  <Contact />
  
  </>  
  );
}
