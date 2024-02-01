import React from "react";
import NavBar from "./clientComponents/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Explore from "./components/Explore";
import Contact from "./components/Contact";

const Main = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Explore />
      <Contact />
    </>
  );
};

export default Main;
