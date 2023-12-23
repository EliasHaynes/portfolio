import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Bike from "./Bike";

function LandingPage() {
  const smokeRef = useRef(null);

  useEffect(() => {
    const filter = smokeRef.current.querySelector("#turbulence");
    let frames = 1;
    let rad = Math.PI / 180;
    let bfx, bfy;

    function freqAnimation() {
      frames += 0.2;

      bfx = 0.03;
      bfy = 0.03;

      bfx += 0.005 * Math.cos(frames * rad);
      bfy += 0.005 * Math.sin(frames * rad);

      const bf = `${String(bfx)} ${String(bfy)}`;
      filter.setAttributeNS(null, "baseFrequency", bf);

      requestAnimationFrame(freqAnimation);
    }

    requestAnimationFrame(freqAnimation);

    return () => {
      // Clean up any resources or subscriptions if needed
    };
  }, []);

  return (
    <Container>
        
      <Smoke ref={smokeRef}>
        <LandingHeaderWrapper>
        <LandingHeader className="text">Hello Im</LandingHeader>
        <LandingHeader className="text">Elias Haynes!</LandingHeader>
        </LandingHeaderWrapper>
        <svg width="0">
          <filter id="filter">
            <feTurbulence
              id="turbulence"
              type="fractalNoise"
              baseFrequency=".03"
              numOctaves="20"
            />
            <feDisplacementMap in="SourceGraphic" scale="30" />
          </filter>
        </svg>
      </Smoke>
      <Bike></Bike>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const LandingHeaderWrapper = styled.div`
    height:50vh;
    width:100%;

`

const LandingHeader = styled.div`
  margin-right: 5%;
  font-size: 800%;
  @media (max-width: 768px) {
    font-size: 600%;
  }
`;

const Smoke = styled.div`
  filter: url("#filter");
  .text {
    filter: blur(5px) contrast(100%);
    color: orangered;
  }
`;


export default LandingPage;
