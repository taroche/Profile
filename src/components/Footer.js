import React from "react";
import { Container } from "react-bootstrap/Container";
import { Row } from "react-bootstrap/Row";
import { Col } from "react-bootstrap/Col";


function Footer(){

    return(
        <footer>
            <Container fluid={true}>
                <Row className="border-top justify-content-between align-items-center p-3">
                    <Col className="p-0 md={3} sm={12}">
                        <a href="https://www.linkedin.com/in/tristan-laroche/" target="_blank" rel="noreferrer">My Linkedin</a><br></br>

                        <a href="https://github.com/taroche" target="_blank" rel="noreferrer">My Github</a>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end font-weight-light md={3}">
                        This site was made by Tristan LaRoche.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer