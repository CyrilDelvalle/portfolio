import React from "react";
import Header from "../Header";
import MainContent from "../MainContent";

const MainContainer = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <MainContent />
    </div>
  );
};

export default MainContainer;
