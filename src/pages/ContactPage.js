import { React } from "react";
import { PageHeader } from "../components/PageHeader";
import EmailForm from "../components/EmailForm";
import FunFact from "../components/FunFact";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Resume from "../img/TAL_resumes.mht";

const contactPage = () => {

  return (
    <div className="pageBody">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <PageHeader text="Let's have a chat" />
            <p>
              If you want to talk to me about anything you can fill out the form
              and send me which will send me an email.
            </p>
            <p>
              Resume: <a href={Resume}>Read the full file</a>.
            </p>
            <FunFact></FunFact>
          </Col>
          <Col md={6} sm={12}>
            <EmailForm></EmailForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default contactPage;
