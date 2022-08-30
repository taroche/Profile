import React from "react";
import { Slideshow } from "../components/Slideshow";
import { PageHeader } from "../components/PageHeader";

const CarouselPage = () => {
  return (
    <>
      <PageHeader text="My Projects" />
      <Slideshow />
    </>
  );
};

export default CarouselPage;
