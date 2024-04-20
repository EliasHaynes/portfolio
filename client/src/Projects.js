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
            <ProjectSkill>React.js</ProjectSkill>
            <ProjectSkill>Auth0</ProjectSkill>
            <ProjectSkill>AWS</ProjectSkill>
            <ProjectSkill>REST</ProjectSkill>
            <ProjectSkill>Redux.js</ProjectSkill>
            <ProjectSkill>C.R.U.D</ProjectSkill>
            <ProjectSkill>Javascript</ProjectSkill>
            <ProjectSkill>Vercel</ProjectSkill>
            <ProjectSkill>MySQL</ProjectSkill>
            <ProjectSkill>CSS</ProjectSkill>
            <ProjectSkill>Express.js</ProjectSkill>
          </ProjectSkillsContainer>
          <h4>Watch this short project presentation:</h4>
          <ProjectVideo
            src="https://capstone-as3r.vercel.app/"
            title="Embed of Vehicle Maintenance App"
          ></ProjectVideo>
          <ProjectLink>
            Link to project repository:{" "}
            <a href="https://github.com/EliasHaynes/capstone">
              https://github.com/EliasHaynes/capstone
            </a>
          </ProjectLink>
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
            <ProjectSkill>React.js</ProjectSkill>
            <ProjectSkill>Vite.js</ProjectSkill>
            <ProjectSkill>Multer.js</ProjectSkill>
            <ProjectSkill>OpenAI API</ProjectSkill>
            <ProjectSkill>Express.js</ProjectSkill>
            <ProjectSkill>Puppeteer.js</ProjectSkill>
            <ProjectSkill>PDF Reader.js</ProjectSkill>
            <ProjectSkill>MySQL</ProjectSkill>
            <ProjectSkill>Cheerio.js</ProjectSkill>
            <ProjectSkill>Web Crawler</ProjectSkill>
            <ProjectSkill>Auth0</ProjectSkill>
            <ProjectSkill>styled-components.js</ProjectSkill>
          </ProjectSkillsContainer>
          <h4>Watch this short project presentation:</h4>
          <ProjectVideo
            src="https://www.guidejar.com/embed/64bf38df-8a7b-4621-98ef-b6a6a9f3c422?type=1&controls=on"
            allowfullscreen
            frameborder="0"
          ></ProjectVideo>
          <ProjectLink>
            Link to project repository:{" "}
            <a href="https://github.com/theMVPshop/jobAppTracker">
              https://github.com/theMVPshop/jobAppTracker
            </a>
          </ProjectLink>
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
            <ProjectSkill>Socket.io</ProjectSkill>
            <ProjectSkill>Express</ProjectSkill>
            <ProjectSkill>OpenAI API</ProjectSkill>
            <ProjectSkill>Tutor</ProjectSkill>
            <ProjectSkill>Tutor</ProjectSkill>
            <ProjectSkill>MySQL</ProjectSkill>
            <ProjectSkill>React.js</ProjectSkill>
            <ProjectSkill>ReCharts.js</ProjectSkill>
            <ProjectSkill>styled-components.js</ProjectSkill>
            <ProjectSkill>Vite.js</ProjectSkill>
          </ProjectSkillsContainer>
          <h4>Try out my work:</h4>
          <ProjectVideo
            src="https://chatbottutor-7e7843ea9900.herokuapp.com/"
            title="Embed of AI Chatbot Tutor"
          ></ProjectVideo>
          <ProjectLink>
            Link to project repository:{" "}
            <a href="https://github.com/theMVPshop/chatbottutor">
              https://github.com/theMVPshop/chatbottutor
            </a>
          </ProjectLink>
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
  justify-content: center;
  width: 100vw;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: rgb(63, 67, 71);
  color: white;
`;

const PortfolioNav = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectSkillsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ProjectSkill = styled.span`
  border: 1px solid orangered;
  border-radius: 5px;
  margin-right: 5px;
  font-size: 0.75em;
  margin-bottom: 5px;
  color: orangered;
  font-weight: bold;
  padding: 1%;
`;

const ButtonNav = styled.button`
  width: 30%;
  border: none;
  background-color: rgb(63, 67, 71);
  color: white;
  border-bottom: 2px solid black;
  cursor: pointer;
  margin-bottom: 5%;
`;

const SelectedButtonNav = styled(ButtonNav)`
  border-bottom: 3px solid orangered;
  color: orangered;
`;

const ProjectImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1px;
  width: 50%;
  height: 50%;
`;

const ProjectImg = styled.img`
  border: 1px solid orangered;
  width: 75vw;
  height: 30vh;
  max-width: 900px;
  max-height: 900px;
  border-radius: 20px;
  box-shadow: -16px 6px orangered;
`;

const ProjectLink = styled.div`
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectVideo = styled.iframe`
  width: 50vw;
  height: 40vh;
  border-radius: 20px;
  box-shadow: 30px -16px orangered;
  @media (max-width: 768px) {
    height:60vh;
    width:70vw;
  }
`;

export default Projects;
