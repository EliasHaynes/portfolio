
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PDFViewer from "./PDFViewer";


function Resume() {
  
  return (
    <Container id="resume-page">
      <h2>My Experience</h2>
<PDFViewer></PDFViewer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: auto;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export default Resume;


