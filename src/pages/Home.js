import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profilePictureImg from "../img/profile-picture.png";

export const Home = () => {
  
  return (
    <div className="hello pageBody">
      <Container>
        <Row>
          <Col md={6} sm={12} className="text-light">
            <h1>HelloWorld, my name is Tristan</h1>
            <p>Web Developer</p>
            <p>
              Thanks for coming to my page to checkout some of my better
              projects and learn a little bit about me.
            </p>
            <div className="firework"></div>

          </Col>
          <Col md={6} sm={12}>
            <div className="x">
            <img
              src={profilePictureImg}
              alt="profile"
              className="profilePicture y"
            />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
