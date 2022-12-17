import React from "react";
import Footer from "../Footer";
import StyledMainContainer from "../StyledMainContainer";
import { Container } from "./style";

const MainContent = () => {
  return (
    <Container>
      <StyledMainContainer />
      <Footer />
    </Container>
  );
};

export default MainContent;
