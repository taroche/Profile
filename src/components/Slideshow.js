import React from "react";
import Carousel from "react-bootstrap/Carousel";

import directory from "../img/employee-directory-image.png";
import weather from "../img/Weather-dashboard.png";
import beerPicker from "../img/DraughtPicker.png";

export const Slideshow = () => {
  return (
    <div className="carousel-container">
      <Carousel className="carousel" variant="dark">
        
        <Carousel.Item>
          <img className="d-block w-100" src={weather} alt="Second slide" />

          <Carousel.Caption className="carousel-caption-positon">
            <h3>Weather Dashboard App</h3>
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
            <h3>Employee Directory App</h3>
            <p>
              A SPA (Single Page Application) that allows the user to sort and
              filter employees returned from the API. Sortable columns are the
              following: name, email, phone and birthday. Along with being able
              to sort columns the user also has a search feature where they can
              enter a name to search and it will return matching criteria.
              <br></br>
              Go{" "}
              <a
                href="https://taroche.github.io/Employee-Directory/"
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
          <img className="d-block w-100" src={beerPicker} alt="Fourth slide" />

          <Carousel.Caption className="carousel-caption-positon">
            <h3>The Draught Picker App</h3>
            <p>
              This site allows the user to enter a zip code and receive the
              name, address, phone number, URL, and type of all the breweries
              that are local to the zip code. The user is give the option save
              up to five locations to their favorites.
              <br></br>
              Go{" "}
              <a
                href="https://josephjlyons.github.io/DraughtPicker/"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>{" "}
              to view it.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
