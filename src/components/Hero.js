import React from "react";
import Container from "./Container";
import Search from "./Search";

const Hero = (props) => {
  const { inputVal, setInputVal } = props;

  return (
    <section className="hero">
      <Search inputVal={inputVal} setInputVal={setInputVal} />
      <Container></Container>
    </section>
  );
};

export default Hero;