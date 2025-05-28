import About from "./components/about";
import Footer from "./components/footer";
import Hero from "@/app/(home)/components/hero";
import Projects from "./components/projects";
import React from "react";
import Services from "./components/services";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </React.Fragment>
  );
};

export default Home;