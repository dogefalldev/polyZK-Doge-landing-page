import styled, { keyframes } from "styled-components";

export const fade = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const FadeIn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  animation: ${fade} 4s normal forwards ease-in-out;
`;

export const Container = styled.div`
  font-family: "Poppins";
  font-size: 16px;
  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-family: "Poppins", serif;
    color: black;
    font-weight: 600;
    font-size: min(18vw, 14em);
    line-height: 1em;
  }
`;

export const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
  color: black;
  font-weight: 600;
  font-size: 24px;
`;

export const BottomLeft = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  width: 30ch;
  max-width: 40%;
  font-weight: 600;
  color: black;
`;

export const BottomRight = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  width: 35ch;
  max-width: 40%;
  font-weight: 600;
  line-height: 1em;
  text-align: right;
  color: black;
  font-size: 20px;
`;

export const Hamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 5vw;
  right: 5vw;
  & > div {
    position: relative;
    width: 24px;
    height: 2px;
    background: #252525;
    margin-bottom: 6px;
  }
`;

export const LeftMiddle = styled.div`
  position: absolute;
  bottom: 50%;
  right: 5vw;
  font-family: "Poppins";
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 16px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
  color: #d9a71e;
`;
