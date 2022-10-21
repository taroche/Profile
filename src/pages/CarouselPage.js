import React from "react";
import { Slideshow } from "../components/Slideshow";
import { PageHeader } from "../components/PageHeader";

const CarouselPage = () => {
  return (
    <div className="pageBody">
      <PageHeader text="My Projects" />
      <Slideshow />
    </div>
  );
};

export default CarouselPage;
