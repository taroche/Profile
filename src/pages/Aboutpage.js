import React from "react";
import { PageHeader } from "../components/PageHeader";

const Aboutpage = () => {
  return (
    <>
      <PageHeader text="About Me" />
      <div className="aboutMe">
        <p className="display-4"> Hello!</p>
        <p>
          Before I became a developer, I was working at Gelato Fiasco. I started
          there as just a simple kitchen working at one of their stores. I would
          spend the days making gelato for each customer that walked into the
          door. They then decide to expand their business to make pints to sell
          in the shores all around America and for that they build a factory.
          When we moved into the new factory, they grabbed a couple of us form
          the kitchen to work there and since I had proven to be one of the
          harder workers there, I was put in charge of one of the two shifts
          even though I was one of the newer people. While in charge of my shift
          I made sure to always hit the number that they set for that day and to
          try and go above it whenever possible. In fact, I like to treat every
          day like a competition between us and the other shift so see who got
          more done (and I very rarely lost). The company then bought some new
          equipment to help produce things faster and because my shift was the
          more productive of the two, I was put in charge of learning the new
          machine and any other that we would get. I spent 2 years overseeing
          maintenance of all the machines under a great factory manager and when
          she left, I was promoted to her job where I would be in charge of
          everything until they decide to close their factory to switch to a
          third-party provider of cost resounds.
        </p>
        <p>
          I then switch to follow my dream to be a web developer. I went down to
          Maryland to go to a front-end development boot camp. Where I learn
          HTML, CSS, and JavaScript. I then got my first job in tech for
          Concourse Federal Group as a contract working in quality assurance.
          Just going over their code checking their spelling and grammar (since
          it was not written by native English speakers). When the contract
          ended, I got another job working at Clicknotices doing a lot of code
          refactoring. They had an old web site that had a lot of copy and
          pasted code that they wanted to make a lot cleaner and more reusable.
          They then got bought out and the company that did it decided to just
          scrap the whole project and to use their one development team to
          remake the whole thing. So, they let the development team at
          Clicknotices go. I then came back to Maine and enrolled in the UNH
          full stack development boot camp to learn to do more things then just
          front end. I am currently working for Banyan Hill Publishing and an
          email production assousite. Where I make and send 30 emails a day.
        </p>
      </div>
    </>
  );
};

export default Aboutpage;
