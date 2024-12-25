import React from "react";
import Header from "../ui/Header";
import Hero from "../ui/Hero";
import About from "../ui/About";
import Partners from "../ui/Partners";
import Services from "../ui/Services";
import Destination from "../ui/Destination";
import Counter from "../ui/Counter";
import FAQ from "../ui/FAQ";
import Testmonials from "../ui/Testmonials";
import Contact from "../ui/Contact";
import Footer from "../ui/Footer";
import Teams from "../ui/Teams";
import WhyMarvel from "../ui/WhyMarvel";
import FacebookButton from "../ui/FacebooButton";

const Landing = () => {
  return (
    <div>
      <Header />
      <FacebookButton />
      <Hero />
      <About />
      {/* <WhyMarvel /> */}
      {/* <Counter /> */}
      <Partners />
      <Services />
      <Destination />
      <Testmonials />
      <FAQ />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
