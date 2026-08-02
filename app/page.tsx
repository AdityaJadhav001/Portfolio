import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import CaseStudy from "@/components/CaseStudy";
import Skills from "@/components/Skills";
import SiteArchitecture from "@/components/SiteArchitecture";
import Footer from "@/components/Footer";
import { landmine } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Principles />
        <CaseStudy study={landmine} />
        <Skills />
        <SiteArchitecture />
      </main>
      <Footer />
    </>
  );
}
