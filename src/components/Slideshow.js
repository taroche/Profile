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
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
