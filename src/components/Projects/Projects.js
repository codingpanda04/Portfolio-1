import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/netflix.png";
import kibarua from "../../Assets/Projects/kib-logo.png";
import tar from "../../Assets/Projects/tar.jpg";
import tfp from "../../Assets/Projects/tfp.jpg";
import aba from "../../Assets/Projects/aba.jpg";
import quickstay from "../../Assets/Projects/quickstay.svg";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickstay}
              isBlog={false}
              title="Quick Stay"
              description="A hotel booking website that lets users easily check in from the comfort of their home and pay seamlessly with stripe integration. For hotel owners, create and manage your hotels nad rooms and watch your revenue sky rocket."
              ghLink="https://github.com/codingpanda04/Quickstay"
              demoLink="https://quickstay-ashy.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="A netflix clone that uses firebase for user authentication and the tmdb apia for fetching and displaying movies and titles."
              ghLink="https://github.com/codingpanda04/netflix-clone"
              demoLink="https://netflix-clone-ochre-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://verbatix.vercel.app/verbatix-logo.svg"}
              isBlog={false}
              title="Verbatix"
              description="Made entirely in typescript,it's a text to speech software with alternative voices and accents. It's free and users can download the generated speech in mp3 format."
              ghLink="https://github.com/codingpanda04/Verbatix---Text-To-Speech-Software"
              demoLink="https://verbatix.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kibarua}
              isBlog={false}
              title="Kibarua App"
              description="A freelance plartform aiming to bridge the gap between middle class workers in Kenya (masons, nunnies etc). Entirely made in MERN stack but still in production."
              ghLink="https://kibarua-app.vercel.app/"
              demoLink="https://kibarua-app.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aba}
              isBlog={true}
              title="A Bastard's Allure"
              description="A paranormal romance novel that incorporates the enemies to lovers trope. Sees a bastard, Gabriel Sinclair, rise to power despite the many difficulties he faces"
              demoLink="https://www.webnovel.com/book/a-bastard's-allure_29408191908838805"
              ghLink="https://www.webnovel.com/book/a-bastard's-allure_29408191908838805"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tfp}
              isBlog={true}
              title="The Fugitive Princess"
              description="A princess, locked in a castle to be used for the benefit of men. But what happens when she gets her hand on power regarded as forbidden and vile?"
              ghLink="https://www.webnovel.com/book/the-fugitive-princess_24492241506957205"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tar}
              isBlog={true}
              title="The Assassin's Redemption"
              description="Her goal was one: Infiltrate the castle in a guise and kill the prince. But what happens she's drawn into his annoying yet charming eyes? Will she avenge her parents when she develops a soft spot for prince Alexander?"
              ghLink="https://www.webnovel.com/book/the-assassin's-redemption-a-princess's-journey-to-forgiveness_25780022505883505"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
