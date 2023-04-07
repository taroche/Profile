import { React, createRef } from "react";
//import emailjs from "@emailjs/browser";
import { PageHeader } from "../components/PageHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Resume from "../img/TAL_resumes.mht";

const contactPage = () => {
  const form = createRef();

  /*const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q84yunw",
        "template_bb721mn",
        form.current,
        "6tPR3AHWAw706f2X1"
      )
      .then(
        (result) => {
          const success = document.createElement("p");
          success.className = "p-3 mb-2 bg-success text-white text-center";
          success.innerText = "Your email has been sent";
          document.querySelector(".pageBody").appendChild(success);
        },
        (error) => {
          const failure = document.createElement("p");
          failure.className = "p-3 mb-2 bg-danger text-white text-center";
          failure.innerText =
            "There was an error please check your information and try again";
          document.querySelector(".pageBody").appendChild(failure);
        }
      );
    e.target.reset();
  };*/

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
            <p>Fun Fact about today</p>
            <p></p>
          </Col>
          <Col md={6} sm={12}>
            <form
              ref={form}
              //onSubmit={sendEmail}
              className="text-left formElement"
            >
              <label>Name:</label>
              <br></br>
              <input type="text" name="user_name" className="fieldElement" />
              <br></br>
              <label>Email:</label>
              <br></br>
              <input type="email" name="user_email" className="fieldElement" />
              <br></br>
              <label>Message:</label>
              <br></br>
              <textarea name="message" rows="4" className="fieldElement" />
              <br></br>
              <Button
                type="submit"
                variant="outline-success"
                className="fieldElement"
              >
                Send
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default contactPage;
