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
          <h4>Vehicle</h4>
          <ProjectSkills>
            <span>Vehicle</span>
            <span>Vehicle</span>
            <span>Vehicle</span>
            <span>Vehicle</span>
            <span>Vehicle API</span>
            <span></span>
          </ProjectSkills>
          <h4>Watch this presentation of the project</h4>
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
          <h4>Job</h4>
          <ProjectSkills>
            <span>job</span>
            <span>job</span>
            <span>job</span>
            <span>job</span>
            <span>job</span>
            <span></span>
          </ProjectSkills>
          <h4>Watch this presentation of the project</h4>
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

          <h4>Tutor</h4>
          <ProjectSkills>
            <span>Tutor</span>
            <span>Tutor</span>
            <span>Tutor</span>
            <span>Tutor</span>
            <span>Tutor</span>
            <span></span>
          </ProjectSkills>
          <h4>Watch this presentation of the project</h4>
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
`;

const ProjectSkills = styled.div`
  margin-right: 2%;
`;

const ButtonNav = styled.button`
  border: none;
  border-bottom: 2px solid blue;
`;

const SelectedButtonNav = styled(ButtonNav)`
  border-bottom: 3px solid red;
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
  width: 75%;
  height: 75%;
`;

export default Projects;
