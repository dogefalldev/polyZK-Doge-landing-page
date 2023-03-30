import React from "react";
import {
  Container,
  TopLeft,
  BottomLeft,
  BottomRight,
  Hamburger,
} from "./styles";

const Overlay = () => {
  return (
    <Container>
      <TopLeft>
        <h1>
          PolyZK
          <br />
          DOGE -
        </h1>
        <p>The first memecoin in Polygon ZKEVM. —</p>
      </TopLeft>
      <BottomLeft>Stay tuned, big updates soon!</BottomLeft>
      <BottomRight>
        wow
        <br />
        much fundamentals
        <br />
        very zero knowledge
        <br />
        to the moon
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
    </Container>
  );
};

export default Overlay;
