import React from "react";
import "./Hero.scss";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Relators from "./Components/Relators/Relators";

const Hero = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Relators />
    </>
  );
};

export default Hero;
