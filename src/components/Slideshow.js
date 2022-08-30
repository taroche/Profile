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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
