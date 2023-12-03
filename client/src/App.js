import React from "react";
import styled from "styled-components";
import About from "./About";
import Projects from "./Projects";
import Work from "./Work";
import Resume from "./Resume";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="parentContainer">
      <About></About>
      <Projects></Projects>
      <Work></Work>
      <Resume></Resume>
    </div>
  );
}

// const ParentContainer = styled.div `
//   display:flex;
//   flex-flow: column nowrap;
//   align-content: center;
//   width:100%;
//   height:100%;
// `
export default App;
