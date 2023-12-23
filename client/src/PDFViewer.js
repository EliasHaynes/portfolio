import React,{useState} from "react";
import styled from "styled-components";
import resumePDF from "./assets/Elias-Haynes-SWE-Resume.pdf";

import { Viewer, Worker,SpecialZoomLevel  } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css';




function PDFViewer() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <Container>
      <PDFContainer>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          {resumePDF && <>    <Viewer fileUrl={resumePDF} defaultScale={SpecialZoomLevel.PageFit} plugins={[defaultLayoutPluginInstance]}></Viewer></>}
          {!resumePDF && <>No PDF</>}
        </Worker>
      </PDFContainer>
    </Container>
  );
}

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const PDFContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 90vh;
  overflow-y:hidden;
  border:8px outset orangered;
  box-shadow: -16px 6px rgb(143, 44, 9);
  @media (max-width: 768px) {
    box-shadow: none;
    border:2px outset orangered;
    width: 99%;
  }


`;

export default PDFViewer;
