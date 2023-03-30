import React from "react";
import { PageHeader } from "../components/PageHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HTML from "../img/html.png";
import CSS from "../img/css.png";
import JS from "../img/java-script.png";
import ReactJS from "../img/React.png";
import angularJS from "../img/angular.png";

const Aboutpage = () => {
  return (
    <div className="pageBody">
      <PageHeader text="About Me" />
      <div className="aboutMe">
        <p className="display-4 ps-5"> Hello!</p>
        <p className="p-2 ps-5">
        Before I became a web developer, I worked at Gelato Fiasco, starting as a kitchen worker at one of their stores. I made gelato for every customer that walked in the door. When they decided to expand their business by building a factory to sell pints of gelato in stores all over America, they asked me and a few others to work there. I worked hard and was eventually put in charge of one of the two shifts, where I treated every day as a competition to see who could be more productive.
        </p>
        <p className="p-2 ps-5">
        As the company grew, they bought new equipment to help us produce more gelato. Because my shift was more productive, I was put in charge of learning and maintaining the new machines. When the factory manager left, I was promoted to her job where I was in charge of everything until the company decided to close the factory and switch to a third-party provider of cost resounds.
        </p>
        <p className="p-2 ps-5">
        After working at Gelato Fiasco, I decided to pursue my dream of becoming a web developer. I enrolled in a front-end development boot camp in Maryland where I learned HTML, CSS, and JavaScript. My first job in tech was as a contract quality assurance worker at Concourse Federal Group. I reviewed their code for errors, particularly spelling and grammar issues due to non-native English speakers writing the code.</p>
        <p className="p-2 ps-5">
        My next job was at Clicknotices, where I focused on code refactoring. They had an old website with a lot of copy-and-pasted code that needed to be made cleaner and more reusable. Unfortunately, the company that acquired Clicknotices decided to scrap the project and rebuild the website using their own development team, which meant that the Clicknotices development team, including me, was let go.</p>
        <p className="p-2 ps-5">
        After returning to Maine, I enrolled in the full-stack development boot camp at UNH to learn more about back-end development. While attending the boot camp, I landed a job as an email production associate for Banyan Hill Publishing. In this role, I send around 30 emails per day to a large subscriber base of 500,000 people.</p>
        <PageHeader text="Skill Level" />
      </div>
      <Container>
        <div>
          <Row>
            <Col md={1}>
              <img src={HTML} alt="HTML" />
            </Col>
            <Col md={11}>
              <div className="slidecontainer">
                <div className="skills html text-dark">99%</div>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col md={1}>
              <img src={CSS} alt="CSS" />
            </Col>
            <Col md={11}>
              <div className="slidecontainer">
                <div className="skills CSS text-dark">71%</div>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col md={1}>
              <img src={JS} alt="JS" />
            </Col>
            <Col md={11}>
              <div className="slidecontainer">
                <div className="skills JS text-dark">82%</div>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col md={1}>
              <img src={ReactJS} alt="React" />
            </Col>
            <Col md={11}>
              <div className="slidecontainer">
                <div className="skills React text-dark">61%</div>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col md={1}>
              <img src={angularJS} alt="Angular" />
            </Col>
            <Col md={11}>
              <div className="slidecontainer">
                <div className="skills Angular text-dark">25%</div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Aboutpage;
