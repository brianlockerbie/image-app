import React from "react";
import Container from "./Container";
import Search from "./Search";

const Hero = () => {
  return (
    <section className="hero">
      <Search />
      <Container></Container>
    </section>
  );
};

export default Hero;