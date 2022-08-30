import React from "react";
import Carousel from "react-bootstrap/Carousel";
import noteTaker from "../img/Note_taker_homepage.png";
import directory from "../img/employee-directory-image.png";
import weather from "../img/Weather-dashboard.png";
import beerPicker from "../img/websiteImage.png";

export const Slideshow = () => {
  return (
    <div className="carousel-container">
      <Carousel className="carousel" variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={noteTaker} alt="First slide" />
          <Carousel.Caption className="carousel-caption-positon">
            <h3>Note Taker App</h3>
            <p>
              This is an app that lets you make notes and save them to a list.
              The front end was provided for me and I made the database with
              express and uuid.
              <br></br>
              Go{" "}
              <a
                href="https://sleepy-thicket-78623.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>{" "}
              to view it.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={weather} alt="Second slide" />

          <Carousel.Caption className="carousel-caption-positon">
            <p>
              This website allows you to check the weather anywhere in the
              United States. You write the city for whom's weather you would
              like in the search input and then press the button. That makes a
              city button that when you press on it it shows you the weather for
              today and a five day forcast. You can have multiable city buttons
              and you can change bewteen them by click on a different city. The
              city button will save when you reload the page.
              <br></br>
              Go{" "}
              <a
                href="https://taroche.github.io/Weather-Dashboard/"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>{" "}
              to view it.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={directory} alt="Third slide" />

          <Carousel.Caption className="carousel-caption-positon">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={beerPicker} alt="Fourth slide" />

          <Carousel.Caption className="carousel-caption-positon">
            <h3>Four slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
