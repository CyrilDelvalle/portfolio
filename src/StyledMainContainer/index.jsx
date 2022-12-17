import React from "react";
import About from "../About";
import Welcome from "../Welcome";
import History from "../History";
import Contact from "../Contact";
import { Container } from "./style";

const StyledMainContainer = () => {
  return (
    <Container>
      <Welcome />
      <About />
      <History />
      <Contact />
    </Container>
  );
};

export default StyledMainContainer;
