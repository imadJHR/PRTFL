
import React from "react";
import About from "@/containers/about";
import Home from "@/containers/home";
import Skills from "@/containers/skills";
import Projects from "@/containers/projects";
import Contact from "@/containers/contact";
import ScrollToTop from "@/components/scroll-to-top";
import Navbar from "@/components/ui/navigation/Navbar";
import Footer from "@/components/footer";
import Certificat from "@/containers/Certificat";

const page = () => {
  return (
    <main className="pt-12">
      <Navbar/>
      <div  className="container space-y-16 py-28  ">
      <Home />
      <About />
      <Skills />
      <div className="container space-y-16 py-28 ">
      <Projects />
      </div>
      <Contact />
      </div>
      <ScrollToTop/>
      <Certificat/>
      <Footer/>
      
    </main>
  );
};

export default page;
