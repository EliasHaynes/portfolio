import React, { useState } from "react";
import styled from "styled-components";
import vehicleImg from "./assets/Capstone-Icon-Ss.png";
import jobImg from "./assets/Screenshot 2023-12-02 200024.png";
import tutorImg from "./assets/Screenshot 2023-12-02 195841.png";

function Projects() {
  const [currentProject, setCurrentProject] = useState("Vehicle"); // "Vehicle"|| "Job" || "Tutor"

  function displayCurrentProject() {
    switch (currentProject) {
      case "Vehicle":
        return <Vehicle />;
      case "Job":
        return <Job />;
      case "Tutor":
        return <Tutor />;
    }

    function Vehicle() {
      return (
        <ProjectContainer>
          <ProjectImgContainer>
            <ProjectImg src={vehicleImg} className="vehicle-img" />
          </ProjectImgContainer>
          <h4>Scheduled Vehicle Maintenance</h4>
          <ProjectSkillsContainer>
            <ProjectSkill>Vehicle</ProjectSkill>
            <ProjectSkill>Vehicle</ProjectSkill>
            <ProjectSkill>Vehicle</ProjectSkill>
            <ProjectSkill>Vehicle</ProjectSkill>
            <ProjectSkill>Vehicle API</ProjectSkill>
            <ProjectSkill>Maintenance App</ProjectSkill>
            <ProjectSkill>Maintenance App</ProjectSkill>
            <ProjectSkill>Maintenance App</ProjectSkill>
            
          </ProjectSkillsContainer>
          <h4>Watch this short project presentation</h4>
          <ProjectVideo
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eN4wCX8p2Mc?si=MGWMIN3ob9GUojD0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></ProjectVideo>
          <h4>
            Link to project repository:{" "}
            <a href="https://github.com/EliasHaynes/capstone">
              https://github.com/EliasHaynes/capstone
            </a>
          </h4>
        </ProjectContainer>
      );
    }

    function Job() {
      return (
        <ProjectContainer>
          <ProjectImgContainer>
            <ProjectImg src={jobImg} />
          </ProjectImgContainer>
          <h4>Job Application Tracker</h4>
          <ProjectSkillsContainer>
            <ProjectSkill>job</ProjectSkill>
            <ProjectSkill>job</ProjectSkill>
            <ProjectSkill>job</ProjectSkill>
            <ProjectSkill>job</ProjectSkill>
            <ProjectSkill>job</ProjectSkill>
            <ProjectSkill></ProjectSkill>
          </ProjectSkillsContainer>
          <h4>Watch this short project presentation</h4>
          <ProjectVideo
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eN4wCX8p2Mc?si=MGWMIN3ob9GUojD0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></ProjectVideo>
          <h4>
            Link to project repository:{" "}
            <a href="https://github.com/theMVPshop/jobAppTracker">
              https://github.com/theMVPshop/jobAppTracker
            </a>
          </h4>
        </ProjectContainer>
      );
    }

    function Tutor() {
      return (
        <ProjectContainer>
          <ProjectImgContainer>
            <ProjectImg src={tutorImg} />
          </ProjectImgContainer>

          <h4>AI Chatbot Tutor</h4>
          <ProjectSkillsContainer>
            <ProjectSkill>Tutor</ProjectSkill>
            <ProjectSkill>Tutor</ProjectSkill>
            <ProjectSkill>Tutor</ProjectSkill>
            <ProjectSkill>Tutor</ProjectSkill>
            <ProjectSkill>Tutor</ProjectSkill>
            <ProjectSkill></ProjectSkill>
          </ProjectSkillsContainer>
          <h4>Watch this short project presentation</h4>
          <ProjectVideo
            src="https://www.youtube.com/embed/eN4wCX8p2Mc?si=MGWMIN3ob9GUojD0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></ProjectVideo>
          <h4>
            Link to project repository:{" "}
            <a href="https://github.com/theMVPshop/chatbottutor">
              https://github.com/theMVPshop/chatbottutor
            </a>
          </h4>
        </ProjectContainer>
      );
    }
  }

  return (
    <Container>
      <h2>My Latest Work</h2>
      <div>
        <PortfolioNav>
          {currentProject === "Vehicle" ? (
            <SelectedButtonNav>Scheduled Vehicle Maintenance</SelectedButtonNav>
          ) : (
            <ButtonNav onClick={() => setCurrentProject("Vehicle")}>
              Scheduled Vehicle Maintenance
            </ButtonNav>
          )}
          {currentProject === "Job" ? (
            <SelectedButtonNav>Job Application Tracker</SelectedButtonNav>
          ) : (
            <ButtonNav onClick={() => setCurrentProject("Job")}>
              Job Application Tracker
            </ButtonNav>
          )}
          {currentProject === "Tutor" ? (
            <SelectedButtonNav>AI Chatbot Tutor</SelectedButtonNav>
          ) : (
            <ButtonNav onClick={() => setCurrentProject("Tutor")}>
              AI Chatbot Tutor
            </ButtonNav>
          )}
        </PortfolioNav>
        {displayCurrentProject()}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100vw;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const PortfolioNav = styled.div`
  display: flex;
  justify-content: space-around;
  
  @media (max-width:768px) {
    flex-direction: column;
    align-items:center;
  }
`;

const ProjectSkillsContainer = styled.div`
display:flex;
flex-flow: row wrap;
`;

const ProjectSkill = styled.span`
border: 1px solid orangered;
  border-radius:5px;
  margin-right:5px;
  font-size:.75em;
  margin-bottom: 5px;
  color: orangered;
`

const ButtonNav = styled.button`
  width:30%;
  border: none;
  background-color: black;
  color:white;
  border-bottom: 2px solid purple;
  cursor: pointer;
  margin-bottom: 5%;
`;

const SelectedButtonNav = styled(ButtonNav)`
  border-bottom: 3px solid red;
  color: red;
`;

const ProjectImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1px;
  width: 50%;
  height: 50%;
`;

const ProjectImg = styled.img`
  border: 1px solid blue;
  width: 75vw;
  height: 30vh;
  max-width: 900px;
  max-height: 900px;
`;


const ProjectVideo = styled.iframe`
  width: 50vw;
  height: 30vh;
`;



export default Projects;
